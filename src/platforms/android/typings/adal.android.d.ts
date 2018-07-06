import androidcontentContext = android.content.Context;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class ADALError {
          public static DEVELOPER_AUTHORITY_CAN_NOT_BE_VALIDED: com.microsoft.aad.adal.ADALError;
          public static DEVELOPER_AUTHORITY_IS_NOT_VALID_INSTANCE: com.microsoft.aad.adal.ADALError;
          public static DEVELOPER_AUTHORITY_IS_NOT_VALID_URL: com.microsoft.aad.adal.ADALError;
          public static DEVELOPER_AUTHORITY_IS_EMPTY: com.microsoft.aad.adal.ADALError;
          public static DEVELOPER_ASYNC_TASK_REUSED: com.microsoft.aad.adal.ADALError;
          public static DEVELOPER_RESOURCE_IS_EMPTY: com.microsoft.aad.adal.ADALError;
          public static DEVELOPER_CONTEXT_IS_NOT_PROVIDED: com.microsoft.aad.adal.ADALError;
          public static DEVELOPER_BEARER_HEADER_MULTIPLE_ITEMS: com.microsoft.aad.adal.ADALError;
          public static CALLBACK_IS_NOT_FOUND: com.microsoft.aad.adal.ADALError;
          public static DEVELOPER_ACTIVITY_IS_NOT_RESOLVED: com.microsoft.aad.adal.ADALError;
          public static DEVELOPER_INTERNET_PERMISSION_MISSING: com.microsoft.aad.adal.ADALError;
          public static DEVELOPER_BROKER_PERMISSIONS_MISSING: com.microsoft.aad.adal.ADALError;
          public static DEVELOPER_CALLING_ON_MAIN_THREAD: com.microsoft.aad.adal.ADALError;
          public static DEVELOPER_DIALOG_LAYOUT_INVALID: com.microsoft.aad.adal.ADALError;
          public static SERVER_INVALID_REQUEST: com.microsoft.aad.adal.ADALError;
          public static SERVER_ERROR: com.microsoft.aad.adal.ADALError;
          public static IO_EXCEPTION: com.microsoft.aad.adal.ADALError;
          public static ARGUMENT_EXCEPTION: com.microsoft.aad.adal.ADALError;
          public static ERROR_FAILED_SSL_HANDSHAKE: com.microsoft.aad.adal.ADALError;
          public static ERROR_WEBVIEW: com.microsoft.aad.adal.ADALError;
          public static ACTIVITY_REQUEST_INTENT_DATA_IS_NULL: com.microsoft.aad.adal.ADALError;
          public static BROADCAST_RECEIVER_ERROR: com.microsoft.aad.adal.ADALError;
          public static AUTH_FAILED: com.microsoft.aad.adal.ADALError;
          public static AUTH_REFRESH_FAILED_PROMPT_NOT_ALLOWED: com.microsoft.aad.adal.ADALError;
          public static AUTH_FAILED_SERVER_ERROR: com.microsoft.aad.adal.ADALError;
          public static AUTH_FAILED_NO_RESOURCES: com.microsoft.aad.adal.ADALError;
          public static AUTH_FAILED_NO_STATE: com.microsoft.aad.adal.ADALError;
          public static AUTH_FAILED_BAD_STATE: com.microsoft.aad.adal.ADALError;
          public static AUTH_FAILED_NO_TOKEN: com.microsoft.aad.adal.ADALError;
          public static AUTH_FAILED_CANCELLED: com.microsoft.aad.adal.ADALError;
          public static AUTH_FAILED_INTERNAL_ERROR: com.microsoft.aad.adal.ADALError;
          public static AUTH_FAILED_USER_MISMATCH: com.microsoft.aad.adal.ADALError;
          public static DEVICE_INTERNET_IS_NOT_AVAILABLE: com.microsoft.aad.adal.ADALError;
          public static ON_ACTIVITY_RESULT_INTENT_NULL: com.microsoft.aad.adal.ADALError;
          public static ON_ACTIVITY_RESULT_CALLBACK_NOT_FOUND: com.microsoft.aad.adal.ADALError;
          public static DEVICE_SHARED_PREF_IS_NOT_AVAILABLE: com.microsoft.aad.adal.ADALError;
          public static DEVICE_CACHE_IS_NOT_WORKING: com.microsoft.aad.adal.ADALError;
          public static DEVICE_FILE_CACHE_IS_NOT_LOADED_FROM_FILE: com.microsoft.aad.adal.ADALError;
          public static DEVICE_FILE_CACHE_IS_NOT_WRITING_TO_FILE: com.microsoft.aad.adal.ADALError;
          public static DEVICE_FILE_CACHE_FORMAT_IS_WRONG: com.microsoft.aad.adal.ADALError;
          public static DEVICE_CONNECTION_IS_NOT_AVAILABLE: com.microsoft.aad.adal.ADALError;
          public static DEVICE_PRNG_FIX_ERROR: com.microsoft.aad.adal.ADALError;
          public static IDTOKEN_PARSING_FAILURE: com.microsoft.aad.adal.ADALError;
          public static DATE_PARSING_FAILURE: com.microsoft.aad.adal.ADALError;
          public static AUTHORIZATION_CODE_NOT_EXCHANGED_FOR_TOKEN: com.microsoft.aad.adal.ADALError;
          public static BROADCAST_CANCEL_NOT_SUCCESSFUL: com.microsoft.aad.adal.ADALError;
          public static CORRELATION_ID_FORMAT: com.microsoft.aad.adal.ADALError;
          public static CORRELATION_ID_NOT_MATCHING_REQUEST_RESPONSE: com.microsoft.aad.adal.ADALError;
          public static ENCODING_IS_NOT_SUPPORTED: com.microsoft.aad.adal.ADALError;
          public static SERVER_INVALID_JSON_RESPONSE: com.microsoft.aad.adal.ADALError;
          public static AUTH_REFRESH_FAILED: com.microsoft.aad.adal.ADALError;
          public static ENCRYPTION_FAILED: com.microsoft.aad.adal.ADALError;
          public static DECRYPTION_FAILED: com.microsoft.aad.adal.ADALError;
          public static ANDROIDKEYSTORE_FAILED: com.microsoft.aad.adal.ADALError;
          public static ANDROIDKEYSTORE_KEYPAIR_GENERATOR_FAILED: com.microsoft.aad.adal.ADALError;
          public static DISCOVERY_NOT_SUPPORTED: com.microsoft.aad.adal.ADALError;
          public static BROKER_PACKAGE_NAME_NOT_FOUND: com.microsoft.aad.adal.ADALError;
          public static BROKER_AUTHENTICATOR_NOT_RESPONDING: com.microsoft.aad.adal.ADALError;
          public static BROKER_AUTHENTICATOR_ERROR_GETAUTHTOKEN: com.microsoft.aad.adal.ADALError;
          public static BROKER_AUTHENTICATOR_BAD_ARGUMENTS: com.microsoft.aad.adal.ADALError;
          public static BROKER_AUTHENTICATOR_BAD_AUTHENTICATION: com.microsoft.aad.adal.ADALError;
          public static BROKER_AUTHENTICATOR_UNSUPPORTED_OPERATION: com.microsoft.aad.adal.ADALError;
          public static BROKER_AUTHENTICATOR_IO_EXCEPTION: com.microsoft.aad.adal.ADALError;
          public static BROKER_AUTHENTICATOR_EXCEPTION: com.microsoft.aad.adal.ADALError;
          public static BROKER_VERIFICATION_FAILED: com.microsoft.aad.adal.ADALError;
          public static PACKAGE_NAME_NOT_FOUND: com.microsoft.aad.adal.ADALError;
          public static DIGEST_ERROR: com.microsoft.aad.adal.ADALError;
          public static BROKER_AUTHENTICATION_REQUEST_IS_NULL: com.microsoft.aad.adal.ADALError;
          public static BROKER_APP_VERIFICATION_FAILED: com.microsoft.aad.adal.ADALError;
          public static BROKER_ACTIVITY_INFO_NOT_FOUND: com.microsoft.aad.adal.ADALError;
          public static BROKER_SIGNATURE_NOT_SAVED: com.microsoft.aad.adal.ADALError;
          public static DEVICE_NO_SUCH_ALGORITHM: com.microsoft.aad.adal.ADALError;
          public static DEVICE_ALGORITHM_PADDING_EXCEPTION: com.microsoft.aad.adal.ADALError;
          public static APP_PACKAGE_NAME_NOT_FOUND: com.microsoft.aad.adal.ADALError;
          public static ENCRYPTION_ERROR: com.microsoft.aad.adal.ADALError;
          public static BROKER_ACTIVITY_IS_NOT_RESOLVED: com.microsoft.aad.adal.ADALError;
          public static BROKER_ACTIVITY_INVALID_REQUEST: com.microsoft.aad.adal.ADALError;
          public static BROKER_ACCOUNT_SAVE_FAILED: com.microsoft.aad.adal.ADALError;
          public static BROKER_ACCOUNT_DOES_NOT_EXIST: com.microsoft.aad.adal.ADALError;
          public static BROKER_SINGLE_USER_EXPECTED: com.microsoft.aad.adal.ADALError;
          public static KEY_CHAIN_PRIVATE_KEY_EXCEPTION: com.microsoft.aad.adal.ADALError;
          public static SIGNATURE_EXCEPTION: com.microsoft.aad.adal.ADALError;
          public static DEVICE_CERTIFICATE_RESPONSE_FAILED: com.microsoft.aad.adal.ADALError;
          public static WEBVIEW_RETURNED_AUTHENTICATION_EXCEPTION: com.microsoft.aad.adal.ADALError;
          public static WEBVIEW_RETURNED_INVALID_AUTHENTICATION_EXCEPTION: com.microsoft.aad.adal.ADALError;
          public static WEBVIEW_RETURNED_EMPTY_REDIRECT_URL: com.microsoft.aad.adal.ADALError;
          public static WEBVIEW_REDIRECTURL_NOT_SSL_PROTECTED: com.microsoft.aad.adal.ADALError;
          public static DEVICE_CERTIFICATE_API_EXCEPTION: com.microsoft.aad.adal.ADALError;
          public static DEVICE_CERTIFICATE_REQUEST_INVALID: com.microsoft.aad.adal.ADALError;
          public static RESOURCE_NOT_FOUND: com.microsoft.aad.adal.ADALError;
          public static CERTIFICATE_ENCODING_ERROR: com.microsoft.aad.adal.ADALError;
          public static ERROR_SILENT_REQUEST: com.microsoft.aad.adal.ADALError;
          public static DEVELOPER_REDIRECTURI_INVALID: com.microsoft.aad.adal.ADALError;
          public static DEVICE_CHALLENGE_FAILURE: com.microsoft.aad.adal.ADALError;
          public static RESOURCE_AUTHENTICATION_CHALLENGE_FAILURE: com.microsoft.aad.adal.ADALError;
          public static INVALID_TOKEN_CACHE_ITEM: com.microsoft.aad.adal.ADALError;
          public static FAIL_TO_EXPORT: com.microsoft.aad.adal.ADALError;
          public static FAIL_TO_IMPORT: com.microsoft.aad.adal.ADALError;
          public static INCOMPATIBLE_BLOB_VERSION: com.microsoft.aad.adal.ADALError;
          public static TOKEN_CACHE_ITEM_NOT_FOUND: com.microsoft.aad.adal.ADALError;
          public static JSON_PARSE_ERROR: com.microsoft.aad.adal.ADALError;
          public static DRS_METADATA_URL_INVALID: com.microsoft.aad.adal.ADALError;
          public static DRS_FAILED_SERVER_ERROR: com.microsoft.aad.adal.ADALError;
          public static DRS_DISCOVERY_FAILED_UNKNOWN_HOST: com.microsoft.aad.adal.ADALError;
          public static BROKER_APP_INSTALLATION_STARTED: com.microsoft.aad.adal.ADALError;
          public static valueOf(param0: string): com.microsoft.aad.adal.ADALError;
          public getLocalizedDescription(param0: androidcontentContext): string;
          public getDescription(): string;
          public static values(): native.Array<com.microsoft.aad.adal.ADALError>;
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class ADFSWebFingerValidator {
        }
      }
    }
  }
}

