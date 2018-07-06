
declare var ADALFrameworkVersionNumber: number;

declare var ADALFrameworkVersionString: interop.Reference<number>;

declare const enum ADAL_LOG_LEVEL {

	EVEL_NO_LOG = 0,

	EVEL_ERROR = 1,

	EVEL_WARN = 2,

	EVEL_INFO = 3,

	EVEL_VERBOSE = 4,

	AST = 4
}

declare const enum ADAssertionType {

	D_SAML1_1 = 0,

	D_SAML2 = 1
}

declare class ADAuthenticationContext extends NSObject {

	static alloc(): ADAuthenticationContext; // inherited from NSObject

	static authenticationContextWithAuthorityError(authority: string, error: interop.Pointer | interop.Reference<ADAuthenticationError>): ADAuthenticationContext;

	static authenticationContextWithAuthoritySharedGroupError(authority: string, sharedGroup: string, error: interop.Pointer | interop.Reference<ADAuthenticationError>): ADAuthenticationContext;

	static authenticationContextWithAuthorityValidateAuthorityError(authority: string, validate: boolean, error: interop.Pointer | interop.Reference<ADAuthenticationError>): ADAuthenticationContext;

	static authenticationContextWithAuthorityValidateAuthoritySharedGroupError(authority: string, validate: boolean, sharedGroup: string, error: interop.Pointer | interop.Reference<ADAuthenticationError>): ADAuthenticationContext;

	static handleBrokerResponse(response: NSURL): boolean;

	static isResponseFromBrokerResponse(sourceApplication: string, response: NSURL): boolean;

	static new(): ADAuthenticationContext; // inherited from NSObject

	readonly authority: string;

	correlationId: NSUUID;

	credentialsType: ADCredentialsType;

	extendedLifetimeEnabled: boolean;

	logComponent: string;

	parentController: UIViewController;

	validateAuthority: boolean;

	webView: UIWebView;

	constructor(o: { authority: string; validateAuthority: boolean; error: interop.Pointer | interop.Reference<ADAuthenticationError>; });

	constructor(o: { authority: string; validateAuthority: boolean; sharedGroup: string; error: interop.Pointer | interop.Reference<ADAuthenticationError>; });

	acquireTokenForAssertionAssertionTypeResourceClientIdUserIdCompletionBlock(assertion: string, assertionType: ADAssertionType, resource: string, clientId: string, userId: string, completionBlock: (p1: ADAuthenticationResult) => void): void;

	acquireTokenSilentWithResourceClientIdRedirectUriCompletionBlock(resource: string, clientId: string, redirectUri: NSURL, completionBlock: (p1: ADAuthenticationResult) => void): void;

	acquireTokenSilentWithResourceClientIdRedirectUriUserIdCompletionBlock(resource: string, clientId: string, redirectUri: NSURL, userId: string, completionBlock: (p1: ADAuthenticationResult) => void): void;

	acquireTokenWithRefreshTokenResourceClientIdRedirectUriCompletionBlock(refreshToken: string, resource: string, clientId: string, redirectUri: NSURL, completionBlock: (p1: ADAuthenticationResult) => void): void;

	acquireTokenWithResourceClientIdRedirectUriCompletionBlock(resource: string, clientId: string, redirectUri: NSURL, completionBlock: (p1: ADAuthenticationResult) => void): void;

	acquireTokenWithResourceClientIdRedirectUriPromptBehaviorUserIdExtraQueryParametersCompletionBlock(resource: string, clientId: string, redirectUri: NSURL, promptBehavior: ADPromptBehavior, userId: string, queryParams: string, completionBlock: (p1: ADAuthenticationResult) => void): void;

	acquireTokenWithResourceClientIdRedirectUriPromptBehaviorUserIdentifierExtraQueryParametersClaimsCompletionBlock(resource: string, clientId: string, redirectUri: NSURL, promptBehavior: ADPromptBehavior, userId: ADUserIdentifier, queryParams: string, claims: string, completionBlock: (p1: ADAuthenticationResult) => void): void;

	acquireTokenWithResourceClientIdRedirectUriPromptBehaviorUserIdentifierExtraQueryParametersCompletionBlock(resource: string, clientId: string, redirectUri: NSURL, promptBehavior: ADPromptBehavior, userId: ADUserIdentifier, queryParams: string, completionBlock: (p1: ADAuthenticationResult) => void): void;

