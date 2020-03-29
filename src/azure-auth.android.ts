/// <reference path="./platforms/android/typings/adal.android.d.ts" />

import * as application from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';
import { AzureUser } from './azure-user.model';

export class AzureAuth {

  private activity: any;
  private authority: string;
  private clientId: string;
  private context: com.microsoft.aad.adal.AuthenticationContext;
  private loginHint: string = '';
  private redirectUri: string;
  private resourceId: string;
  private userId: string;
  private promptBehaviour = com.microsoft.aad.adal.PromptBehavior.Always;
  private CONSOLE_TAG = "[Azure Auth]:";

  constructor(authority: string, clientId: string, resourceId: string, redirectUri: string) {
    this.authority = authority;
    this.clientId = clientId;
    this.resourceId = resourceId;
    this.activity = application.android.foregroundActivity || application.android.startActivity;
    this.redirectUri = redirectUri;
    this.context = new com.microsoft.aad.adal.AuthenticationContext(utils.ad.getApplicationContext(), this.authority, true);

    application.android.on('activityResult', (args) => {
      let intent: android.content.Intent = args.activity.getIntent();
      if (this.context) {
        this.context.onActivityResult(args.requestCode, args.resultCode, args.intent);
      }
    });
  }

  public login(clearCache?: boolean): Promise<string> {
    if (typeof clearCache === undefined || clearCache) {
      this.clearCache();
      console.log(`Clearing cache for clientID: ${this.clientId}`);
    }
    return new Promise<string>((resolve: any, reject: any) => {
      this.context.acquireToken(
        this.activity,
        this.resourceId,
        this.clientId,
        this.redirectUri,
        this.promptBehaviour,
        this.loginHint,
        new com.microsoft.aad.adal.AuthenticationCallback({
          onSuccess(result: com.microsoft.aad.adal.AuthenticationResult): void {
            const CONSOLE_TAG = "[Azure Auth]:";
            const clientId = this.clientId;
            const resourceId = this.resourceId;
            this.userId = result.getUserInfo().getUserId();
            console.log(`${CONSOLE_TAG} Successfully logged in against ${clientId}`);
            console.log(`${CONSOLE_TAG} Token resource set for: ${resourceId}`);
            console.log(`${CONSOLE_TAG} Verified login for user: ${result.getUserInfo().getDisplayableId()}`);
            console.log(`${CONSOLE_TAG} User ID: ${this.userId}`);
            console.log(`${CONSOLE_TAG} Token expiry: ${result.getExpiresOn()}`);
            resolve(result.getAccessToken());
          },
          onError(error: javalangException): void {
            const CONSOLE_TAG = "[Azure Auth]:";
            const clientId = this.clientId;
            console.log(`${CONSOLE_TAG} Error loggin in against ${clientId}`);
            console.log(`${CONSOLE_TAG} STACK TRACE`);
            console.log(error);
            reject(error);
          }
        })
      );
    });
  }

  public getToken(): Promise<string> {
    return new Promise<string>((resolve: any, reject) => {
      this.context.acquireTokenSilentAsync(
        this.resourceId,
        this.clientId,
        this.userId,
        new com.microsoft.aad.adal.AuthenticationCallback({
          onSuccess(authResult: com.microsoft.aad.adal.AuthenticationResult): void {
            const CONSOLE_TAG = "[Azure Auth]:";
            console.log(`${CONSOLE_TAG} Successfully retrieved new token`);
            resolve(authResult.getAccessToken());
          },
          onError(error: javalangException): void {
            const CONSOLE_TAG = "[Azure Auth]:";
            console.log(`${CONSOLE_TAG} Error retrieving access token silently`);
            console.log(`${CONSOLE_TAG} STACK TRACE`);
            console.log(error);
            reject(error);
          }
        })
      );
    });
  }

  public getUser(): Promise<AzureUser> {
    return new Promise<AzureUser>((resolve: any, reject) => {
      this.context.acquireTokenSilentAsync(
        this.resourceId,
        this.clientId,
        this.userId,
        new com.microsoft.aad.adal.AuthenticationCallback({
          onSuccess(authResult: com.microsoft.aad.adal.AuthenticationResult): void {
            const CONSOLE_TAG = "[Azure Auth]:";
            console.log(`${CONSOLE_TAG} Successfully retrieved new token`);
            const userInfo = authResult.getUserInfo();
            const responseUser: AzureUser = {
              userId: userInfo.getUserId(),
              expiredOn: userInfo.getPasswordExpiresOn() ? userInfo.getPasswordExpiresOn().toString() : '',
              familyName: userInfo.getFamilyName(),
              givenName: userInfo.getGivenName(),
              identityProvider: userInfo.getIdentityProvider(),
              uniqueName: userInfo.getDisplayableId()
            }
            resolve(responseUser);
          },
          onError(error: javalangException): void {
            const CONSOLE_TAG = "[Azure Auth]:";
            console.log(`${CONSOLE_TAG} Error retrieving access token silently`);
            console.log(`${CONSOLE_TAG} STACK TRACE`);
            console.log(error);
            reject(error);
          }
        })
      );
    });
  }

  public clearCache(): void {
    this.context.getCache().removeAll();
    console.log(`${this.CONSOLE_TAG} Cleared ADAL cache ${this.clientId}`);
  }
}