import javautilMap = java.util.Map;
import javautilList = java.util.List;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class APIEvent extends com.microsoft.aad.adal.DefaultEvent {
          public getDefaultEventCount(): number;
          public setProperty(param0: string, param1: string): void;
          public getEvents(): javautilList<android.util.Pair<String, String>>;
          public processEvent(param0: javautilMap<String, String>): void;
        }
      }
    }
  }
}

import javautilUUID = java.util.UUID;
/// <reference path="./java.util.UUID.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export abstract class AbstractMetadataRequestor {
          public getCorrelationId(): javautilUUID;
          public setCorrelationId(param0: javautilUUID): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class AcquireTokenInteractiveRequest {
        }
      }
    }
  }
}

import androidcontentIntent = android.content.Intent;
import androidosHandler = android.os.Handler;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./com.microsoft.aad.adal.AcquireTokenRequest.d.ts" />
/// <reference path="./com.microsoft.aad.adal.AuthenticationCallback.d.ts" />
/// <reference path="./com.microsoft.aad.adal.AuthenticationException.d.ts" />
/// <reference path="./com.microsoft.aad.adal.AuthenticationResult.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class AcquireTokenRequest {
        }
        export namespace AcquireTokenRequest {
          export class BrokerResumeResultReceiver {
            public onReceive(param0: androidcontentContext, param1: androidcontentIntent): void;
            public constructor(param0: com.microsoft.aad.adal.AcquireTokenRequest);
            public isResultReceivedFromBroker(): boolean;
          }
          export class CallbackHandler {
            public constructor(param0: androidosHandler, param1: com.microsoft.aad.adal.AuthenticationCallback);
            public onError(param0: com.microsoft.aad.adal.AuthenticationException): void;
            public onSuccess(param0: com.microsoft.aad.adal.AuthenticationResult): void;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class AcquireTokenSilentHandler {
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class AcquireTokenWithBrokerRequest {
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class AggregatedDispatcher extends com.microsoft.aad.adal.DefaultDispatcher {
        }
      }
    }
  }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.microsoft.aad.adal.AuthenticationRequest.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class ApplicationReceiver {
          public static INSTALL_REQUEST_TRACK_FILE: string;
          public static INSTALL_REQUEST_KEY: string;
          public static INSTALL_REQUEST_TIMESTAMP_KEY: string;
          public static INSTALL_URL_KEY: string;
          public onReceive(param0: androidcontentContext, param1: androidcontentIntent): void;
          public static saveRequest(param0: androidcontentContext, param1: com.microsoft.aad.adal.AuthenticationRequest, param2: string): void;
          public static getUserName(param0: androidcontentContext): string;
          public static clearUserName(param0: androidcontentContext): void;
          public constructor();
          public static getInstallRequestInthisApp(param0: androidcontentContext): string;
        }
      }
    }
  }
}

import androidosBundle = android.os.Bundle;
import androidwebkitWebView = android.webkit.WebView;
import javalangRunnable = java.lang.Runnable;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.webkit.ClientCertRequest.d.ts" />
/// <reference path="./android.webkit.WebView.d.ts" />
/// <reference path="./com.microsoft.aad.adal.AuthenticationActivity.d.ts" />
/// <reference path="./com.microsoft.aad.adal.AuthenticationRequest.d.ts" />
/// <reference path="./com.microsoft.aad.adal.IWebRequestHandler.d.ts" />
/// <reference path="./com.microsoft.aad.adal.UIEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class AuthenticationActivity {
          public onSaveInstanceState(param0: androidosBundle): void;
          public constructor();
          public onBackPressed(): void;
          public onPause(): void;
          public onRestart(): void;
          public onCreate(param0: androidosBundle): void;
          public finish(): void;
          public onDestroy(): void;
          public onRestoreInstanceState(param0: androidosBundle): void;
          public onResume(): void;
        }
        export namespace AuthenticationActivity {
          export class ActivityBroadcastReceiver {
            public onReceive(param0: androidcontentContext, param1: androidcontentIntent): void;
          }
          export class CustomWebViewClient extends com.microsoft.aad.adal.BasicWebViewClient {
            public constructor(param0: com.microsoft.aad.adal.AuthenticationActivity);
            public processInvalidUrl(param0: androidwebkitWebView, param1: string): boolean;
            public setPKeyAuthStatus(param0: boolean): void;
            public showSpinner(param0: boolean): void;
            public constructor(param0: androidcontentContext, param1: string, param2: com.microsoft.aad.adal.AuthenticationRequest, param3: com.microsoft.aad.adal.UIEvent);
            public cancelWebViewRequest(): void;
            public processRedirectUrl(param0: androidwebkitWebView, param1: string): void;
            public prepareForBrokerResumeRequest(): void;
            public sendResponse(param0: number, param1: androidcontentIntent): void;
            public postRunnable(param0: javalangRunnable): void;
            public onReceivedClientCertRequest(param0: androidwebkitWebView, param1: any): void;
          }
          export class TokenTask {
            public doInBackground(param0: native.Array<string>): com.microsoft.aad.adal.AuthenticationActivity.TokenTaskResult;
            public constructor(param0: com.microsoft.aad.adal.AuthenticationActivity);
            public constructor(param0: com.microsoft.aad.adal.AuthenticationActivity, param1: com.microsoft.aad.adal.IWebRequestHandler, param2: com.microsoft.aad.adal.AuthenticationRequest, param3: string, param4: number);
            public onPostExecute(param0: com.microsoft.aad.adal.AuthenticationActivity.TokenTaskResult): void;
          }
          export class TokenTaskResult {
          }
        }
      }
    }
  }
}

import javalangObject = java.lang.Object;
import javalangException = java.lang.Exception;
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class AuthenticationCallback {
          /**
					 * Constructs a new instance of the com.microsoft.aad.adal.AuthenticationCallback interface with the provided implementation.
					 */
          public constructor(implementation: {
            onSuccess(param0: com.microsoft.aad.adal.AuthenticationResult): void;
            onError(param0: javalangException): void;
          });
          public onError(param0: javalangException): void;
          public onSuccess(param0: javalangObject): void;
        }
      }
    }
  }
}

import javalangThrowable = java.lang.Throwable;
/// <reference path="./com.microsoft.aad.adal.ADALError.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class AuthenticationCancelError extends com.microsoft.aad.adal.AuthenticationException {
          public constructor(param0: com.microsoft.aad.adal.ADALError, param1: string, param2: javalangThrowable);
          public constructor(param0: string);
          public constructor(param0: com.microsoft.aad.adal.ADALError, param1: string);
          public constructor();
          public constructor(param0: com.microsoft.aad.adal.ADALError);
        }
      }
    }
  }
}

