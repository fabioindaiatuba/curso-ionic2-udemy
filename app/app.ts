import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {AlertPage} from './pages/alert/alert';
import {ButtonTestPage} from './pages/button-test/button-test';
import { CardTestPage } from './pages/card-test/card-test';

@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  pages: Array<{component: any, title: string, icon: string}>;
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    this.pages = [
      { component: HomePage, title: 'Home', icon: 'home' },
      { component: AlertPage, title: 'Alert', icon: 'alert' },
      { component: ButtonTestPage, title: 'Button', icon: 'add-circle' },
      { component: CardTestPage, title: 'Card Teste', icon: 'card' }
    ];
    

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page: any): void {
    this.rootPage = page.component;
  }
}

ionicBootstrap(MyApp);
