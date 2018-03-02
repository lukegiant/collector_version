import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { DatabaseProvider } from '../providers/database/database';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null; //não abrir nada até o banco ser criado

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dbProvider: DatabaseProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //Aqui o banco é criado e em seguida é chamado a função openTabsPage
      dbProvider.createDatabase()
        .then(() => {
          this.openTabsPage(splashScreen);
        })
        .catch(() => {
          this.openTabsPage(splashScreen);
        })
    });
  }

  //Aqui abre a página principal (ou seja, a tabsPage)
  private openTabsPage(splashScreen: SplashScreen) {
    splashScreen.hide();
    this.rootPage = TabsPage;
  }
}
