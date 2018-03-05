import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ConsolesProvider, Cadconsole } from '../../providers/consoles/consoles';

@IonicPage()
@Component({
  selector: 'page-consoles',
  templateUrl: 'consoles.html'
})
export class ConsolesPage {
  searchText: string = null;
  consoles: any[] = [];

  constructor(public navCtrl: NavController, private toast: ToastController, private consolesProvider: ConsolesProvider) { }

  ionViewDidLoad() {
    this.getAllConsoles();
  }

  getAllConsoles() {
    this.consolesProvider.getAll(this.searchText)
      .then((result: any[]) => {
        this.consoles = result;
      });
  }

  editConsole(id: number) {
    this.navCtrl.push('EditConsolesPage', { id: id });
  }

  removeConsole(cadconsole: Cadconsole) {
    this.consolesProvider.remove(cadconsole.id)
      .then(() => {
        // Removendo do array de consoles
        var index = this.consoles.indexOf(cadconsole);
        this.consoles.splice(index, 1);
        this.toast.create({ message: 'Registro removido.', duration: 3000, position: 'botton' }).present();
      })
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