/// <reference path="./java.lang.Object.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class AuthenticationConstants {
          public static ADAL_PACKAGE_NAME: string;
          public static MS_FAMILY_ID: string;
          public static ENCODING_UTF8: string;
          public static BUNDLE_MESSAGE: string;
          public static DEFAULT_EXPIRATION_TIME_SEC: number;
        }
        export namespace AuthenticationConstants {
          export class AAD {
            public static RESOURCE: string;
            public static BEARER: string;
            public static AUTHORIZATION: string;
            public static AUTHORIZATION_URI: string;
            public static REALM: string;
            public static LOGIN_HINT: string;
            public static WEB_UI_CANCEL: string;
            public static CORRELATION_ID: string;
            public static CLIENT_REQUEST_ID: string;
            public static RETURN_CLIENT_REQUEST_ID: string;
            public static QUERY_PROMPT: string;
            public static QUERY_PROMPT_VALUE: string;
            public static QUERY_PROMPT_REFRESH_SESSION_VALUE: string;
            public static ADAL_ID_PLATFORM: string;
            public static ADAL_ID_VERSION: string;
            public static ADAL_ID_CPU: string;
            public static ADAL_ID_OS_VER: string;
            public static ADAL_ID_DM: string;
            public static ADAL_ID_PLATFORM_VALUE: string;
            public static REQUEST_ID_HEADER: string;
            public constructor();
          }
          export class Broker {
            public static BROKER_REQUEST_ID: number;
            public static BROKER_REQUEST: string;
            public static BROKER_REQUEST_RESUME: string;
            public static BROKER_ACCOUNT_TYPE: string;
            public static ACCOUNT_INITIAL_NAME: string;
            public static BACKGROUND_REQUEST_MESSAGE: string;
            public static ACCOUNT_DEFAULT_NAME: string;
            public static BROKER_VERSION: string;
            public static BROKER_PROTOCOL_VERSION: string;
            public static BROKER_RESULT_RETURNED: string;
            public static AUTHTOKEN_TYPE: string;
            public static BROKER_FINAL_URL: string;
            public static ACCOUNT_INITIAL_REQUEST: string;
            public static ACCOUNT_CLIENTID_KEY: string;
            public static ACCOUNT_CORRELATIONID: string;
            public static ACCOUNT_PROMPT: string;
            public static ACCOUNT_EXTRA_QUERY_PARAM: string;
            public static ACCOUNT_LOGIN_HINT: string;
            public static ACCOUNT_RESOURCE: string;
            public static ACCOUNT_REDIRECT: string;
            public static ACCOUNT_AUTHORITY: string;
            public static ACCOUNT_REFRESH_TOKEN: string;
            public static ACCOUNT_ACCESS_TOKEN: string;
            public static ACCOUNT_EXPIREDATE: string;
            public static ACCOUNT_RESULT: string;
            public static ACCOUNT_REMOVE_TOKENS: string;
            public static ACCOUNT_REMOVE_TOKENS_VALUE: string;
            public static MULTI_RESOURCE_TOKEN: string;
            public static ACCOUNT_NAME: string;
            public static ACCOUNT_IDTOKEN: string;
            public static ACCOUNT_USERINFO_USERID: string;
            public static ACCOUNT_USERINFO_GIVEN_NAME: string;
            public static ACCOUNT_USERINFO_FAMILY_NAME: string;
            public static ACCOUNT_USERINFO_IDENTITY_PROVIDER: string;
            public static ACCOUNT_USERINFO_USERID_DISPLAYABLE: string;
            public static ACCOUNT_USERINFO_TENANTID: string;
            public static ADAL_VERSION_KEY: string;
            public static ACCOUNT_UID_CACHES: string;
            public static USERDATA_PREFIX: string;
            public static USERDATA_UID_KEY: string;
            public static USERDATA_CALLER_CACHEKEYS: string;
            public static CALLER_CACHEKEY_PREFIX: string;
            public static CLIENT_TLS_NOT_SUPPORTED: string;
            public static CHALLENGE_REQUEST_HEADER: string;
            public static CHALLENGE_RESPONSE_HEADER: string;
            public static CHALLENGE_RESPONSE_TYPE: string;
            public static CHALLENGE_RESPONSE_TOKEN: string;
            public static CHALLENGE_RESPONSE_CONTEXT: string;
            public static CHALLENGE_REQUEST_CERT_AUTH_DELIMETER: string;
            public static COMPANY_PORTAL_APP_PACKAGE_NAME: string;
            public static COMPANY_PORTAL_APP_SIGNATURE: string;
            public static AZURE_AUTHENTICATOR_APP_SIGNATURE: string;
            public static AZURE_AUTHENTICATOR_APP_PACKAGE_NAME: string;
            public static PKEYAUTH_REDIRECT: string;
            public static CHALLENGE_TLS_INCAPABLE: string;
            public static CHALLENGE_TLS_INCAPABLE_VERSION: string;
            public static REDIRECT_PREFIX: string;
            public static REDIRECT_DELIMETER_ENCODED: javalangObject;
            public static BROWSER_EXT_PREFIX: string;
            public static BROWSER_EXT_INSTALL_PREFIX: string;
            public static CALLER_INFO_PACKAGE: string;
            public static REDIRECT_SSL_PREFIX: string;
            public constructor();
          }
          export class Browser {
            public static REQUEST_MESSAGE: string;
            public static RESPONSE_REQUEST_INFO: string;
            public static RESPONSE_ERROR_CODE: string;
            public static RESPONSE_ERROR_MESSAGE: string;
            public static RESPONSE_AUTHENTICATION_EXCEPTION: string;
            public static RESPONSE_FINAL_URL: string;
            public static RESPONSE: string;
            public static WEBVIEW_INVALID_REQUEST: string;
            public static ACTION_CANCEL: string;
            public static REQUEST_ID: string;
            public constructor();
          }
          export class HeaderField {
          }
          export class MediaType {
          }
          export class OAuth2 {
            public static ACCESS_TOKEN: string;
            public static AUTHORITY: string;
            public static AUTHORIZATION_CODE: string;
            public static CLIENT_ID: string;
            public static CODE: string;
            public static ERROR: string;
            public static ERROR_DESCRIPTION: string;
            public static ERROR_CODES: string;
            public static EXPIRES_IN: string;
            public static GRANT_TYPE: string;
            public static REDIRECT_URI: string;
            public static REFRESH_TOKEN: string;
            public static RESPONSE_TYPE: string;
            public static SCOPE: string;
            public static STATE: string;
            public static TOKEN_TYPE: string;
            public constructor();
          }
          export class OAuth2ErrorCode {
            public constructor();
          }
          export class UIRequest {
            public static BROWSER_FLOW: number;
            public constructor();
          }
          export class UIResponse {
            public static BROWSER_CODE_CANCEL: number;
            public static BROWSER_CODE_ERROR: number;
            public static BROWSER_CODE_COMPLETE: number;
            public static TOKEN_BROKER_RESPONSE: number;
            public static BROWSER_CODE_AUTHENTICATION_EXCEPTION: number;
            public static BROKER_REQUEST_RESUME: number;
            public constructor();
          }
        }
      }
    }
  }
}

import androidappActivity = android.app.Activity;
import javautilconcurrentFuture = java.util.concurrent.Future;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.microsoft.aad.adal.AuthenticationCallback.d.ts" />
/// <reference path="./com.microsoft.aad.adal.AuthenticationResult.d.ts" />
/// <reference path="./com.microsoft.aad.adal.ITokenCacheStore.d.ts" />
/// <reference path="./com.microsoft.aad.adal.IWindowComponent.d.ts" />
/// <reference path="./com.microsoft.aad.adal.PromptBehavior.d.ts" />
/// <reference path="./com.microsoft.aad.adal.UserInfo.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />
/// <reference path="./java.util.concurrent.Future.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class AuthenticationContext {
          public cancelAuthenticationActivity(param0: number): boolean;
          public acquireTokenSilentSync(param0: string, param1: string, param2: string): com.microsoft.aad.adal.AuthenticationResult;
          public acquireToken(param0: androidappActivity, param1: string, param2: string, param3: string, param4: string, param5: string, param6: com.microsoft.aad.adal.AuthenticationCallback): void;
          public getBrokerUser(): string;
          public acquireToken(param0: androidappActivity, param1: string, param2: string, param3: string, param4: com.microsoft.aad.adal.PromptBehavior, param5: com.microsoft.aad.adal.AuthenticationCallback): void;
          public constructor(param0: androidcontentContext, param1: string, param2: com.microsoft.aad.adal.ITokenCacheStore);
          public acquireToken(param0: com.microsoft.aad.adal.IWindowComponent, param1: string, param2: string, param3: string, param4: string, param5: com.microsoft.aad.adal.PromptBehavior, param6: string, param7: com.microsoft.aad.adal.AuthenticationCallback): void;
          public acquireTokenByRefreshToken(param0: string, param1: string, param2: com.microsoft.aad.adal.AuthenticationCallback): void;
          public getCache(): com.microsoft.aad.adal.ITokenCacheStore;
          public acquireTokenSilent(param0: string, param1: string, param2: string, param3: com.microsoft.aad.adal.AuthenticationCallback): javautilconcurrentFuture<AuthenticationResult>;
          public setRequestCorrelationId(param0: javautilUUID): void;
          public setExtendedLifetimeEnabled(param0: boolean): void;
          public constructor(param0: androidcontentContext, param1: string, param2: boolean);
          public getValidateAuthority(): boolean;
          public static getVersionName(): string;
          public onActivityResult(param0: number, param1: number, param2: androidcontentIntent): void;
          public acquireToken(param0: androidappActivity, param1: string, param2: string, param3: string, param4: com.microsoft.aad.adal.PromptBehavior, param5: string, param6: com.microsoft.aad.adal.AuthenticationCallback): void;
          public acquireTokenSilentAsync(param0: string, param1: string, param2: string, param3: com.microsoft.aad.adal.AuthenticationCallback): void;
          public getExtendedLifetimeEnabled(): boolean;
          public acquireToken(param0: androidappActivity, param1: string, param2: string, param3: string, param4: string, param5: com.microsoft.aad.adal.PromptBehavior, param6: string, param7: com.microsoft.aad.adal.AuthenticationCallback): void;
          public acquireTokenByRefreshToken(param0: string, param1: string, param2: string, param3: com.microsoft.aad.adal.AuthenticationCallback): void;
          public getBrokerUsers(): native.Array<com.microsoft.aad.adal.UserInfo>;
          public acquireToken(param0: androidappActivity, param1: string, param2: string, param3: string, param4: string, param5: com.microsoft.aad.adal.AuthenticationCallback): void;
          public getRequestCorrelationId(): javautilUUID;
          public constructor(param0: androidcontentContext, param1: string, param2: boolean, param3: com.microsoft.aad.adal.ITokenCacheStore);
          public acquireToken(param0: string, param1: string, param2: string, param3: string, param4: com.microsoft.aad.adal.PromptBehavior, param5: string, param6: com.microsoft.aad.adal.AuthenticationCallback): void;
          public getAuthority(): string;
          public getRedirectUriForBroker(): string;
        }
        export namespace AuthenticationContext {
          export class SettableFuture {
            public set(param0: javalangObject): void;
            public setException(param0: javalangThrowable): void;
          }
        }
      }
    }
  }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.webkit.WebView.d.ts" />
