import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private toast: ToastController) {

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
