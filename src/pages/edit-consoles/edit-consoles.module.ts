import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditConsolesPage } from './edit-consoles';


@NgModule({
  declarations: [
    EditConsolesPage
  ],
  imports: [
    IonicPageModule.forChild(EditConsolesPage),
  ],
})
export class EditConsolesPageModule {}