/// <reference path="./com.microsoft.aad.adal.AcquireTokenRequest.d.ts" />
/// <reference path="./com.microsoft.aad.adal.AuthenticationDialog.d.ts" />
/// <reference path="./com.microsoft.aad.adal.AuthenticationRequest.d.ts" />
/// <reference path="./com.microsoft.aad.adal.UIEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class AuthenticationDialog {
          public static TAG: string;
          public show(): void;
          public constructor(param0: androidosHandler, param1: androidcontentContext, param2: com.microsoft.aad.adal.AcquireTokenRequest, param3: com.microsoft.aad.adal.AuthenticationRequest);
        }
        export namespace AuthenticationDialog {
          export class DialogWebViewClient extends com.microsoft.aad.adal.BasicWebViewClient {
            public processInvalidUrl(param0: androidwebkitWebView, param1: string): boolean;
            public constructor(param0: com.microsoft.aad.adal.AuthenticationDialog, param1: androidcontentContext, param2: string, param3: com.microsoft.aad.adal.AuthenticationRequest);
            public setPKeyAuthStatus(param0: boolean): void;
            public showSpinner(param0: boolean): void;
            public constructor(param0: androidcontentContext, param1: string, param2: com.microsoft.aad.adal.AuthenticationRequest, param3: com.microsoft.aad.adal.UIEvent);
            public cancelWebViewRequest(): void;
            public processRedirectUrl(param0: androidwebkitWebView, param1: string): void;
            public prepareForBrokerResumeRequest(): void;
            public sendResponse(param0: number, param1: androidcontentIntent): void;
            public postRunnable(param0: javalangRunnable): void;
          }
        }
      }
    }
  }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.microsoft.aad.adal.ADALError.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class AuthenticationException {
          public constructor(param0: com.microsoft.aad.adal.ADALError, param1: string, param2: javalangThrowable);
          public getLocalizedMessage(param0: androidcontentContext): string;
          public constructor();
          public constructor(param0: com.microsoft.aad.adal.ADALError, param1: string);
          public getCode(): com.microsoft.aad.adal.ADALError;
          public getMessage(): string;
          public constructor(param0: com.microsoft.aad.adal.ADALError);
        }
      }
    }
  }
}

import javanetURL = java.net.URL;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.microsoft.aad.adal.AuthenticationParameters.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class AuthenticationParameters {
          public static AUTH_HEADER_MISSING_AUTHORITY: string;
          public static AUTH_HEADER_INVALID_FORMAT: string;
          public static AUTH_HEADER_MISSING: string;
          public static AUTH_HEADER_WRONG_STATUS: string;
          public static AUTHENTICATE_HEADER: string;
          public static BEARER: string;
          public static AUTHORITY_KEY: string;
          public static RESOURCE_KEY: string;
          public getResource(): string;
          public constructor();
          public static createFromResponseAuthenticateHeader(param0: string): com.microsoft.aad.adal.AuthenticationParameters;
          public getAuthority(): string;
          public static createFromResourceUrl(param0: androidcontentContext, param1: javanetURL, param2: com.microsoft.aad.adal.AuthenticationParameters.AuthenticationParamCallback): void;
        }
        export namespace AuthenticationParameters {
          export class AuthenticationParamCallback {
            /**
						 * Constructs a new instance of the com.microsoft.aad.adal.AuthenticationParameters$AuthenticationParamCallback interface with the provided implementation.
						 */
            public constructor(implementation: {
              onCompleted(param0: javalangException, param1: com.microsoft.aad.adal.AuthenticationParameters): void;
            });
            public onCompleted(param0: javalangException, param1: com.microsoft.aad.adal.AuthenticationParameters): void;
          }
        }
      }
    }
  }
}

/// <reference path="./com.microsoft.aad.adal.PromptBehavior.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class AuthenticationRequest {
          public getResource(): string;
          public getVersion(): string;
          public setRequestId(param0: number): void;
          public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: javautilUUID, param6: boolean);
          public setBrokerAccountName(param0: string): void;
          public getPrompt(): com.microsoft.aad.adal.PromptBehavior;
          public constructor(param0: string, param1: string, param2: string, param3: string, param4: javautilUUID, param5: boolean);
          public getLoginHint(): string;
          public setSilent(param0: boolean): void;
          public isSilent(): boolean;
          public setPrompt(param0: com.microsoft.aad.adal.PromptBehavior): void;
          public setAuthority(param0: string): void;
          public getCorrelationId(): javautilUUID;
          public constructor();
          public getBrokerAccountName(): string;
          public constructor(param0: string, param1: string, param2: string, param3: boolean);
          public getUserId(): string;
          public getUserIdentifierType(): com.microsoft.aad.adal.AuthenticationRequest.UserIdentifierType;
          public getIsExtendedLifetimeEnabled(): boolean;
          public getClientId(): string;
          public setUserIdentifierType(param0: com.microsoft.aad.adal.AuthenticationRequest.UserIdentifierType): void;
          public getRedirectUri(): string;
          public getRequestId(): number;
          public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: boolean);
          public constructor(param0: string, param1: string, param2: string, param3: javautilUUID, param4: boolean);
          public getLogInfo(): string;
          public setVersion(param0: string): void;
          public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: com.microsoft.aad.adal.PromptBehavior, param6: string, param7: javautilUUID, param8: boolean);
          public getExtraQueryParamsAuthentication(): string;
          public getAuthority(): string;
          public setUserId(param0: string): void;
        }
        export namespace AuthenticationRequest {
          export class UserIdentifierType {
            public static UniqueId: com.microsoft.aad.adal.AuthenticationRequest.UserIdentifierType;
            public static LoginHint: com.microsoft.aad.adal.AuthenticationRequest.UserIdentifierType;
            public static NoUser: com.microsoft.aad.adal.AuthenticationRequest.UserIdentifierType;
            public static values(): native.Array<com.microsoft.aad.adal.AuthenticationRequest.UserIdentifierType>;
            public static valueOf(param0: string): com.microsoft.aad.adal.AuthenticationRequest.UserIdentifierType;
          }
        }
      }
    }
  }
}

/// <reference path="./com.microsoft.aad.adal.APIEvent.d.ts" />
/// <reference path="./com.microsoft.aad.adal.AuthenticationCallback.d.ts" />
/// <reference path="./com.microsoft.aad.adal.AuthenticationRequest.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class AuthenticationRequestState {
          public setRequestId(param0: number): void;
          public isCancelled(): boolean;
          public setRequest(param0: com.microsoft.aad.adal.AuthenticationRequest): void;
          public setCancelled(param0: boolean): void;
          public getRequestId(): number;
          public getRequest(): com.microsoft.aad.adal.AuthenticationRequest;
          public constructor(param0: number, param1: com.microsoft.aad.adal.AuthenticationRequest, param2: com.microsoft.aad.adal.AuthenticationCallback, param3: com.microsoft.aad.adal.APIEvent);
          public getDelegate(): com.microsoft.aad.adal.AuthenticationCallback;
          public setDelegate(param0: com.microsoft.aad.adal.AuthenticationCallback): void;
        }
      }
    }
  }
}

import javautilDate = java.util.Date;
/// <reference path="./com.microsoft.aad.adal.UserInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class AuthenticationResult {
          public getErrorDescription(): string;
          public createAuthorizationHeader(): string;
          public getUserInfo(): com.microsoft.aad.adal.UserInfo;
          public isExpired(): boolean;
          public getRefreshToken(): string;
          public getTenantId(): string;
          public getAccessToken(): string;
          public getAccessTokenType(): string;
          public getExpiresOn(): javautilDate;
          public getIsMultiResourceRefreshToken(): boolean;
          public getStatus(): com.microsoft.aad.adal.AuthenticationResult.AuthenticationStatus;
          public isExtendedLifeTimeToken(): boolean;
          public getErrorLogInfo(): string;
          public getErrorCode(): string;
          public getIdToken(): string;
        }
        export namespace AuthenticationResult {
          export class AuthenticationStatus {
            public static Cancelled: com.microsoft.aad.adal.AuthenticationResult.AuthenticationStatus;
            public static Failed: com.microsoft.aad.adal.AuthenticationResult.AuthenticationStatus;
            public static Succeeded: com.microsoft.aad.adal.AuthenticationResult.AuthenticationStatus;
            public static values(): native.Array<com.microsoft.aad.adal.AuthenticationResult.AuthenticationStatus>;
            public static valueOf(param0: string): com.microsoft.aad.adal.AuthenticationResult.AuthenticationStatus;
          }
        }
      }
    }
  }
}

/// <reference path="./com.microsoft.aad.adal.ADALError.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class AuthenticationServerProtocolException extends com.microsoft.aad.adal.AuthenticationException {
          public constructor(param0: com.microsoft.aad.adal.ADALError, param1: string, param2: javalangThrowable);
          public constructor(param0: string);
          public constructor();
          public constructor(param0: com.microsoft.aad.adal.ADALError, param1: string);
          public constructor(param0: com.microsoft.aad.adal.ADALError);
        }
      }
    }
  }
}

import javalangClass = java.lang.Class;
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class AuthenticationSettings {
          public static INSTANCE: com.microsoft.aad.adal.AuthenticationSettings;
          public setUseBroker(param0: boolean): void;
          public getDisableWebViewHardwareAcceleration(): boolean;
          public setSharedPrefPackageName(param0: string): void;
          public getSkipBroker(): boolean;
          public getSecretKeyData(): native.Array<number>;
          public setReadTimeOut(param0: number): void;
          public getExpirationBuffer(): number;
          public setSecretKey(param0: native.Array<number>): void;
          public setActivityPackageName(param0: string): void;
          public setSkipBroker(param0: boolean): void;
          public getSharedPrefPackageName(): string;
          public setConnectTimeOut(param0: number): void;
          public getActivityPackageName(): string;
          public static valueOf(param0: string): com.microsoft.aad.adal.AuthenticationSettings;
          public getReadTimeOut(): number;
          public getBrokerPackageName(): string;
          public getDeviceCertificateProxy(): any;
          public getBrokerSignature(): string;
          public getConnectTimeOut(): number;
          public setBrokerPackageName(param0: string): void;
          public setExpirationBuffer(param0: number): void;
          public setDeviceCertificateProxyClass(param0: any): void;
          public setDisableWebViewHardwareAcceleration(param0: boolean): void;
          public static values(): native.Array<com.microsoft.aad.adal.AuthenticationSettings>;
          public setBrokerSignature(param0: string): void;
          public getUseBroker(): boolean;
        }
      }
    }
  }
}

