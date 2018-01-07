import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { OAuthService } from 'angular-oauth2-oidc';

export class Foo {
  constructor(public id: number, public name: string) {}
}

@Injectable()
export class UaaService {
  constructor(
    private _http: Http,
    private oauthService: OAuthService
  ) {
    this.oauthService.loginUrl =
      'http://localhost:8080/uaa/oauth/authorize';
    this.oauthService.redirectUri = 'http://localhost:4200/';
    this.oauthService.clientId = 'cf';
    // tslint:disable-next-line:max-line-length
    this.oauthService.scope = 'uaa.user cloud_controller.read cloud_controller.write openid password.write scim.userids cloud_controller.admin scim.read scim.write';
    this.oauthService.setStorage(sessionStorage);
    this.oauthService.tryLogin({});
  }

  obtainAccessToken() {
    this.oauthService.initImplicitFlow();
  }

  getResource(resourceUrl): Observable<Foo> {
    const headers = new Headers({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      Authorization: 'Bearer ' + this.oauthService.getAccessToken()
    });
    const options = new RequestOptions({ headers: headers });
    return this._http
      .get(resourceUrl, options)
      .map((res: Response) => res.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error')
      );
  }

  isLoggedIn() {
    console.log(this.oauthService.getAccessToken());
    if (this.oauthService.getAccessToken() === null) {
      return false;
    }
    return true;
  }

  logout() {
    this.oauthService.logOut();
    location.reload();
  }
}
