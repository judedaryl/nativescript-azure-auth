# Azure Auth

A nativescript wrapper around the native libraries of Microsoft Azure's Active Directory Authentication Libraries [ADAL for iOS](https://github.com/AzureAD/azure-activedirectory-library-for-objc) and [ADAl for Android](https://github.com/AzureAD/azure-activedirectory-library-for-android).

Add your plugin badges here. See [nativescript-urlhandler](https://github.com/hypery2k/nativescript-urlhandler) for example.

Then describe what's the purpose of your plugin. 

## Version

    Current version: 1.0.3
## Installation


```javascript
tns plugin add nativescript-azure-auth
```
 
## Usage - Angular

Create a authentication service that uses this library.

``` typescript
import { Injectable } from "@angular/core";
import { AzureAuth } from "nativescript-azure-auth";

const azureAuth: AzureAuth;
const authority: string = "https://login.microsoftonline.com/{TENANT_ID}/oauth2/authorize"
const clientID: string = "{CLIENT_ID}";
const resourceId: string = "{RESOURCE_ID}";
const redirectUri: string = "{REPLY-URL}";

@Injectable()
export class AzureAuthenticationService {

    constructor() {
        this.azureAuth = new AzureAuth(authority,clientID,resourceId,redirectUri);
    }

    login() {
        this.azureAuth.login()
            .then(accessToken => {
                console.log(`Token: ${accessToken}`);
            })
            .catch(error => {
                console.log(error);
            });
    }

    getToken() {
        this.azureAuth.getToken()
            .then(accessToken => {
                console.log(`Access token : ${accessToken}`);
            })
            .catch(error => {
                console.log(error);
            });
    }

    logout() {
        this.azureAuth.clearCache();
    }

}
```

The login and logout can be consumed in a component.

```typescript
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { AzureAuthenticationService } from "~azure-authentication.service"

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit, AfterViewInit {
    
    constructor(private azureAuthService: AzureAuthenticationService) {}

    login() {
        this.azureAuthService.login();
    }

    logout() {
        this.azureAuthService.logout();
    }
}
```
The best use-case for getToken would be in an interceptor so you can be sure that the latest **access token** is attached to your header when you make a http request to a protected Rest API.

```typescript
import { Component, Inject, Injectable } from "@angular/core";
import { AzureAuthenticationService } from "~azure-authentication.service"
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpHeaders, HttpClient} from "@angular/common/http";
import { Observable, from } from "rxjs";
import "rxjs/add/operator/switchMap";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private azureAuthService: AzureAuthenticationService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const promise = this.auth.azureAuthService.getToken();
        const observable = from(promise);
        return observable.switchMap((token) => {
            req = req.clone({setHeaders: {
                authorization: `Bearer ${token}`,
                "content-type": "application/json"
            }});
            return next
                .handle(req)
                .do(event => {})
                .catch(err => console.log(err));
        });   
    }
}
```
## API

  `public login(clearCache?: boolean): Promise<string>`

  Opens a webview that redirects to login.microsoft.com. 

  **clearCache** parameter clears the ADAL tokenCache when set to true. By default clearCache is set to true.

  `public getToken(): Promise<string>`

  Silently retrieves a token from **Azure Active Directory** using the refresh token being stored by the respective native libraries for ADAL. Best used with an interceptor or when creating http request that require th token.

  `public clearCache(): void`

  Clears the entire token cache for the **clientId** set when instantiating this library.
    
## Contributions

Thanks to James Browning for providing help.

## License

Apache License Version 2.0, January 2004
