/// <reference path="./platforms/ios/typings/adal.ios.d.ts" />
declare var interop: any;
declare var NSURL: any;
export class AzureAuth {

    private authenticationError: any;
    private authority: string;
    private clientId: string;
    private context: ADAuthenticationContext;
    private redirectUri: string;
    private resourceId: string;
    private userId: string;
    private keyChainCache: ADKeychainTokenCache;
    private promptBehaviour = 1;
    private CONSOLE_TAG = "[Azure Auth]:";
    constructor(authority: string, clientId: string, resourceId: string, redirectUri: string) {
        this.authenticationError = new interop.Reference();
        this.authority = authority;
        this.clientId = clientId;
        this.resourceId = resourceId;
        this.redirectUri = redirectUri;
        this.keyChainCache = new ADKeychainTokenCache({group: ADAuthenticationSettings.sharedInstance().defaultKeychainGroup()});
        this.context = ADAuthenticationContext.authenticationContextWithAuthorityError(this.authority, this.authenticationError);
    }

    public login(clearCache?: boolean): Promise<string> {
        if (typeof clearCache === undefined || clearCache) {
            console.log(`Clearing cache for clientID: ${this.clientId}`);
            this.clearCache();
        }
        return new Promise<string>((resolve, reject) => {
            this.context
            .acquireTokenWithResourceClientIdRedirectUriPromptBehaviorUserIdentifierExtraQueryParametersCompletionBlock(
                this.resourceId,
                this.clientId,
                NSURL.URLWithString(this.redirectUri),
                this.promptBehaviour,
                undefined,
                "",
                (authResult: ADAuthenticationResult) => {
                    if (authResult.error) {
                        console.log(`${this.CONSOLE_TAG} Error loggin in against ${this.clientId}`);
                        console.log(`${this.CONSOLE_TAG} STACK TRACE`);
                        console.log(authResult.error);
                        reject(authResult.error);
                    } else {
                        this.userId = authResult.tokenCacheItem.userInformation.userObjectId;
                        console.log(`${this.CONSOLE_TAG} Successfully logged in against ${this.clientId}`);
                        console.log(`${this.CONSOLE_TAG} Token resource set for: ${this.resourceId}`);
                        console.log(`${this.CONSOLE_TAG} Verified login for user: ${authResult.tokenCacheItem.userInformation.uniqueName}`);
                        console.log(`${this.CONSOLE_TAG} User ID: ${this.userId}`);
                        console.log(`${this.CONSOLE_TAG} Token expiry: ${authResult.tokenCacheItem.expiresOn.toString()}`);
                        resolve(authResult.accessToken);
                    }
                }
            );
        });
    }

    public getToken(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.context
            .acquireTokenSilentWithResourceClientIdRedirectUriCompletionBlock(
                this.resourceId,
                this.clientId,
                NSURL.URLWithString(this.redirectUri),
                (authResult: ADAuthenticationResult) => {
                    if (authResult.error) {
                        console.log(`${this.CONSOLE_TAG} Error retrieving access token silently`);
                        console.log(`${this.CONSOLE_TAG} STACK TRACE`);
                        console.log(authResult.error);
                        reject(authResult.error);
                    } else {
                        console.log(`${this.CONSOLE_TAG} Successfully retrieved new token`);
                        resolve(authResult.accessToken);
                    }
                }
            );
        });
    }

    public clearCache(): void {
        const removed = this.keyChainCache.removeAllForClientIdError(this.clientId, this.authenticationError);
        console.log(`${this.CONSOLE_TAG} Cleared ADAL cache ${this.clientId}`);
    }
}
