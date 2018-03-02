import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-consoles',
  templateUrl: 'consoles.html',
})
export class ConsolesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsolesPage');
  }

  addConsole() {
    this.navCtrl.push('EditConsolesPage');
  }

  addJogos() {
    this.navCtrl.push('EditJogosPage');
  }

  addAcessorios() {
    this.navCtrl.push('EditAcessoriosPage');
  }

}
