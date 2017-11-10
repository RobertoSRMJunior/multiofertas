import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from './../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authAF: AngularFireAuth
  
  ) {
  }

  async registrar(user: User){
    try{
     const result = await this.authAF.auth.createUserWithEmailAndPassword(this.user.email, this.user.senha);
      this.navCtrl.push('LoginPage');
      console.log(result);
    }
    catch(e){
      console.error(e);
    }
  }
}
