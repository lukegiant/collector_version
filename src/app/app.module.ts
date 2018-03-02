import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SQLite } from '@ionic-native/sqlite'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AcessoriosPage } from '../pages/acessorios/acessorios';
import { DatabaseProvider } from '../providers/database/database';
import { AcessoriosPageModule } from '../pages/acessorios/acessorios.module';
import { ConsolesPage } from '../pages/consoles/consoles';
import { JogosPage } from '../pages/jogos/jogos';
import { ConsolesProvider } from '../providers/consoles/consoles';
import { JogosProvider } from '../providers/jogos/jogos';
import { AcessoriosProvider } from '../providers/acessorios/acessorios';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AcessoriosPage,
    ConsolesPage,
    JogosPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AcessoriosPage,
    ConsolesPage,
    JogosPage, 
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    DatabaseProvider,
    ConsolesProvider,
    JogosProvider,
    AcessoriosProvider
  ]
})
export class AppModule {}
