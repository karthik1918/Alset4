import { Component, OnInit } from '@angular/core';
import {User} from '../../providers/user';
import {AppUser} from '../../models/user';
import {Storage} from '@ionic/storage';
import {NavController, ToastController} from 'ionic-angular';
import {SellServicePage} from '../sellService/sellService';
import {WelcomePage} from '../../pages/welcome/welcome';

@Component({
    selector: 'app-home',
    templateUrl: './home.html',
})
export class HomePage implements OnInit {

    constructor(public navCtrl: NavController,private storage: Storage) {

    }
    private displayName: string;
    ngOnInit() {
        this.storage.get('username').then((val) => {
            console.log(val);
            if(val)
            {
                this.displayName = val;
            }
            else {
                this.displayName = '';
            }


        });


    }
    sellService(){

        this.navCtrl.push(SellServicePage);
    }
    logout()
    {
        this.storage.remove('user_id');
        this.storage.remove('username');
        this.navCtrl.setRoot(WelcomePage);
    }

}
