import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;
  public rootPage: string = 'LoginPage';
  public pages: Array<{ titulo: string, component: any, icon: string}>;

  constructor (platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.pages = [
      { titulo: 'Home', component: 'HomePage', icon: 'home'},
      { titulo: 'Ofertas', component: 'OfertasPage', icon: 'flame'},
      { titulo: 'Estabelecimentos', component: 'LojasPage', icon: 'pricetag'},
      { titulo: 'Mapa', component: 'MapaPage', icon: 'pin'},
      { titulo: 'Contato', component: 'ContatoPage', icon: 'mail'},

    ]

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
    this.nav.setRoot(page);
  }

}
