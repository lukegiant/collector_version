import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';

@Injectable()
export class ConsolesProvider {

  constructor(private dbProvider: DatabaseProvider) { }

  public insert(cadconsole: Cadconsole) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'insert into consoles (con_nome, con_empre, con_duedate, con_tipo, con_midia, con_desc) values (?, ?, ?, ?, ?, ?)';
        let data = [cadconsole.con_nome, cadconsole.con_empre, cadconsole.con_duedate, cadconsole.con_tipo, cadconsole.con_midia, cadconsole.con_desc];
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public update(cadconsole: Cadconsole) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'update consoles set con_nome = ?, con_empre = ?, con_duedate = ?, con_tipo = ?, con_midia = ?, con_desc = ? where id = ?';
        let data = [cadconsole.con_nome, cadconsole.con_empre, cadconsole.con_duedate, cadconsole.con_tipo, cadconsole.con_midia, cadconsole.con_desc];
 
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public remove(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'delete from products where id = ?';
        let data = [id];
 
        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public get(id: number) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'select * from consoles where id = ?';
        let data = [id];
 
        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let item = data.rows.item(0);
              let cadconsole = new Cadconsole();
              cadconsole.id = item.id;
              cadconsole.con_nome = item.con_nome;
              cadconsole.con_empre = item.con_empre;
              cadconsole.con_duedate = item.con_duedate;
              cadconsole.con_tipo = item.con_tipo;
              cadconsole.con_midia = item.con_midia;
              cadconsole.con_desc = item.con_desc;
 
              return cadconsole;
            }
 
            return null;
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public getAll(name: string = null) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'SELECT * from consoles where con_nome = ?';
        var data: any[] = [];
 
        // filtrando pelo nome
        if (name) {
          sql += ' and con_nome like ?'
          data.push('%' + name + '%');
        }
 
        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let consoles: any[] = [];
              for (var i = 0; i < data.rows.length; i++) {
                var conso = data.rows.item(i);
                consoles.push(conso);
              }
              return consoles;
            } else {
              return [];
            }
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

}


export class Cadconsole {
  id: number;
  con_nome: string;
  con_empre: string;
  con_duedate: Date;
  con_tipo: string;
  con_midia: string;
  con_desc: string
}