	acquireTokenWithResourceClientIdRedirectUriUserIdCompletionBlock(resource: string, clientId: string, redirectUri: NSURL, userId: string, completionBlock: (p1: ADAuthenticationResult) => void): void;

	acquireTokenWithResourceClientIdRedirectUriUserIdExtraQueryParametersCompletionBlock(resource: string, clientId: string, redirectUri: NSURL, userId: string, queryParams: string, completionBlock: (p1: ADAuthenticationResult) => void): void;

	initWithAuthorityValidateAuthorityError(authority: string, validateAuthority: boolean, error: interop.Pointer | interop.Reference<ADAuthenticationError>): this;

	initWithAuthorityValidateAuthoritySharedGroupError(authority: string, validateAuthority: boolean, sharedGroup: string, error: interop.Pointer | interop.Reference<ADAuthenticationError>): this;
}

declare class ADAuthenticationError extends NSError {

	static alloc(): ADAuthenticationError; // inherited from NSObject

	static errorWithDomainCodeUserInfo(domain: string, code: number, dict: NSDictionary<string, any>): ADAuthenticationError; // inherited from NSError

	static fileProviderErrorForCollisionWithItem(existingItem: NSFileProviderItem): ADAuthenticationError; // inherited from NSError

	static fileProviderErrorForNonExistentItemWithIdentifier(itemIdentifier: string): ADAuthenticationError; // inherited from NSError

	static new(): ADAuthenticationError; // inherited from NSObject

	readonly errorDetails: string;

	readonly protocolCode: string;
}

declare var ADAuthenticationErrorDomain: string;

declare class ADAuthenticationParameters extends NSObject {

	static alloc(): ADAuthenticationParameters; // inherited from NSObject

	static new(): ADAuthenticationParameters; // inherited from NSObject

	static parametersFromResourceUrlCompletionBlock(resourceUrl: NSURL, completionBlock: (p1: ADAuthenticationParameters, p2: ADAuthenticationError) => void): void;

	static parametersFromResponseAuthenticateHeaderError(authenticateHeader: string, error: interop.Pointer | interop.Reference<ADAuthenticationError>): ADAuthenticationParameters;

	static parametersFromResponseError(response: NSHTTPURLResponse, error: interop.Pointer | interop.Reference<ADAuthenticationError>): ADAuthenticationParameters;

	readonly authority: string;

	readonly extractedParameters: NSDictionary<any, any>;

	readonly resource: string;
}

declare class ADAuthenticationResult extends NSObject {

	static alloc(): ADAuthenticationResult; // inherited from NSObject

	static new(): ADAuthenticationResult; // inherited from NSObject

	readonly accessToken: string;

	readonly authority: string;

	readonly correlationId: NSUUID;

	readonly error: ADAuthenticationError;

	readonly extendedLifeTimeToken: boolean;

	readonly multiResourceRefreshToken: boolean;

	readonly status: ADAuthenticationResultStatus;

	readonly tokenCacheItem: ADTokenCacheItem;
}

declare const enum ADAuthenticationResultStatus {

	D_SUCCEEDED = 0,

	D_USER_CANCELLED = 1,

	D_FAILED = 2
}

declare class ADAuthenticationSettings extends NSObject {

	static alloc(): ADAuthenticationSettings; // inherited from NSObject

	static new(): ADAuthenticationSettings; // inherited from NSObject

	static sharedInstance(): ADAuthenticationSettings;

	enableFullScreen: boolean;

	expirationBuffer: number;

	requestTimeOut: number;

	defaultKeychainGroup(): string;

	setDefaultKeychainGroup(keychainGroup: string): void;
}

declare var ADBrokerResponseErrorDomain: string;

declare const enum ADCredentialsType {

	D_CREDENTIALS_AUTO = 0,

	D_CREDENTIALS_EMBEDDED = 1
}

interface ADDispatcher extends NSObjectProtocol {

	dispatchEvent(event: NSDictionary<string, string>): void;
}
declare var ADDispatcher: {

	prototype: ADDispatcher;
};