import androidwebkitHttpAuthHandler = android.webkit.HttpAuthHandler;
import androidwebkitSslErrorHandler = android.webkit.SslErrorHandler;
import androidnethttpSslError = android.net.http.SslError;
import androidgraphicsBitmap = android.graphics.Bitmap;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.net.http.SslError.d.ts" />
/// <reference path="./android.webkit.HttpAuthHandler.d.ts" />
/// <reference path="./android.webkit.SslErrorHandler.d.ts" />
/// <reference path="./android.webkit.WebView.d.ts" />
/// <reference path="./com.microsoft.aad.adal.AuthenticationRequest.d.ts" />
/// <reference path="./com.microsoft.aad.adal.UIEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export abstract class BasicWebViewClient {
          public static BLANK_PAGE: string;
          public shouldOverrideUrlLoading(param0: androidwebkitWebView, param1: string): boolean;
          public onReceivedSslError(param0: androidwebkitWebView, param1: androidwebkitSslErrorHandler, param2: androidnethttpSslError): void;
          public onPageFinished(param0: androidwebkitWebView, param1: string): void;
          public postRunnable(param0: javalangRunnable): void;
          public onReceivedHttpAuthRequest(param0: androidwebkitWebView, param1: androidwebkitHttpAuthHandler, param2: string, param3: string): void;
          public processRedirectUrl(param0: androidwebkitWebView, param1: string): void;
          public openLinkInBrowser(param0: string): void;
          public prepareForBrokerResumeRequest(): void;
          public onReceivedError(param0: androidwebkitWebView, param1: number, param2: string, param3: string): void;
          public showSpinner(param0: boolean): void;
          public setPKeyAuthStatus(param0: boolean): void;
          public sendResponse(param0: number, param1: androidcontentIntent): void;
          public cancelWebViewRequest(): void;
          public onPageStarted(param0: androidwebkitWebView, param1: string, param2: androidgraphicsBitmap): void;
          public constructor(param0: androidcontentContext, param1: string, param2: com.microsoft.aad.adal.AuthenticationRequest, param3: com.microsoft.aad.adal.UIEvent);
          public processInvalidUrl(param0: androidwebkitWebView, param1: string): boolean;
        }
      }
    }
  }
}

import androidcontentComponentName = android.content.ComponentName;
import androidosIBinder = android.os.IBinder;
/// <reference path="./android.content.ComponentName.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./com.microsoft.aad.adal.IBrokerAccountService.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class BrokerAccountServiceHandler {
          public removeAccounts(param0: androidcontentContext): void;
          public static getInstance(): com.microsoft.aad.adal.BrokerAccountServiceHandler;
          public getAuthToken(param0: androidcontentContext, param1: androidosBundle): androidosBundle;
          public static getIntentForBrokerAccountService(param0: androidcontentContext): androidcontentIntent;
          public getIntentForInteractiveRequest(param0: androidcontentContext): androidcontentIntent;
        }
        export namespace BrokerAccountServiceHandler {
          export class BrokerAccountServiceConnection {
            public onServiceConnected(param0: androidcontentComponentName, param1: androidosIBinder): void;
            public unBindService(param0: androidcontentContext): void;
            public onServiceDisconnected(param0: androidcontentComponentName): void;
            public getBrokerAccountServiceProvider(): com.microsoft.aad.adal.IBrokerAccountService;
          }
          export class InstanceHolder {
          }
        }
      }
    }
  }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class BrokerEvent extends com.microsoft.aad.adal.DefaultEvent {
          public getDefaultEventCount(): number;
          public setProperty(param0: string, param1: string): void;
          public getEvents(): javautilList<android.util.Pair<String, String>>;
          public processEvent(param0: javautilMap<String, String>): void;
        }
      }
    }
  }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.microsoft.aad.adal.AuthenticationRequest.d.ts" />
/// <reference path="./com.microsoft.aad.adal.AuthenticationResult.d.ts" />
/// <reference path="./com.microsoft.aad.adal.UserInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class BrokerProxy {
          public static DATA_USER_INFO: string;
          public getCurrentUser(): string;
          public verifyBrokerPermissionsAPI23AndHigher(): boolean;
          public getIntentForBrokerActivity(param0: com.microsoft.aad.adal.AuthenticationRequest): androidcontentIntent;
          public getBrokerAppVersion(param0: string): string;
          public verifyUser(param0: string, param1: string): boolean;
          public verifyBrokerPermissionsAPI22AndLess(): boolean;
          public getBrokerUsers(): native.Array<com.microsoft.aad.adal.UserInfo>;
          public canSwitchToBroker(param0: string): com.microsoft.aad.adal.BrokerProxy.SwitchToBroker;
          public saveAccount(param0: string): void;
          public getAuthTokenInBackground(param0: com.microsoft.aad.adal.AuthenticationRequest): com.microsoft.aad.adal.AuthenticationResult;
          public constructor();
          public constructor(param0: androidcontentContext);
          public canUseLocalCache(param0: string): boolean;
          public removeAccounts(): void;
          public getCurrentActiveBrokerPackageName(): string;
        }
        export namespace BrokerProxy {
          export class SwitchToBroker {
            public static CAN_SWITCH_TO_BROKER: com.microsoft.aad.adal.BrokerProxy.SwitchToBroker;
            public static CANNOT_SWITCH_TO_BROKER: com.microsoft.aad.adal.BrokerProxy.SwitchToBroker;
            public static NEED_PERMISSIONS_TO_SWITCH_TO_BROKER: com.microsoft.aad.adal.BrokerProxy.SwitchToBroker;
            public static valueOf(param0: string): com.microsoft.aad.adal.BrokerProxy.SwitchToBroker;
            public static values(): native.Array<com.microsoft.aad.adal.BrokerProxy.SwitchToBroker>;
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class BuildConfig {
          public static DEBUG: boolean;
          public static APPLICATION_ID: string;
          public static BUILD_TYPE: string;
          public static FLAVOR: string;
          public static VERSION_CODE: number;
          public static VERSION_NAME: string;
          public constructor();
        }
      }
    }
  }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class CacheEvent extends com.microsoft.aad.adal.DefaultEvent {
          public getDefaultEventCount(): number;
          public setProperty(param0: string, param1: string): void;
          public getEvents(): javautilList<android.util.Pair<String, String>>;
          public processEvent(param0: javautilMap<String, String>): void;
        }
      }
    }
  }
}

/// <reference path="./com.microsoft.aad.adal.TokenCacheItem.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class CacheKey {
          public getResource(): string;
          public getClientId(): string;
          public toString(): string;
          public static createCacheKey(param0: com.microsoft.aad.adal.TokenCacheItem): string;
          public static createCacheKey(param0: string, param1: string, param2: string, param3: boolean, param4: string, param5: string): string;
          public static createCacheKeyForFRT(param0: string, param1: string, param2: string): string;
          public static createCacheKeyForMRRT(param0: string, param1: string, param2: string): string;
          public getAuthority(): string;
          public getUserId(): string;
          public getIsMultipleResourceRefreshToken(): boolean;
          public static createCacheKeyForRTEntry(param0: string, param1: string, param2: string, param3: string): string;
        }
      }
    }
  }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class Callback {
          /**
					 * Constructs a new instance of the com.microsoft.aad.adal.Callback interface with the provided implementation.
					 */
          public constructor(implementation: {
            onSuccess(param0: javalangObject): void;
            onError(param0: javalangThrowable): void;
          });
          public onError(param0: javalangThrowable): void;
          public onSuccess(param0: javalangObject): void;
        }
      }
    }
  }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class CallbackExecutor {
          public onError(param0: javalangThrowable): void;
          public onSuccess(param0: javalangObject): void;
        }
      }
    }
  }
}

/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class ChallengeResponseBuilder {
          public getChallengeResponseFromUri(param0: string): com.microsoft.aad.adal.ChallengeResponseBuilder.ChallengeResponse;
          public getChallengeResponseFromHeader(param0: string, param1: string): com.microsoft.aad.adal.ChallengeResponseBuilder.ChallengeResponse;
        }
        export namespace ChallengeResponseBuilder {
          export class ChallengeRequest {
          }
          export class ChallengeResponse {
          }
          export class RequestField {
            public static Nonce: com.microsoft.aad.adal.ChallengeResponseBuilder.RequestField;
            public static CertAuthorities: com.microsoft.aad.adal.ChallengeResponseBuilder.RequestField;
            public static Version: com.microsoft.aad.adal.ChallengeResponseBuilder.RequestField;
            public static SubmitUrl: com.microsoft.aad.adal.ChallengeResponseBuilder.RequestField;
            public static Context: com.microsoft.aad.adal.ChallengeResponseBuilder.RequestField;
            public static CertThumbprint: com.microsoft.aad.adal.ChallengeResponseBuilder.RequestField;
            public static values(): native.Array<com.microsoft.aad.adal.ChallengeResponseBuilder.RequestField>;
            public static valueOf(param0: string): com.microsoft.aad.adal.ChallengeResponseBuilder.RequestField;
          }
        }
      }
    }
  }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class ClientMetrics {
          public static INSTANCE: com.microsoft.aad.adal.ClientMetrics;
          public beginClientMetricsRecord(param0: javanetURL, param1: javautilUUID, param2: javautilMap<String, String>): void;
          public endClientMetricsRecord(param0: string, param1: javautilUUID): void;
          public setLastError(param0: string): void;
          public static values(): native.Array<com.microsoft.aad.adal.ClientMetrics>;
          public setLastErrorCodes(param0: native.Array<string>): void;
          public static valueOf(param0: string): com.microsoft.aad.adal.ClientMetrics;
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class ClientMetricsEndpointType {
          public static TOKEN: string;
          public static INSTANCE_DISCOVERY: string;
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class DRSMetadata {
        }
      }
    }
  }
}

/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class DRSMetadataRequestor extends com.microsoft.aad.adal.AbstractMetadataRequestor {
        }
        export namespace DRSMetadataRequestor {
          export class Type {
            public static ON_PREM: com.microsoft.aad.adal.DRSMetadataRequestor.Type;
            public static CLOUD: com.microsoft.aad.adal.DRSMetadataRequestor.Type;
            public static valueOf(param0: string): com.microsoft.aad.adal.DRSMetadataRequestor.Type;
            public static values(): native.Array<com.microsoft.aad.adal.DRSMetadataRequestor.Type>;
          }
        }
      }
    }
  }
}

import javalangreflectType = java.lang.reflect.Type;
/// <reference path="./com.google.gson.JsonDeserializationContext.d.ts" />
/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./com.google.gson.JsonSerializationContext.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class DateTimeAdapter {
          public deserialize(param0: any, param1: javalangreflectType, param2: any): javautilDate;
          public constructor();
          public serialize(param0: javautilDate, param1: javalangreflectType, param2: any): any;
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class DefaultConnectionService {
          public isConnectionAvailable(): boolean;
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class DefaultDispatcher {
        }
      }
    }
  }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class DefaultEvent {
          public getDefaultEventCount(): number;
          public setProperty(param0: string, param1: string): void;
          public getEvents(): javautilList<android.util.Pair<String, String>>;
          public processEvent(param0: javautilMap<String, String>): void;
        }
      }
    }
  }
}

