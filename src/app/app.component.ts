import {Component} from '@angular/core';
import {AuthConfig, OAuthService} from "angular-oauth2-oidc";
import {SecuredApiService} from "./secured-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  securedContent = 'unset';
  unsecuredContent = 'unset';

  authConfig: AuthConfig = {
    issuer: 'http://localhost:8080/auth/realms/secure-realm',
    redirectUri: window.location.origin + "/",
    clientId: 'secure-client',
    scope: 'openid profile email offline_access default-user-scope',
    responseType: 'code',
    showDebugInformation: true
  }

  private securedApiService: SecuredApiService;
  private oauthService: OAuthService;

  constructor(securedApiService: SecuredApiService, oauthService: OAuthService) {
    this.securedApiService = securedApiService;
    this.oauthService = oauthService;
    this.configureOidClient();
  }

  private configureOidClient() {
    this.oauthService.configure(this.authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  public login() {
    this.oauthService.initLoginFlow();
  }

  public logout() {
    this.oauthService.logOut();
  }

  public requestAPIs() {
    this.securedApiService.requestSecuredResource().subscribe(responseValue => this.securedContent = responseValue.content);
    this.securedApiService.requestUnsecuredResource().subscribe(responseValue => this.unsecuredContent = responseValue.content);
  }

}
