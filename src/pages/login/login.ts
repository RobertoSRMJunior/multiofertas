import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authAF: AngularFireAuth,
    private alertCtrl: AlertController  
  ) {
  }

  async logar(user: User){
    if(this.user.email != undefined && this.user.senha != undefined){
      this.authAF.auth.signInWithEmailAndPassword(this.user.email, this.user.senha)
      .then(res => {
        this.navCtrl.setRoot('HomePage');
      }, err=> {
        let msg;

        switch (err.code) {
          case "auth/argument-error":
            msg="Digite um email e senha válidos."
          break;

          case "auth/wrong-password":
          msg= 'Email ou senha incorretos.'
          break;

          case "auth/user-not-found":
          msg= 'Usuário não encontrado.'
          break;

          case "auth/invalid-email":
          msg= 'Email ou senha incorreto'
          break;
        }

        //Mensagem de alerta na tela
        this.alertCtrl.create({
          title: 'Erro de autenticação',
          subTitle: msg,
          buttons: ['Fechar']
        }).present();        
      });
    }else{
      //Mensagem de alerta na tela
      this.alertCtrl.create({
        title: 'Erro de autenticação',
        subTitle: 'Preencha por favor',
        buttons: ['Fechar']
      }).present();
    }
  }

  registrar(){
    this.navCtrl.push('RegisterPage');
  }

}
