/// <reference path="./platforms/ios/typings/adal.ios.d.ts" />
declare var interop: any;
declare var NSURL: any;
export class AzureAuth {

    private authenticationError: any;
    private authenticationResult: ADAuthenticationResult;
    private authority: string;
    private clientId: string;
    private context: ADAuthenticationContext;
    private redirectUri: string;
    private resourceId: string;
    private userId;
    private keyChainCache: ADKeychainTokenCache;
    private tokenCacheItem: ADTokenCacheItem;
    constructor(authority: string, clientId: string, resourceId: string, redirectUri: string) {
        this.authenticationError = new interop.Reference();
        this.authority = authority;
        this.clientId = clientId;
        this.resourceId = resourceId;
        this.redirectUri = redirectUri;
        console.log({
            KeyChainGroup: ADAuthenticationSettings.sharedInstance().defaultKeychainGroup()
        });
        this.keyChainCache = new ADKeychainTokenCache({group: ADAuthenticationSettings.sharedInstance().defaultKeychainGroup()});
        this.context = ADAuthenticationContext.authenticationContextWithAuthorityError(this.authority, this.authenticationError);
    }

    public login(fresh): Promise<string> {
        // Clears token when trying to login.
        if (typeof this.tokenCacheItem !== "undefined" || this.tokenCacheItem !== null) {
            const removed = this.keyChainCache.removeAllForClientIdError(this.clientId, this.authenticationError);
            console.log(`Clearing cache for clientID: ${this.clientId}`);
            console.log(`STATUS ${removed}`);
        }
        return new Promise<string>((resolve, reject) => {
            const promptBehaviour = (fresh ? 1 : 0);
            this.context
            .acquireTokenWithResourceClientIdRedirectUriPromptBehaviorUserIdentifierExtraQueryParametersCompletionBlock(
                this.resourceId,
                this.clientId,
                NSURL.URLWithString(this.redirectUri),
                promptBehaviour,
                undefined,
                "",
                (authResult: ADAuthenticationResult) => {
                    this.authenticationResult = authResult;
                    if (authResult.error) {
                        reject(authResult.error);
                    } else {
                        this.userId = authResult.tokenCacheItem.userInformation.userObjectId;
                        this.tokenCacheItem = authResult.tokenCacheItem;
                        resolve(authResult.accessToken);
                    }
                }
            );
        });
    }

    public getToken(): Promise<string> {
        console.log("Trying to retrieve token silently");
        console.log({
            userId: this.userId,
            mess: "You are already logged in"
        });
        return new Promise<string>((resolve, reject) => {
            this.context
            .acquireTokenSilentWithResourceClientIdRedirectUriCompletionBlock(
                this.resourceId,
                this.clientId,
                NSURL.URLWithString(this.redirectUri),
                (authResult: ADAuthenticationResult) => {
                    console.log(authResult.error);
                    if (authResult.error) {
                        reject(authResult.error);
                    } else {
                        resolve(authResult.accessToken);
                    }
                }
            );
        });
    }
}
