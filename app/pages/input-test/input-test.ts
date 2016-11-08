import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/input-test/input-test.html',
})



export class InputTestPage {

  login : string;
  senha: string;

  constructor(public nav: NavController) {}

  entrar(){
    let alert = Alert.create({
      title: 'Entrado...',
      message: 'Login: ' + this.login + ', Senha: '+this.senha 
    });

    this.nav.present(alert);
  }

}
