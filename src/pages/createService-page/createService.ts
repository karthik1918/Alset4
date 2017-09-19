import { Component, OnInit } from '@angular/core';
import {User} from '../../providers/user';
import {AppUser} from '../../models/user';
import {Storage} from '@ionic/storage';
import {NavController, ToastController} from 'ionic-angular';
import {Service} from '../../providers/service';
import {Events} from 'ionic-angular';
//import {SellSer} from '../login/login';



@Component({
    selector: 'createService',
    templateUrl: './createService.html',
})
export class CreateServicePage  {

    service: { name: string, description: string ,user_id: string,latitude: string, longitude: string} = {
        name: '',
        description: '',
        user_id:'',
        latitude:'',
        longitude:''
    };



    constructor(public services: Service,public navCtrl: NavController,private storage: Storage, private toastCtrl:ToastController,private events: Events) {
        this.storage.get('user_id').then((val) => {
            if(val) {
                this.service.user_id = val;
            }
            })
    }

    createService(){
        this.services.createService(this.service).subscribe((resp) => {

            if (resp.json().status == "error") {
                let toast = this.toastCtrl.create({
                    message: resp.json().message,
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            else if (resp.json().status == "success") {

                this.events.publish('reloadSellService')
                this.navCtrl.pop();
            }
        });

    }



}
