import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {HomePage} from '../home-page/home';
import {LoginPage} from '../login/login';
import {SignupPage} from '../signup/signup';
import {UniqueDeviceID} from '@ionic-native/unique-device-id';
import {User} from '../../providers/user';
import {Storage} from '@ionic/storage';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {AppUser} from '../../models/user';
import {Platform} from 'ionic-angular';
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook';
import {GooglePlus} from '@ionic-native/google-plus';
import {MainPage} from '../../pages/pages';

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {

    private hideLogin: boolean = true;
    private hideSignup: boolean = false;

    uuidDetails: { uuid: string } = {
        uuid: ''
    };
    account: { username: string, email: string,  uuid: string, isSocialLogin: boolean,google: string,facebook: string,twitter: string,loginType: string} = {
        username: '',
        email: '',
        uuid: '',
        isSocialLogin: true,
        google: '',
        facebook :'',
        twitter :'',
        loginType: ''
    };

    constructor(public afAuth: AngularFireAuth, public navCtrl: NavController, public user: User, private uniqueDeviceID: UniqueDeviceID, private storage: Storage, public fb: Facebook, public platform: Platform, private googlePlus: GooglePlus, public toastCtrl: ToastController) {




        this.uniqueDeviceID.get()
            .then((uuid: any) => {
                this.uuidDetails.uuid = uuid;

                this.user.checkUuid(this.uuidDetails).subscribe((resp) => {
                    storage.set('uuid', uuid);
                    this.account.uuid = uuid;
                    if (resp.json().status == "success") {

                        this.hideLogin = false;
                        this.hideSignup = true;
                    }
                    else if (resp.json().status == "error") {
                        this.hideLogin = true;
                        this.hideSignup = false;
                    }

                }, (err) => {

                });
            })
            .catch((error: any) => console.log(error));
    }


    loginPage() {

        this.navCtrl.push(LoginPage);
    }

    signup() {
        this.navCtrl.push(SignupPage);
    }

    signInWithGoogle() {
        this.platform.ready().then(() => {

            console.log('platform ' + this.platform.platforms());
            if ((this.platform.is('mobileweb'))||(this.platform.is('core'))) {
                this.afAuth.auth
                    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
                    .then(res => {


                        this.account.username = res.user.displayName;
                        this.account.email = res.user.email;
                        this.account.loginType = 'google';
                        this.account.isSocialLogin = true;

                        this.account.google = res.user.uid;
                        this.saveSignUpData();


                    })
                    .catch((error: any) => {

                        alert(error.message);
                        console.log("error while logging in", error)
                    });
            }
            else {

                this.googlePlus.login({
                    'webClientId': '284726525555-f67p5n5ehmf5o87atj62dvfpe9fe0cml.apps.googleusercontent.com',
                    'offline': true
                })
                    .then(res => {

                        const gc = firebase.auth.GoogleAuthProvider.credential(res.idToken)


                        firebase.auth().signInWithCredential(gc).then(result => {




                           let user: AppUser = new AppUser(result.displayName);
                           this.account.username = result.displayName;
                           this.account.email = result.email;
                           this.account.loginType = 'google';
                           this.account.isSocialLogin = true;
                          this.account.google = result.uid;


                            this.saveSignUpData();



                        }).catch(err1 => {
                            alert("Error");
                        })


                    })
                    .catch(err => {

                        this.user.unauthenticated();
                        console.error(err)
                    });
            }
        });


    }


    signInWithFacebook() {
        this.platform.ready().then(() => {

            if ((this.platform.is('mobileweb'))||(this.platform.is('core'))) {
                this.afAuth.auth
                    .signInWithPopup(new firebase.auth.FacebookAuthProvider())
                    .then(res => {
                        const fc = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
                        firebase.auth().signInWithCredential(fc).then(fs => {
                            console.log(fs);


                        }).catch(ferr => {
                            alert("Error");
                        })


                    })
                    .catch((error: any) => {

                        this.user.unauthenticated();
                        alert(error.message);
                        console.log("error while logging in", error)
                    });

            }
            else {
                this.fb.login(['email'])
                    .then((res: FacebookLoginResponse) => {
                            console.log('Logged into Facebook!', res);
                            const fc = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
                            firebase.auth().signInWithCredential(fc).then(fs => {

                                this.account.username = fs.displayName;
                                this.account.email = fs.email;
                                this.account.loginType = 'facebook';
                                this.account.isSocialLogin = true;
                                this.account.facebook = res.authResponse.userID


                                this.saveSignUpData();

                            }).catch(ferr => {
                                alert("Error");
                            })
                        }
                    )

                    .catch(e => {
                        console.log('Error logging into Facebook', e)
                        alert(JSON.stringify(e));
                    });
            }


        });


    }


    saveSignUpData() {
        this.user.signupwithSocialLogin(this.account).subscribe((resp) => {
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

            // Unable to sign up
            let toast = this.toastCtrl.create({
                message: 'Please try again!',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
}