declare const enum ADErrorCode {

	D_ERROR_SUCCEEDED = 0,

	D_ERROR_UNEXPECTED = -1,

	D_ERROR_DEVELOPER_INVALID_ARGUMENT = 100,

	D_ERROR_DEVELOPER_AUTHORITY_VALIDATION = 101,

	D_ERROR_SERVER_USER_INPUT_NEEDED = 200,

	D_ERROR_SERVER_WPJ_REQUIRED = 201,

	D_ERROR_SERVER_OAUTH = 202,

	D_ERROR_SERVER_REFRESH_TOKEN_REJECTED = 203,

	D_ERROR_SERVER_WRONG_USER = 204,

	D_ERROR_SERVER_NON_HTTPS_REDIRECT = 205,

	D_ERROR_SERVER_INVALID_ID_TOKEN = 206,

	D_ERROR_SERVER_MISSING_AUTHENTICATE_HEADER = 207,

	D_ERROR_SERVER_AUTHENTICATE_HEADER_BAD_FORMAT = 208,

	D_ERROR_SERVER_UNAUTHORIZED_CODE_EXPECTED = 209,

	D_ERROR_SERVER_UNSUPPORTED_REQUEST = 210,

	D_ERROR_SERVER_AUTHORIZATION_CODE = 211,

	D_ERROR_SERVER_INVALID_RESPONSE = 212,

	D_ERROR_CACHE_MULTIPLE_USERS = 300,

	D_ERROR_CACHE_VERSION_MISMATCH = 301,

	D_ERROR_CACHE_BAD_FORMAT = 302,

	D_ERROR_CACHE_NO_REFRESH_TOKEN = 303,

	D_ERROR_UI_MULTLIPLE_INTERACTIVE_REQUESTS = 400,

	D_ERROR_UI_NO_MAIN_VIEW_CONTROLLER = 401,

	D_ERROR_UI_NOT_SUPPORTED_IN_APP_EXTENSION = 402,

	D_ERROR_UI_USER_CANCEL = 403,

	D_ERROR_UI_NOT_ON_MAIN_THREAD = 404,

	D_ERROR_TOKENBROKER_UNKNOWN = 500,

	D_ERROR_TOKENBROKER_INVALID_REDIRECT_URI = 501,

	D_ERROR_TOKENBROKER_RESPONSE_HASH_MISMATCH = 502,

	D_ERROR_TOKENBROKER_RESPONSE_NOT_RECEIVED = 503,

	D_ERROR_TOKENBROKER_FAILED_TO_CREATE_KEY = 504,

	D_ERROR_TOKENBROKER_DECRYPTION_FAILED = 505,

	D_ERROR_TOKENBROKER_NOT_A_BROKER_RESPONSE = 506,

	D_ERROR_TOKENBROKER_NO_RESUME_STATE = 507,

	D_ERROR_TOKENBROKER_BAD_RESUME_STATE = 508,

	D_ERROR_TOKENBROKER_MISMATCHED_RESUME_STATE = 509,

	D_ERROR_TOKENBROKER_HASH_MISSING = 510,

	D_ERROR_TOKENBROKER_NOT_SUPPORTED_IN_EXTENSION = 511
}

declare var ADHTTPErrorCodeDomain: string;

declare var ADHTTPHeadersKey: string;

declare var ADKeychainErrorDomain: string;

declare class ADKeychainTokenCache extends NSObject {

	static alloc(): ADKeychainTokenCache; // inherited from NSObject

	static defaultKeychainCache(): ADKeychainTokenCache;

	static defaultKeychainGroup(): string;

	static keychainCacheForGroup(group: string): ADKeychainTokenCache;

	static new(): ADKeychainTokenCache; // inherited from NSObject

	static setDefaultKeychainGroup(keychainGroup: string): void;

	readonly sharedGroup: string;

	constructor(o: { group: string; });

	allItems(error: interop.Pointer | interop.Reference<ADAuthenticationError>): NSArray<ADTokenCacheItem>;

	initWithGroup(sharedGroup: string): this;

	removeAllForClientIdError(clientId: string, error: interop.Pointer | interop.Reference<ADAuthenticationError>): boolean;

	removeAllForUserIdClientIdError(userId: string, clientId: string, error: interop.Pointer | interop.Reference<ADAuthenticationError>): boolean;

	removeItemError(item: ADTokenCacheItem, error: interop.Pointer | interop.Reference<ADAuthenticationError>): boolean;

	wipeAllItemsForUserIdError(userId: string, error: interop.Pointer | interop.Reference<ADAuthenticationError>): boolean;
}

declare class ADLogger extends NSObject {

	static alloc(): ADLogger; // inherited from NSObject

	static getLevel(): ADAL_LOG_LEVEL;

	static getNSLogging(): boolean;

	static getPiiEnabled(): boolean;

	static new(): ADLogger; // inherited from NSObject

