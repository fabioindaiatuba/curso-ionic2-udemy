import { Component } from '@angular/core';
import { NavController, Modal } from 'ionic-angular';
import { ModalLoginPage } from '../modal-login/modal-login';

/*
  Generated class for the ModalTestPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/modal-test/modal-test.html',
})
export class ModalTestPage {
  
  
  constructor(private nav: NavController) {}

  openModal(){
    //Passando parametro Modal
    let modal = Modal.create(ModalLoginPage, {
      action: "logar"
    });
    //capitura parametro do modal
    modal.onDismiss((param) => {
      console.log("Dados Usuario", param);
    });
    this.nav.present(modal);
  }
}
