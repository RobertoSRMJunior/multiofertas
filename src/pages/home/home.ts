import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private push: Push) {
      this.push.hasPermission()
      .then((res: any) => {
    
        if (res.isEnabled) {
          console.log('Tem permissão');
            const options: PushOptions = {
                android: {},
                ios: {
                    alert: 'true',
                    badge: true,
                    sound: 'false'
                },
                windows: {},
                browser: {
                    pushServiceURL: 'http://push.api.phonegap.com/v1/push'
                }
            };

            const pushObject: PushObject = this.push.init(options);

            pushObject.on('notification').subscribe((notification: any) => {
              alert(notification.message);
            });
            
            pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
            
            pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
            
        } else {
          console.log('Não tem Permissão');
        }
    
      });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
