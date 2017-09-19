import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';

import {LoginPage} from "../login/login";

import {User} from '../../providers/user';


import {
    FormGroup
} from '@angular/forms';

@Component({
    selector: 'page-forgotPassword',
    templateUrl: 'forgotPassword.html'
})
export class ForgotPasswordPage {
    public form: FormGroup;

    // The account fields for the login form.
    // If you're using the username field with or without email, make
    // sure to add it to the type
    account: { email: string } = {
        email: ''
    };


    // Our translated text strings
    private loginErrorString: string;

    constructor(public navCtrl: NavController,
                public user: User,
                public toastCtrl: ToastController,
               ) {


    }

    // Attempt to login in through our User service
    forgotPassword() {

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

        else {
            this.user.forgotPassword(this.account).subscribe((resp) => {

                if (resp.json().status == "error") {
                    let toast = this.toastCtrl.create({
                        message: resp.json().message,
                        duration: 3000,
                        position: 'top'
                    });
                    toast.present();
                }
                else if (resp.json().status == "success") {
                    alert("Please click on the link sent in your registered email id to reset your password!")
                    this.navCtrl.push(LoginPage);
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



}
