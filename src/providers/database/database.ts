import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) { }

  public getDB() {
    return this.sqlite.create({
      name: 'colecao.db',
      location: 'default'
    });
  }

  public createDatabase() {
    return this.getDB()
      .then((db: SQLiteObject) => {
        this.createTables(db);
      })
      .catch((e) => console.error(e));
  }

  private createTables(db: SQLiteObject) {
      // Criando as tabelas
      db.sqlBatch([
        ['CREATE TABLE IF NOT EXISTS consoles (id integer primary key AUTOINCREMENT NOT NULL, con_nome TEXT, con_empre TEXT, con_duedate DATE, con_tipo TEXT, con_midia TEXT, con_desc TEXT, jog_id integer, FOREIGN KEY(jog_id) REFERENCES jogos(id)), ace_id integer, FOREIGN KEY(ace_id) REFERENCES acessorios(id))'],
        ['CREATE TABLE IF NOT EXISTS jogos (id integer primary key AUTOINCREMENT NOT NULL, jog_nome TEXT, jog_desen TEXT, jog_duedate DATE, jog_plat TEXT, jog_gen TEXT, jog_midia TEXT, jog_versao TEXT, jog_jogad integer, con_id integer, FOREIGN KEY(con_id) REFERENCES consoles(id))'],
        ['CREATE TABLE IF NOT EXISTS acessorios (id integer primary key AUTOINCREMENT NOT NULL, ace_nome TEXT, ace_fabri TEXT, ace_duedate DATE, ace_tipo TEXT, ace_plat TEXT, ace_desc TEXT, con_id integer, FOREIGN KEY(con_id) REFERENCES consoles(id))']
      ])
        .then(() => console.log('Tabelas criadas'))
        .catch(e => console.error('Erro ao criar as tabelas', e));
  }


}
