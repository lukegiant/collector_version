import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AcessoriosPage } from '../acessorios/acessorios';
import { ConsolesPage } from '../consoles/consoles';
import { JogosPage } from '../jogos/jogos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ConsolesPage;
  tab3Root = JogosPage;
  tab4Root = AcessoriosPage;

  constructor() {

  }
}
