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
export class Service {

    constructor(public http: Http, public api: Api) {
    }


    getServices(user_id: any) {

        console.log(user_id);
        let seq = this.api.post('getServices', {user_id:user_id}).share();

        seq
            .map(res => res.json())
            .subscribe(res => {

            }, err => {
                console.error('ERROR', err);
            });

        return seq;
    }

    createService(service: any) {

        let seq = this.api.post('createService', service).share();

        seq
            .map(res => res.json())
            .subscribe(res => {

            }, err => {
                console.error('ERROR', err);
            });

        return seq;
    }

}
