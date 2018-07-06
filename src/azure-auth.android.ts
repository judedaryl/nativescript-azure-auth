/// <reference path="./platforms/android/typings/adal.android.d.ts" />

import * as application from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils';

export class AzureAuth {

  private activity: any;
  private authority: string;
  private clientId: string;
  private context: com.microsoft.aad.adal.AuthenticationContext;
  private loginHint: string = '';
  private redirectUri: string;
  private resourceId: string;
  private userId: string;

  // Authority is in the form of https://login.microsoftonline.com/yourtenant.onmicrosoft.com
  constructor(authority: string, clientId: string, resourceId: string, redirectUri: string) {
    this.authority = authority;
    this.clientId = clientId;
    this.resourceId = resourceId;
    this.activity = application.android.foregroundActivity || application.android.startActivity;

    this.context = new com.microsoft.aad.adal.AuthenticationContext(utils.ad.getApplicationContext(), this.authority, true);

    application.android.on('activityResult', (args) => {
      let intent: android.content.Intent = args.activity.getIntent();
      if (this.context) {
        this.context.onActivityResult(args.requestCode, args.resultCode, args.intent);
      }
    });
  }

  public login(fresh): Promise<string> {
    return new Promise<string>((resolve: any, reject: any) => {
      const promptBehaviour = (fresh ? com.microsoft.aad.adal.PromptBehavior.Always : com.microsoft.aad.adal.PromptBehavior.Auto);
      this.context.acquireToken(
        this.activity,
        this.resourceId,
        this.clientId,
        this.redirectUri,
        promptBehaviour,
        this.loginHint,
        new com.microsoft.aad.adal.AuthenticationCallback({
          onSuccess(result: com.microsoft.aad.adal.AuthenticationResult): void {
            this.userId = result.getUserInfo().getUserId();
            resolve(result.getAccessToken());
          },
          onError(error: javalangException): void {
            reject(error);
          }
        })
      );
    });
  }

  public getToken(): Promise<string> {
    return new Promise<string>((resolve: any, reject) => {
      this.context.acquireTokenSilentAsync(
        this.clientId,
        this.clientId,
        this.userId,
        new com.microsoft.aad.adal.AuthenticationCallback({
          onSuccess(result: com.microsoft.aad.adal.AuthenticationResult): void {
            resolve(result.getAccessToken());
          },
          onError(error: javalangException): void {
            reject(error);
          }
        })
      );
    });
  }
}