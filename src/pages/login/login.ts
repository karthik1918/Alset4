import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {HomePage} from '../home-page/home';
import {MainPage} from '../../pages/pages';

import {User} from '../../providers/user';
import {Storage} from '@ionic/storage';
import {TranslateService} from '@ngx-translate/core';
import {ForgotPasswordPage} from "../forgotPassword/forgotPassword";


import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    public form: FormGroup;

    // The account fields for the login form.
    // If you're using the username field with or without email, make
    // sure to add it to the type
    account: { email: string, password: string } = {
        email: '',
        password: ''
    };


    // Our translated text strings
    private loginErrorString: string;

    constructor(public navCtrl: NavController,
                public user: User,
                public toastCtrl: ToastController,
                public translateService: TranslateService,
                private storage: Storage,
                private _FB: FormBuilder) {

        this.translateService.get('LOGIN_ERROR').subscribe((value) => {
            this.loginErrorString = value;
            this.form = _FB.group({
                'email': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50), Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],
                'password': [null],
            });
        })
    }

    // Attempt to login in through our User service
    doLogin() {

        if (this.account.email.trim() == "") {
            let toast = this.toastCtrl.create({
                message: "Please enter email address!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.account.email.trim())){
            let toast = this.toastCtrl.create({
                message: "Invalid email!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else if(this.account.password.trim() == "") {
            let toast = this.toastCtrl.create({
                message: "Please enter password!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }

        else {
            this.user.login(this.account).subscribe((resp) => {

                if (resp.json().status == "error") {
                    let toast = this.toastCtrl.create({
                        message: resp.json().message,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }
                else if (resp.json().status == "success") {

                    this.storage.set('user_id', resp.json().results.user_id);
                    this.storage.set('username',resp.json().results.username);
                    //this.navCtrl.remove(0,index)

                    this.navCtrl.setRoot(HomePage).then(()=>
                    {
                        const startIndex = this.navCtrl.getActive().index -2;
                        this.navCtrl.remove(startIndex,2);
                    })

                }

            }, (err) => {
                // this.navCtrl.push(MainPage);
                // Unable to log in
                let toast = this.toastCtrl.create({
                    message: this.loginErrorString,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            });
        }
    }

    forgotPassword() {
        this.navCtrl.push(ForgotPasswordPage);
    }

}
