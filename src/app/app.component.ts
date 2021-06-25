import { Component, OnInit, AfterViewInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { CleverTap } from '@ionic-native/clevertap/ngx';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [Push, Platform, StatusBar, SplashScreen, CleverTap]
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(private push:Push, private platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, clevertap: CleverTap) {
    platform.ready().then(() => {
      // once the platform is ready and plugins are available,
      // do all higher level native things
      statusBar.styleDefault();
      splashScreen.hide();

      clevertap.registerPush()

      const options: PushOptions = {
        ios: {
            alert: 'true',
            badge: true,
            sound: 'false'
        }
      }
      
      const pushObject: PushObject = this.push.init(options);
      pushObject.on('notification').subscribe((notification: any) => {
        alert('Received a notification deeplink ' + notification.additionalData.wzrk_dl);
        console.log("Clevertap ", JSON.stringify(notification));
      });
      // pushObject.on('registration').subscribe((registration: any) => alert('Device registered' + registration));
      pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
      
    });

    
   
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }
}
