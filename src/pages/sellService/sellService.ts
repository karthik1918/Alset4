import { Component, OnInit } from '@angular/core';
import {Service} from '../../providers/service';
import {AppUser} from '../../models/user';
import {Storage} from '@ionic/storage';
import {NavController, ToastController} from 'ionic-angular';
import {CreateServicePage} from '../createService-page/createService';
import {MapPage} from '../map/map';
import {Events} from 'ionic-angular';

@Component({
    selector: 'sell-Service',
    templateUrl: './sellService.html',
})
export class SellServicePage implements OnInit {
    private serviceText: string;
i=0;
    services: any[];

    constructor(public service: Service,private storage: Storage,public navCtrl: NavController,public toastCtrl: ToastController,private events: Events) {
        this.events.subscribe('reloadSellService',() => {
            this.getServices();
        });



        
    }

    getServices()
    {
        this.storage.get('user_id').then((val) => {
            if(val)
            {
                this.service.getServices(val).subscribe((resp) =>
                {
                    console.log(resp)
                    if (resp.json().status == "error") {
                        this.serviceText='No Services Created!'

                    }
                    else if (resp.json().status == "success") {
                        if(resp.json().results.length == 0)
                        {
                            this.serviceText='No Services Created!'
                        }
                        else
                        {
                            this.serviceText='Your Current Services!'
                            this.services=resp.json().results;
                        }
                    }


                }, (err) => {

                });
            }

        });


    }
    showMap(lat,long,name){
        this.navCtrl.push(MapPage, {
            latitude:lat,
            longitude: long,
            serviceName:name
        });
    }
    ngOnInit() {



    }
    ionViewDidLoad()
    {
     this.getServices();
     }
    createService(){
        this.navCtrl.push(CreateServicePage);

    }


}
