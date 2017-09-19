import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Api} from './api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {AppUser} from '../models/user';

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class User {
    _user: any;
    private _appUser: AppUser;
    private authenticated: boolean = false;

    constructor(public http: Http, public api: Api) {
    }

    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    isUserLoggedIn() {
        return this.authenticated;
    }

    allowUser(_appUser?: AppUser) {
        this._appUser = _appUser;
        this.authenticated = true;
    }

    login(accountInfo: any) {

        let seq = this.api.post('login', accountInfo).share();

        seq
            .map(res => res.json())
            .subscribe(res => {

                // If the API returned a successful response, mark the user as logged in
                if (res.status == "success") {
                    this._loggedIn(res);
                } else {
                }
            }, err => {
                console.error('ERROR', err);
            });

        return seq;
    }
    unauthenticated() {
        this.authenticated = false;
    }

    getAppUser() {
        return this._appUser;
    }

    set AppUser(appUser: AppUser) {
        this._appUser = appUser;
    }

    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    signup(accountInfo: any) {
        let seq = this.api.post('signup', accountInfo).share();

        seq
            .map(res => res.json())
            .subscribe(res => {
                // If the API returned a successful response, mark the user as logged in
                if (res.status == 'success') {
                    this._loggedIn(res);
                }
            }, err => {
                console.error('ERROR', err);
            });

        return seq;
    }

    signupwithSocialLogin(accountInfo: any) {
        let seq = this.api.post('signUpWithSocialLogin', accountInfo).share();

        seq
            .map(res => res.json())
            .subscribe(res => {
                // If the API returned a successful response, mark the user as logged in
                if (res.status == 'success') {
                    this._loggedIn(res);
                }
            }, err => {
                console.error('ERROR', err);
            });

        return seq;
    }
    /**
     * Log the user out, which forgets the session
     */
    logout() {
        this._user = null;
    }

    /**
     * Process a login/signup response to store user data
     */
    _loggedIn(resp) {
        this._user = resp.user;
    }


    checkUuid(uuid: any) {

        let seq = this.api.post('checkUuid', uuid).share();

        seq
            .map(res => res.json())
            .subscribe(res => {

            }, err => {
                console.error('ERROR', err);
            });

        return seq;
    }

    forgotPassword(accountInfo: any) {
        let seq = this.api.post('forgotPassword', accountInfo).share();

        seq
            .map(res => res.json())
            .subscribe(res => {
                // If the API returned a successful response, mark the user as logged in
                if (res.status == 'success') {
                    this._loggedIn(res);
                }
            }, err => {
                console.error('ERROR', err);
            });

        return seq;
    }

}