import javautilIterator = java.util.Iterator;
import javautilSet = java.util.Set;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.microsoft.aad.adal.StorageHelper.d.ts" />
/// <reference path="./com.microsoft.aad.adal.TokenCacheItem.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class DefaultTokenCacheStore {
          public getUniqueUsersWithTokenCache(): javautilSet<String>;
          public getTokensForResource(param0: string): javautilList<TokenCacheItem>;
          public removeItem(param0: string): void;
          public clearTokensForUser(param0: string): void;
          public getStorageHelper(): com.microsoft.aad.adal.StorageHelper;
          public removeAll(): void;
          public getAll(): javautilIterator<TokenCacheItem>;
          public getItem(param0: string): com.microsoft.aad.adal.TokenCacheItem;
          public getTokensForUser(param0: string): javautilList<TokenCacheItem>;
          public getTokensAboutToExpire(): javautilList<TokenCacheItem>;
          public constructor(param0: androidcontentContext);
          public contains(param0: string): boolean;
          public setItem(param0: string, param1: com.microsoft.aad.adal.TokenCacheItem): void;
        }
      }
    }
  }
}

/// <reference path="./com.microsoft.aad.adal.ADALError.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class DeserializationAuthenticationException extends com.microsoft.aad.adal.AuthenticationException {
          public constructor(param0: com.microsoft.aad.adal.ADALError, param1: string, param2: javalangThrowable);
          public constructor(param0: string);
          public constructor();
          public constructor(param0: com.microsoft.aad.adal.ADALError, param1: string);
          public constructor(param0: com.microsoft.aad.adal.ADALError);
        }
      }
    }
  }
}

/// <reference path="./java.util.UUID.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class Discovery {
          public constructor();
          public setCorrelationId(param0: javautilUUID): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class EventStrings {
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class ExceptionExtensions {
        }
      }
    }
  }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.microsoft.aad.adal.TokenCacheItem.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class FileTokenCacheStore {
          public removeItem(param0: string): void;
          public constructor(param0: androidcontentContext, param1: string);
          public removeAll(): void;
          public getAll(): javautilIterator<TokenCacheItem>;
          public getItem(param0: string): com.microsoft.aad.adal.TokenCacheItem;
          public contains(param0: string): boolean;
          public setItem(param0: string, param1: com.microsoft.aad.adal.TokenCacheItem): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class HashMapExtensions {
        }
      }
    }
  }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class HttpAuthDialog {
          public show(): void;
          public setOkListener(param0: com.microsoft.aad.adal.HttpAuthDialog.OkListener): void;
          public constructor(param0: androidcontentContext, param1: string, param2: string);
          public setCancelListener(param0: com.microsoft.aad.adal.HttpAuthDialog.CancelListener): void;
        }
        export namespace HttpAuthDialog {
          export class CancelListener {
            /**
						 * Constructs a new instance of the com.microsoft.aad.adal.HttpAuthDialog$CancelListener interface with the provided implementation.
						 */
            public constructor(implementation: {
              onCancel(): void;
            });
            public onCancel(): void;
          }
          export class OkListener {
            /**
						 * Constructs a new instance of the com.microsoft.aad.adal.HttpAuthDialog$OkListener interface with the provided implementation.
						 */
            public constructor(implementation: {
              onOk(param0: string, param1: string, param2: string, param3: string): void;
            });
            public onOk(param0: string, param1: string, param2: string, param3: string): void;
          }
        }
      }
    }
  }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class HttpEvent extends com.microsoft.aad.adal.DefaultEvent {
          public getDefaultEventCount(): number;
          public setProperty(param0: string, param1: string): void;
          public getEvents(): javautilList<android.util.Pair<String, String>>;
          public processEvent(param0: javautilMap<String, String>): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class HttpUrlConnectionFactory {
        }
      }
    }
  }
}

/// <reference path="./com.microsoft.aad.adal.HttpWebResponse.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class HttpWebRequest {
          public constructor(param0: javanetURL, param1: string, param2: javautilMap<String, String>, param3: native.Array<number>, param4: string);
          public constructor(param0: javanetURL, param1: string, param2: javautilMap<String, String>);
          public send(): com.microsoft.aad.adal.HttpWebResponse;
        }
      }
    }
  }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class HttpWebResponse {
          public getStatusCode(): number;
          public getResponseHeaders(): javautilMap<String, javautilList<String>>;
          public getBody(): string;
          public constructor(param0: number, param1: string, param2: javautilMap<String, javautilList<String>>);
        }
      }
    }
  }
}

import androidosParcel = android.os.Parcel;
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./com.microsoft.aad.adal.IBrokerAccountService.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class IBrokerAccountService {
          /**
					 * Constructs a new instance of the com.microsoft.aad.adal.IBrokerAccountService interface with the provided implementation.
					 */
          public constructor(implementation: {
            getBrokerUsers(): androidosBundle;
            acquireTokenSilently(param0: javautilMap<String, String>): androidosBundle;
            getIntentForInteractiveRequest(): androidcontentIntent;
            removeAccounts(): void;
          });
          public acquireTokenSilently(param0: javautilMap<String, String>): androidosBundle;
          public getIntentForInteractiveRequest(): androidcontentIntent;
          public getBrokerUsers(): androidosBundle;
          public removeAccounts(): void;
        }
        export namespace IBrokerAccountService {
          export abstract class Stub {
            public removeAccounts(): void;
            public constructor();
            public getBrokerUsers(): androidosBundle;
            public getIntentForInteractiveRequest(): androidcontentIntent;
            public acquireTokenSilently(param0: any): androidosBundle;
            public onTransact(param0: number, param1: androidosParcel, param2: androidosParcel, param3: number): boolean;
            public static asInterface(param0: androidosIBinder): com.microsoft.aad.adal.IBrokerAccountService;
            public asBinder(): androidosIBinder;
          }
          export namespace Stub {
            export class Proxy {
              public getInterfaceDescriptor(): string;
              public asBinder(): androidosIBinder;
              public getIntentForInteractiveRequest(): androidcontentIntent;
              public getBrokerUsers(): androidosBundle;
              public acquireTokenSilently(param0: any): androidosBundle;
              public removeAccounts(): void;
            }
          }
        }
      }
    }
  }
}

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.microsoft.aad.adal.AuthenticationRequest.d.ts" />
/// <reference path="./com.microsoft.aad.adal.AuthenticationResult.d.ts" />
/// <reference path="./com.microsoft.aad.adal.UserInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class IBrokerProxy {
          /**
					 * Constructs a new instance of the com.microsoft.aad.adal.IBrokerProxy interface with the provided implementation.
					 */
          public constructor(implementation: {
            canSwitchToBroker(param0: string): com.microsoft.aad.adal.BrokerProxy.SwitchToBroker;
            verifyUser(param0: string, param1: string): boolean;
            canUseLocalCache(param0: string): boolean;
            removeAccounts(): void;
            saveAccount(param0: string): void;
            getCurrentUser(): string;
            getAuthTokenInBackground(param0: com.microsoft.aad.adal.AuthenticationRequest): com.microsoft.aad.adal.AuthenticationResult;
            getIntentForBrokerActivity(param0: com.microsoft.aad.adal.AuthenticationRequest): androidcontentIntent;
            getBrokerUsers(): native.Array<com.microsoft.aad.adal.UserInfo>;
            getCurrentActiveBrokerPackageName(): string;
            getBrokerAppVersion(param0: string): string;
          });
          public getCurrentUser(): string;
          public getBrokerUsers(): native.Array<com.microsoft.aad.adal.UserInfo>;
          public canSwitchToBroker(param0: string): com.microsoft.aad.adal.BrokerProxy.SwitchToBroker;
          public saveAccount(param0: string): void;
          public getIntentForBrokerActivity(param0: com.microsoft.aad.adal.AuthenticationRequest): androidcontentIntent;
          public getAuthTokenInBackground(param0: com.microsoft.aad.adal.AuthenticationRequest): com.microsoft.aad.adal.AuthenticationResult;
          public getBrokerAppVersion(param0: string): string;
          public verifyUser(param0: string, param1: string): boolean;
          public canUseLocalCache(param0: string): boolean;
          public removeAccounts(): void;
          public getCurrentActiveBrokerPackageName(): string;
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class IConnectionService {
          /**
					 * Constructs a new instance of the com.microsoft.aad.adal.IConnectionService interface with the provided implementation.
					 */
          public constructor(implementation: {
            isConnectionAvailable(): boolean;
          });
          public isConnectionAvailable(): boolean;
        }
      }
    }
  }
}

import javasecuritycertX509Certificate = java.security.cert.X509Certificate;
import javasecurityinterfacesRSAPrivateKey = java.security.interfaces.RSAPrivateKey;
import javasecurityinterfacesRSAPublicKey = java.security.interfaces.RSAPublicKey;
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
/// <reference path="./java.security.interfaces.RSAPrivateKey.d.ts" />
/// <reference path="./java.security.interfaces.RSAPublicKey.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class IDeviceCertificate {
          /**
					 * Constructs a new instance of the com.microsoft.aad.adal.IDeviceCertificate interface with the provided implementation.
					 */
          public constructor(implementation: {
            isValidIssuer(param0: javautilList<String>): boolean;
            getCertificate(): javasecuritycertX509Certificate;
            getRSAPrivateKey(): javasecurityinterfacesRSAPrivateKey;
            getThumbPrint(): string;
            getRSAPublicKey(): javasecurityinterfacesRSAPublicKey;
          });
          public getThumbPrint(): string;
          public getRSAPrivateKey(): javasecurityinterfacesRSAPrivateKey;
          public getCertificate(): javasecuritycertX509Certificate;
          public getRSAPublicKey(): javasecurityinterfacesRSAPublicKey;
          public isValidIssuer(param0: javautilList<String>): boolean;
        }
      }
    }
  }
}

