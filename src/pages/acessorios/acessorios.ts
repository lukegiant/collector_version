import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-acessorios',
  templateUrl: 'acessorios.html',
})
export class AcessoriosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcessoriosPage');
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
