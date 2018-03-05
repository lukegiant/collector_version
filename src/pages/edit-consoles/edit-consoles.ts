import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SQLiteObject } from '@ionic-native/sqlite';
import { ConsolesProvider, Cadconsole } from '../../providers/consoles/consoles';

@IonicPage()
@Component({
  selector: 'page-edit-consoles',
  templateUrl: 'edit-consoles.html',
})
export class EditConsolesPage {
  model: Cadconsole;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public toast: ToastController, 
    public consolesProvider: ConsolesProvider) { 

      this.model = new Cadconsole();
      if(this.navParams.data.id){
        this.consolesProvider.get(this.navParams.data.id)
          .then((result: any) => {
            this.model = result;
          })
      }

    }

    salvar() {

    }

    private salvarConsoles() {
      
    }

}