	static setLevel(logLevel: ADAL_LOG_LEVEL): void;

	static setLogCallBack(callback: (p1: ADAL_LOG_LEVEL, p2: string, p3: string, p4: number, p5: NSDictionary<any, any>) => void): void;

	static setLoggerCallback(callback: (p1: ADAL_LOG_LEVEL, p2: string, p3: boolean) => void): void;

	static setNSLogging(nslogging: boolean): void;

	static setPiiEnabled(piiEnabled: boolean): void;
}

declare var ADOAuthServerErrorDomain: string;

declare const enum ADPromptBehavior {

	D_PROMPT_AUTO = 0,

	D_PROMPT_ALWAYS = 1,

	D_PROMPT_REFRESH_SESSION = 2,

	D_FORCE_PROMPT = 3
}

declare class ADTelemetry extends NSObject {

	static alloc(): ADTelemetry; // inherited from NSObject

	static new(): ADTelemetry; // inherited from NSObject

	static sharedInstance(): ADTelemetry;

	piiEnabled: boolean;

	addDispatcherAggregationRequired(dispatcher: ADDispatcher, aggregationRequired: boolean): void;

	removeAllDispatchers(): void;

	removeDispatcher(dispatcher: ADDispatcher): void;
}

declare class ADTokenCacheItem extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): ADTokenCacheItem; // inherited from NSObject

	static new(): ADTokenCacheItem; // inherited from NSObject

	accessToken: string;

	accessTokenType: string;

	authority: string;

	clientId: string;

	expiresOn: Date;

	familyId: string;

	refreshToken: string;

	resource: string;

	sessionKey: NSData;

	userInformation: ADUserInformation;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEmptyUser(): boolean;

	isExpired(): boolean;

	isMultiResourceRefreshToken(): boolean;
}

declare class ADUserIdentifier extends NSObject implements NSCopying {

	static alloc(): ADUserIdentifier; // inherited from NSObject

	static identifierMatchesInfo(identifier: ADUserIdentifier, info: ADUserInformation): boolean;

	static identifierWithId(userId: string): ADUserIdentifier;

	static identifierWithIdType(userId: string, type: ADUserIdentifierType): ADUserIdentifier;

	static identifierWithIdTypeFromString(userId: string, type: string): ADUserIdentifier;

	static new(): ADUserIdentifier; // inherited from NSObject

	static stringForType(type: ADUserIdentifierType): string;

	readonly type: ADUserIdentifierType;

	readonly userId: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	isDisplayable(): boolean;

	typeAsString(): string;

	userIdMatchString(info: ADUserInformation): string;
}

declare const enum ADUserIdentifierType {

	UniqueId = 0,

	OptionalDisplayableId = 1,

	RequiredDisplayableId = 2
}

declare class ADUserInformation extends NSObject implements NSCopying, NSSecureCoding {

	static alloc(): ADUserInformation; // inherited from NSObject

	static new(): ADUserInformation; // inherited from NSObject

	static normalizeUserId(userId: string): string;

	static userInformationWithIdTokenError(idToken: string, error: interop.Pointer | interop.Reference<ADAuthenticationError>): ADUserInformation;

	readonly allClaims: NSDictionary<any, any>;

	readonly eMail: string;

	readonly familyName: string;

	readonly givenName: string;

	readonly guestId: string;

	readonly identityProvider: string;

	readonly rawIdToken: string;

	readonly subject: string;

	readonly tenantId: string;

	readonly uniqueId: string;

	readonly uniqueName: string;

	readonly upn: string;

	readonly userId: string;

	readonly userIdDisplayable: boolean;

	readonly userObjectId: string;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;
}

declare class ADWebAuthController extends NSObject {

	static alloc(): ADWebAuthController; // inherited from NSObject

	static cancelCurrentWebAuthSession(): void;

	static new(): ADWebAuthController; // inherited from NSObject

	static responseFromInterruptedBrokerSession(): ADAuthenticationResult;
}

declare var ADWebAuthDidCompleteNotification: string;

declare var ADWebAuthDidFailNotification: string;

declare var ADWebAuthDidFinishLoadNotification: string;

declare var ADWebAuthDidReceieveResponseFromBroker: string;

declare var ADWebAuthDidStartLoadNotification: string;

declare var ADWebAuthWillSwitchToBrokerApp: string;

declare const enum HTTPStatusCodes {

	P_UNAUTHORIZED = 401
}