/// <reference path="./java.util.Map.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class IDispatcher {
          /**
					 * Constructs a new instance of the com.microsoft.aad.adal.IDispatcher interface with the provided implementation.
					 */
          public constructor(implementation: {
            dispatchEvent(param0: javautilMap<String, String>): void;
          });
          public dispatchEvent(param0: javautilMap<String, String>): void;
        }
      }
    }
  }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class IEvents {
          /**
					 * Constructs a new instance of the com.microsoft.aad.adal.IEvents interface with the provided implementation.
					 */
          public constructor(implementation: {
            setProperty(param0: string, param1: string): void;
            getEvents(): javautilList<android.util.Pair<String, String>>;
            getDefaultEventCount(): number;
            processEvent(param0: javautilMap<String, String>): void;
          });
          public getDefaultEventCount(): number;
          public setProperty(param0: string, param1: string): void;
          public getEvents(): javautilList<android.util.Pair<String, String>>;
          public processEvent(param0: javautilMap<String, String>): void;
        }
      }
    }
  }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
/// <reference path="./java.security.interfaces.RSAPrivateKey.d.ts" />
/// <reference path="./java.security.interfaces.RSAPublicKey.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class IJWSBuilder {
          /**
					 * Constructs a new instance of the com.microsoft.aad.adal.IJWSBuilder interface with the provided implementation.
					 */
          public constructor(implementation: {
            generateSignedJWT(param0: string, param1: string, param2: javasecurityinterfacesRSAPrivateKey, param3: javasecurityinterfacesRSAPublicKey, param4: javasecuritycertX509Certificate): string;
          });
          public generateSignedJWT(param0: string, param1: string, param2: javasecurityinterfacesRSAPrivateKey, param3: javasecurityinterfacesRSAPublicKey, param4: javasecuritycertX509Certificate): string;
        }
      }
    }
  }
}

/// <reference path="./com.microsoft.aad.adal.TokenCacheItem.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class ITokenCacheStore {
          /**
					 * Constructs a new instance of the com.microsoft.aad.adal.ITokenCacheStore interface with the provided implementation.
					 */
          public constructor(implementation: {
            getItem(param0: string): com.microsoft.aad.adal.TokenCacheItem;
            getAll(): javautilIterator<TokenCacheItem>;
            contains(param0: string): boolean;
            setItem(param0: string, param1: com.microsoft.aad.adal.TokenCacheItem): void;
            removeItem(param0: string): void;
            removeAll(): void;
          });
          public removeItem(param0: string): void;
          public removeAll(): void;
          public getAll(): javautilIterator<TokenCacheItem>;
          public getItem(param0: string): com.microsoft.aad.adal.TokenCacheItem;
          public contains(param0: string): boolean;
          public setItem(param0: string, param1: com.microsoft.aad.adal.TokenCacheItem): void;
        }
      }
    }
  }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class ITokenStoreQuery {
          /**
					 * Constructs a new instance of the com.microsoft.aad.adal.ITokenStoreQuery interface with the provided implementation.
					 */
          public constructor(implementation: {
            getAll(): javautilIterator<TokenCacheItem>;
            getUniqueUsersWithTokenCache(): javautilSet<String>;
            getTokensForResource(param0: string): javautilList<TokenCacheItem>;
            getTokensForUser(param0: string): javautilList<TokenCacheItem>;
            clearTokensForUser(param0: string): void;
            getTokensAboutToExpire(): javautilList<TokenCacheItem>;
          });
          public clearTokensForUser(param0: string): void;
          public getUniqueUsersWithTokenCache(): javautilSet<String>;
          public getAll(): javautilIterator<TokenCacheItem>;
          public getTokensForResource(param0: string): javautilList<TokenCacheItem>;
          public getTokensForUser(param0: string): javautilList<TokenCacheItem>;
          public getTokensAboutToExpire(): javautilList<TokenCacheItem>;
        }
      }
    }
  }
}

/// <reference path="./com.microsoft.aad.adal.HttpWebResponse.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class IWebRequestHandler {
          /**
					 * Constructs a new instance of the com.microsoft.aad.adal.IWebRequestHandler interface with the provided implementation.
					 */
          public constructor(implementation: {
            sendGet(param0: javanetURL, param1: javautilMap<String, String>): com.microsoft.aad.adal.HttpWebResponse;
            sendPost(param0: javanetURL, param1: javautilMap<String, String>, param2: native.Array<number>, param3: string): com.microsoft.aad.adal.HttpWebResponse;
            setRequestCorrelationId(param0: javautilUUID): void;
          });
          public setRequestCorrelationId(param0: javautilUUID): void;
          public sendGet(param0: javanetURL, param1: javautilMap<String, String>): com.microsoft.aad.adal.HttpWebResponse;
          public sendPost(param0: javanetURL, param1: javautilMap<String, String>, param2: native.Array<number>, param3: string): com.microsoft.aad.adal.HttpWebResponse;
        }
      }
    }
  }
}

/// <reference path="./android.content.Intent.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class IWindowComponent {
          /**
					 * Constructs a new instance of the com.microsoft.aad.adal.IWindowComponent interface with the provided implementation.
					 */
          public constructor(implementation: {
            startActivityForResult(param0: androidcontentIntent, param1: number): void;
          });
          public startActivityForResult(param0: androidcontentIntent, param1: number): void;
        }
      }
    }
  }
}

/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class IdToken {
          public constructor(param0: string);
          public getTenantId(): string;
          public getPasswordChangeUrl(): string;
          public getFamilyName(): string;
          public getGivenName(): string;
          public getObjectId(): string;
          public getSubject(): string;
          public getUpn(): string;
          public getPasswordExpiration(): number;
          public getEmail(): string;
          public getIdentityProvider(): string;
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class IdentityProviderService {
        }
      }
    }
  }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
/// <reference path="./java.security.interfaces.RSAPrivateKey.d.ts" />
/// <reference path="./java.security.interfaces.RSAPublicKey.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class JWSBuilder {
          public generateSignedJWT(param0: string, param1: string, param2: javasecurityinterfacesRSAPrivateKey, param3: javasecurityinterfacesRSAPublicKey, param4: javasecuritycertX509Certificate): string;
        }
        export namespace JWSBuilder {
          export class Claims {
          }
          export class JwsHeader {
          }
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class Link {
        }
      }
    }
  }
}

/// <reference path="./com.microsoft.aad.adal.ADALError.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class Logger {
          public error(param0: string, param1: string, param2: string, param3: com.microsoft.aad.adal.ADALError): void;
          public static i(param0: string, param1: string, param2: string, param3: com.microsoft.aad.adal.ADALError): void;
          public static e(param0: string, param1: string, param2: string, param3: com.microsoft.aad.adal.ADALError): void;
          public setExternalLogger(param0: com.microsoft.aad.adal.Logger.ILogger): void;
          public verbose(param0: string, param1: string, param2: string, param3: com.microsoft.aad.adal.ADALError): void;
          public static e(param0: string, param1: string, param2: string, param3: com.microsoft.aad.adal.ADALError, param4: javalangThrowable): void;
          public static getInstance(): com.microsoft.aad.adal.Logger;
          public static w(param0: string, param1: string, param2: string, param3: com.microsoft.aad.adal.ADALError): void;
          public inform(param0: string, param1: string, param2: string, param3: com.microsoft.aad.adal.ADALError): void;
          public getCorrelationId(): string;
          public setLogLevel(param0: com.microsoft.aad.adal.Logger.LogLevel): void;
          public debug(param0: string, param1: string): void;
          public static v(param0: string, param1: string, param2: string, param3: com.microsoft.aad.adal.ADALError): void;
          public setAndroidLogEnabled(param0: boolean): void;
          public error(param0: string, param1: string, param2: string, param3: com.microsoft.aad.adal.ADALError, param4: javalangThrowable): void;
          public static d(param0: string, param1: string): void;
          public static i(param0: string, param1: string, param2: string): void;
          public static setCorrelationId(param0: javautilUUID): void;
          public warn(param0: string, param1: string, param2: string, param3: com.microsoft.aad.adal.ADALError): void;
          public static v(param0: string, param1: string): void;
          public getLogLevel(): com.microsoft.aad.adal.Logger.LogLevel;
          public isAndroidLogEnabled(): boolean;
        }
        export namespace Logger {
          export class ILogger {
            /**
						 * Constructs a new instance of the com.microsoft.aad.adal.Logger$ILogger interface with the provided implementation.
						 */
            public constructor(implementation: {
              Log(param0: string, param1: string, param2: string, param3: com.microsoft.aad.adal.Logger.LogLevel, param4: com.microsoft.aad.adal.ADALError): void;
            });
            public Log(param0: string, param1: string, param2: string, param3: com.microsoft.aad.adal.Logger.LogLevel, param4: com.microsoft.aad.adal.ADALError): void;
          }
          export class LogLevel {
            public static Error: com.microsoft.aad.adal.Logger.LogLevel;
            public static Warn: com.microsoft.aad.adal.Logger.LogLevel;
            public static Info: com.microsoft.aad.adal.Logger.LogLevel;
            public static Verbose: com.microsoft.aad.adal.Logger.LogLevel;
            public static Debug: com.microsoft.aad.adal.Logger.LogLevel;
            public static valueOf(param0: string): com.microsoft.aad.adal.Logger.LogLevel;
            public static values(): native.Array<com.microsoft.aad.adal.Logger.LogLevel>;
          }
        }
      }
    }
  }
}

/// <reference path="./com.microsoft.aad.adal.TokenCacheItem.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class MemoryTokenCacheStore {
          public removeItem(param0: string): void;
          public constructor();
          public removeAll(): void;
          public getAll(): javautilIterator<TokenCacheItem>;
          public getItem(param0: string): com.microsoft.aad.adal.TokenCacheItem;
          public contains(param0: string): boolean;
          public setItem(param0: string, param1: com.microsoft.aad.adal.TokenCacheItem): void;
        }
      }
    }
  }
}

