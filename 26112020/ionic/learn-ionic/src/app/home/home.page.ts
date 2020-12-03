import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SQLiteService } from '../services/sqlite.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit, OnInit {

  messages : string [] = ["Start", "End"];
  user: {id: number, name: string};
  panelOpenState = false;

  private _createDataTBL = `CREATE TABLE IF NOT EXISTS "datas" (
    "id"	INTEGER PRIMARY KEY AUTOINCREMENT,
    "uid"	INTEGER NOT NULL UNIQUE,
    "img"	TEXT,
    "signature"	TEXT,
    "location"	TEXT,
    FOREIGN KEY("uid") REFERENCES "user"("id")
  );
  `
  constructor(
    private _router: Router,
    private _SQLiteService: SQLiteService) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user')); 
    console.log(this.user.name)
  }

  ngAfterViewInit(){
    this._SQLiteService.execute(this._createDataTBL).then(data => {
      this._SQLiteService.presentToast(`Returned ${data}`)
          if(data.changes.changes === 0)
          this._SQLiteService.presentToast("Table 'data' created")
          else 
          this._SQLiteService.presentToast(`Table not created ${data.message}` )
        });
  }

  onLogout(){
    localStorage.clear();
    this._router.navigateByUrl('/login') 
  }

}
