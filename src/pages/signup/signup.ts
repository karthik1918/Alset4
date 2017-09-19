import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';

import {LoginPage} from '../login/login';
import {User} from '../../providers/user';

import {TranslateService} from '@ngx-translate/core';
import {Storage} from '@ionic/storage';


@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html'
})
export class SignupPage {

    // The account fields for the login form.
    // If you're using the username field with or without email, make
    // sure to add it to the type


    account: { username: string, email: string, password: string, confirmPassword: string, uuid: string ,isSocialLogin: boolean} = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        uuid: '',
        isSocialLogin:false

    };

    // Our translated text strings
    private signupErrorString: string;

    constructor(public navCtrl: NavController,
                public user: User,
                public toastCtrl: ToastController,
                public translateService: TranslateService, private storage: Storage) {

        storage.get('uuid').then((val) => {
            this.account.uuid = val;
        })

        this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
            this.signupErrorString = value;
        })
    }

    doSignup() {


        if (this.account.username.trim() == "") {
            let toast = this.toastCtrl.create({
                message: "Please enter name!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else if (this.account.email.trim() == "") {
            let toast = this.toastCtrl.create({
                message: "Please enter email address!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.account.email.trim())) {
            let toast = this.toastCtrl.create({
                message: "Invalid email!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else if (this.account.password.trim() == "") {
            let toast = this.toastCtrl.create({
                message: "Please enter password!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else if (this.account.password !== this.account.confirmPassword) {
            let toast = this.toastCtrl.create({
                message: "Password doesnot match!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else {
            // Attempt to login in through our User service
            this.user.signup(this.account).subscribe((resp) => {
                if (resp.json().status == "error") {
                    let toast = this.toastCtrl.create({
                        message: resp.json().message,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }
                else if (resp.json().status == "success") {
                    alert("Registered Successfully! Please verify by clicking on the link in the registered email!");
                    this.navCtrl.push(LoginPage);
                }
            }, (err) => {

                // Unable to sign up
                let toast = this.toastCtrl.create({
                    message: this.signupErrorString,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            });
        }


    }



}
