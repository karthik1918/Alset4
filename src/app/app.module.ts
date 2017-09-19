import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, Http} from '@angular/http';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {Storage, IonicStorageModule} from '@ionic/storage';

import {Alset} from './app.component';
import {SellServicePage} from '../pages/sellService/sellService';
import {CardsPage} from '../pages/cards/cards';
import {ContentPage} from '../pages/content/content';
import {ItemCreatePage} from '../pages/item-create/item-create';
import {ItemDetailPage} from '../pages/item-detail/item-detail';
import {ListMasterPage} from '../pages/list-master/list-master';
import {LoginPage} from '../pages/login/login';
import {ForgotPasswordPage} from '../pages/forgotPassword/forgotPassword';
import {MapPage} from '../pages/map/map';

import {MenuPage} from '../pages/menu/menu';
import {SearchPage} from '../pages/search/search';
import {SettingsPage} from '../pages/settings/settings';
import {SignupPage} from '../pages/signup/signup';
import {TabsPage} from '../pages/tabs/tabs';
import {TutorialPage} from '../pages/tutorial/tutorial';
import {WelcomePage} from '../pages/welcome/welcome';
import {HomePage} from '../pages/home-page/home';
import {Api} from '../providers/api';
import {Items} from '../mocks/providers/items';
import {Settings} from '../providers/settings';
import {User} from '../providers/user';
import {Service} from '../providers/service';
import * as firebase from 'firebase/app';
import {Camera} from '@ionic-native/camera';
import {GoogleMaps} from '@ionic-native/google-maps';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {CreateServicePage} from '../pages/createService-page/createService';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { Facebook } from '@ionic-native/facebook';
import {UniqueDeviceID} from '@ionic-native/unique-device-id';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import { Component } from "@angular/core/";

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new Settings(storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
export const firebaseConfig = {
    apiKey: "AIzaSyBjSZ757BYmk2PIomPMhVJ9pq9ozXyd5X8",
    authDomain: "alset-398e7.firebaseapp.com",
    databaseURL: "https://alset-398e7.firebaseio.com",
    projectId: "alset-398e7",
    storageBucket: "",
    messagingSenderId: "284726525555"
};
firebase.initializeApp(firebaseConfig);
@NgModule({
    declarations: [
        Alset,
        CardsPage,
        ContentPage,
        ItemCreatePage,
        ItemDetailPage,
        ListMasterPage,
        LoginPage,
        ForgotPasswordPage,
        MapPage,
        MenuPage,
        SearchPage,
        SettingsPage,
        SignupPage,
        TabsPage,
        TutorialPage,
        WelcomePage,
        HomePage,
        SellServicePage,
        CreateServicePage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        IonicModule.forRoot(Alset),
        IonicStorageModule.forRoot(),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        Alset,
        CardsPage,
        ContentPage,
        ItemCreatePage,
        ItemDetailPage,
        ListMasterPage,
        LoginPage,
        ForgotPasswordPage,
        MapPage,
        MenuPage,
        SearchPage,
        SettingsPage,
        SignupPage,
        TabsPage,
        TutorialPage,
        WelcomePage,
        HomePage,
        SellServicePage,
        CreateServicePage
    ],
    providers: [
        Api,
        Items,
        User,
        Camera,
        GoogleMaps,
        SplashScreen,
        StatusBar,
        UniqueDeviceID,
        Facebook,
        GooglePlus,
        Service,



        {provide: Settings, useFactory: provideSettings, deps: [Storage]},
        // Keep this to enable Ionic's runtime error handling during development
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
