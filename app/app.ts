import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {AlertPage} from './pages/alert/alert';
import {ButtonTestPage} from './pages/button-test/button-test';
import { CardTestPage } from './pages/card-test/card-test';
import { InputTestPage } from './pages/input-test/input-test';
import { ListTestPage } from './pages/list-test/list-test';
import { GridTestPage } from './pages/grid-test/grid-test';
import { ModalTestPage } from './pages/modal-test/modal-test';
import { NavigationTestPage } from './pages/navigation-test/navigation-test';
import { TabTestPage } from './pages/tab-test/tab-test';
import { ToastTestPage } from './pages/toast-test/toast-test';
import { ToolbarTestPage } from './pages/toolbar-test/toolbar-test';

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
      { component: CardTestPage, title: 'Card Teste', icon: 'card' },
      { component: InputTestPage, title: 'Input Teste', icon: 'key' },
      { component: ListTestPage, title: 'List Teste', icon: 'list' },
      { component: GridTestPage, title: 'Grid Teste', icon: 'grid' },
      { component: ModalTestPage, title: 'Modal Teste', icon: 'move' },
      { component: NavigationTestPage, title: 'Navigation Teste', icon: 'bicycle' },
      { component: TabTestPage, title: 'Tab Teste', icon: 'albums' },
      { component: ToastTestPage, title: 'Toast Teste', icon: 'chatbubbles' },
      { component: ToolbarTestPage, title: 'Toolbar Teste', icon: 'checkmark-circle' }

      
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