/// <reference path="./com.microsoft.aad.adal.AuthenticationRequest.d.ts" />
/// <reference path="./com.microsoft.aad.adal.AuthenticationResult.d.ts" />
/// <reference path="./com.microsoft.aad.adal.IJWSBuilder.d.ts" />
/// <reference path="./com.microsoft.aad.adal.IWebRequestHandler.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class Oauth2 {
          public constructor(param0: com.microsoft.aad.adal.AuthenticationRequest, param1: com.microsoft.aad.adal.IWebRequestHandler);
          public refreshToken(param0: string): com.microsoft.aad.adal.AuthenticationResult;
          public encodeProtocolState(): string;
          public getAuthorizationEndpoint(): string;
          public static decodeProtocolState(param0: string): string;
          public getCodeRequestUrl(): string;
          public getToken(param0: string): com.microsoft.aad.adal.AuthenticationResult;
          public getTokenForCode(param0: string): com.microsoft.aad.adal.AuthenticationResult;
          public getAuthorizationEndpointQueryParameters(): string;
          public static processUIResponseParams(param0: javautilMap<String, String>): com.microsoft.aad.adal.AuthenticationResult;
          public constructor(param0: com.microsoft.aad.adal.AuthenticationRequest, param1: com.microsoft.aad.adal.IWebRequestHandler, param2: com.microsoft.aad.adal.IJWSBuilder);
          public buildRefreshTokenRequestMessage(param0: string): string;
          public getTokenEndpoint(): string;
          public buildTokenRequestMessage(param0: string): string;
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class PRNGFixes {
          public static apply(): void;
        }
        export namespace PRNGFixes {
          export class LinuxPRNGSecureRandom {
            public engineNextBytes(param0: native.Array<number>): void;
            public constructor();
            public engineSetSeed(param0: native.Array<number>): void;
            public engineGenerateSeed(param0: number): native.Array<number>;
          }
          export class LinuxPRNGSecureRandomProvider {
            public constructor();
          }
        }
      }
    }
  }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class PackageHelper {
          public static getBrokerRedirectUrl(param0: string, param1: string): string;
          public getUIDForPackage(param0: string): number;
          public constructor(param0: androidcontentContext);
          public getCurrentSignatureForPackage(param0: string): string;
        }
      }
    }
  }
}

/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class PromptBehavior {
          public static Auto: com.microsoft.aad.adal.PromptBehavior;
          public static Always: com.microsoft.aad.adal.PromptBehavior;
          public static REFRESH_SESSION: com.microsoft.aad.adal.PromptBehavior;
          public static FORCE_PROMPT: com.microsoft.aad.adal.PromptBehavior;
          public static values(): native.Array<com.microsoft.aad.adal.PromptBehavior>;
          public static valueOf(param0: string): com.microsoft.aad.adal.PromptBehavior;
        }
      }
    }
  }
}

/// <reference path="./com.microsoft.aad.adal.ADALError.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class ResourceAuthenticationChallengeException extends com.microsoft.aad.adal.AuthenticationException {
          public constructor(param0: com.microsoft.aad.adal.ADALError, param1: string, param2: javalangThrowable);
          public constructor(param0: string);
          public constructor();
          public constructor(param0: com.microsoft.aad.adal.ADALError, param1: string);
          public constructor(param0: com.microsoft.aad.adal.ADALError);
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class SSOStateSerializer {
        }
      }
    }
  }
}

/// <reference path="./com.microsoft.aad.adal.ADALError.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class ServerRespondingWithRetryableException extends com.microsoft.aad.adal.AuthenticationException {
          public constructor(param0: string, param1: javalangThrowable);
          public constructor(param0: com.microsoft.aad.adal.ADALError, param1: string, param2: javalangThrowable);
          public constructor(param0: string);
          public constructor();
          public constructor(param0: com.microsoft.aad.adal.ADALError, param1: string);
          public constructor(param0: com.microsoft.aad.adal.ADALError);
        }
      }
    }
  }
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class StorageHelper {
          public static DATA_KEY_LENGTH: number;
          public static HMAC_LENGTH: number;
          public static VERSION_ANDROID_KEY_STORE: string;
          public static VERSION_USER_DEFINED: string;
          public decrypt(param0: string): string;
          public constructor(param0: androidcontentContext);
          public encrypt(param0: string): string;
        }
      }
    }
  }
}

/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class StringExtensions {
          public static ENCODING_UTF8: string;
          public static createHash(param0: string): string;
        }
      }
    }
  }
}

/// <reference path="./com.microsoft.aad.adal.IDispatcher.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class Telemetry {
          public constructor();
          public static getInstance(): com.microsoft.aad.adal.Telemetry;
          public registerDispatcher(param0: com.microsoft.aad.adal.IDispatcher, param1: boolean): void;
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class TokenCacheAccessor {
        }
      }
    }
  }
}

/// <reference path="./com.microsoft.aad.adal.AuthenticationResult.d.ts" />
/// <reference path="./com.microsoft.aad.adal.UserInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class TokenCacheItem {
          public static createFRRTTokenCacheItem(param0: string, param1: com.microsoft.aad.adal.AuthenticationResult): com.microsoft.aad.adal.TokenCacheItem;
          public setRawIdToken(param0: string): void;
          public getResource(): string;
          public setAccessToken(param0: string): void;
          public getTenantId(): string;
          public getAccessToken(): string;
          public setUserInfo(param0: com.microsoft.aad.adal.UserInfo): void;
          public isExtendedLifetimeValid(): boolean;
          public setAuthority(param0: string): void;
          public getIsMultiResourceRefreshToken(): boolean;
          public constructor();
          public static createRegularTokenCacheItem(param0: string, param1: string, param2: string, param3: com.microsoft.aad.adal.AuthenticationResult): com.microsoft.aad.adal.TokenCacheItem;
          public getExtendedExpiresOn(): javautilDate;
          public getClientId(): string;
          public setRefreshToken(param0: string): void;
          public setClientId(param0: string): void;
          public setIsMultiResourceRefreshToken(param0: boolean): void;
          public getUserInfo(): com.microsoft.aad.adal.UserInfo;
          public getRefreshToken(): string;
          public static isTokenExpired(param0: javautilDate): boolean;
          public setExtendedExpiresOn(param0: javautilDate): void;
          public getExpiresOn(): javautilDate;
          public setTenantId(param0: string): void;
          public getFamilyClientId(): string;
          public setExpiresOn(param0: javautilDate): void;
          public getRawIdToken(): string;
          public setFamilyClientId(param0: string): void;
          public static createMRRTTokenCacheItem(param0: string, param1: string, param2: com.microsoft.aad.adal.AuthenticationResult): com.microsoft.aad.adal.TokenCacheItem;
          public getAuthority(): string;
          public setResource(param0: string): void;
        }
      }
    }
  }
}

/// <reference path="./com.google.gson.JsonDeserializationContext.d.ts" />
/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./com.google.gson.JsonSerializationContext.d.ts" />
/// <reference path="./com.microsoft.aad.adal.TokenCacheItem.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class TokenCacheItemSerializationAdapater {
          public constructor();
          public serialize(param0: com.microsoft.aad.adal.TokenCacheItem, param1: javalangreflectType, param2: any): any;
          public deserialize(param0: any, param1: javalangreflectType, param2: any): com.microsoft.aad.adal.TokenCacheItem;
        }
      }
    }
  }
}

/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class TokenEntryType {
          public static REGULAR_TOKEN_ENTRY: com.microsoft.aad.adal.TokenEntryType;
          public static MRRT_TOKEN_ENTRY: com.microsoft.aad.adal.TokenEntryType;
          public static FRT_TOKEN_ENTRY: com.microsoft.aad.adal.TokenEntryType;
          public static values(): native.Array<com.microsoft.aad.adal.TokenEntryType>;
          public static valueOf(param0: string): com.microsoft.aad.adal.TokenEntryType;
        }
      }
    }
  }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class UIEvent extends com.microsoft.aad.adal.DefaultEvent {
          public getDefaultEventCount(): number;
          public setProperty(param0: string, param1: string): void;
          public getEvents(): javautilList<android.util.Pair<String, String>>;
          public processEvent(param0: javautilMap<String, String>): void;
        }
      }
    }
  }
}

/// <reference path="./java.net.URL.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class UrlExtensions {
          public static isADFSAuthority(param0: javanetURL): boolean;
        }
      }
    }
  }
}

/// <reference path="./com.microsoft.aad.adal.ADALError.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class UsageAuthenticationException extends com.microsoft.aad.adal.AuthenticationException {
          public constructor(param0: com.microsoft.aad.adal.ADALError, param1: string, param2: javalangThrowable);
          public constructor();
          public constructor(param0: com.microsoft.aad.adal.ADALError, param1: string);
          public constructor(param0: com.microsoft.aad.adal.ADALError);
        }
      }
    }
  }
}

import androidnetUri = android.net.Uri;
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.microsoft.aad.adal.IdToken.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class UserInfo {
          public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
          public getPasswordExpiresOn(): javautilDate;
          public constructor(param0: string);
          public constructor();
          public constructor(param0: com.microsoft.aad.adal.IdToken);
          public getFamilyName(): string;
          public getDisplayableId(): string;
          public getGivenName(): string;
          public getUserId(): string;
          public getPasswordChangeUrl(): androidnetUri;
          public getIdentityProvider(): string;
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class Utility {
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class WebFingerMetadata {
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class WebFingerMetadataRequestParameters {
        }
      }
    }
  }
}

declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class WebFingerMetadataRequestor extends com.microsoft.aad.adal.AbstractMetadataRequestor {
        }
      }
    }
  }
}

/// <reference path="./com.microsoft.aad.adal.HttpWebResponse.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.UUID.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class WebRequestHandler {
          public static HEADER_ACCEPT: string;
          public static HEADER_ACCEPT_JSON: string;
          public setRequestCorrelationId(param0: javautilUUID): void;
          public constructor();
          public sendGet(param0: javanetURL, param1: javautilMap<String, String>): com.microsoft.aad.adal.HttpWebResponse;
          public sendPost(param0: javanetURL, param1: javautilMap<String, String>, param2: native.Array<number>, param3: string): com.microsoft.aad.adal.HttpWebResponse;
        }
      }
    }
  }
}

import javautilHashMap = java.util.HashMap;
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare namespace com {
  export namespace microsoft {
    export namespace aad {
      export namespace adal {
        export class WebviewHelper {
          public getRedirectUrl(): string;
          public validateRequestIntent(): void;
          public getResultIntent(param0: string): androidcontentIntent;
          public getPreKeyAuthInfo(param0: string): com.microsoft.aad.adal.WebviewHelper.PreKeyAuthInfo;
          public getStartUrl(): string;
          public constructor(param0: androidcontentIntent);
        }
        export namespace WebviewHelper {
          export class PreKeyAuthInfo {
            public constructor(param0: javautilHashMap<String, String>, param1: string);
            public getHttpHeaders(): javautilHashMap<String, String>;
            public getLoadUrl(): string;
          }
        }
      }
    }
  }
}

