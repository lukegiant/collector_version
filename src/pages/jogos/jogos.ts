import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-jogos',
  templateUrl: 'jogos.html',
})
export class JogosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JogosPage');
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
