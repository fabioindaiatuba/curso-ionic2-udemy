import { Component } from '@angular/core';
import { NavController, Toast } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/toast-test/toast-test.html',
})
export class ToastTestPage {
  constructor(private nav: NavController) {}

  showToast(){
    let toast = Toast.create({
      message: 'Olá Mundo',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'OK', 
      position: 'top'

    });

    toast.onDismiss(() => {
      console.log('Toast Finalizado');
    });


    this.nav.present(toast);
  }

}

