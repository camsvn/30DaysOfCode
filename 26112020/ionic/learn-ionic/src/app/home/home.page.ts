import { AfterViewInit, Component } from '@angular/core';
import { SQLiteService } from '../services/sqlite.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  messages : string [] = ["Start", "End"];

  createTBLQuery =`CREATE TABLE IF NOT EXISTS "user" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "fname" VARCHAR(30) NOT NULL,
    "lname" VARCHAR(30) NOT NULL,
    "username" VARCHAR(30) NOT NULL UNIQUE,
    "password" VARCHAR(30) NOT NULL
    );
    `; 

  constructor(private _SQLiteService: SQLiteService) {}

  ngAfterViewInit(){
     this._SQLiteService.initializePlugin()
    setTimeout(()=> {
      this.openDB()
      this._SQLiteService.execute(this.createTBLQuery).then(data => {
        console.log("Returned",data)
        if(data.changes.changes === 0)
          console.log("Table 'user' created")
        else 
          console.log("Table not created", data.message)
      });
    }, 3000)
  }

  async openDB(): Promise<void> {
    if(this._SQLiteService.isService) {
      let resOpen = await this._SQLiteService.openDB("bizRuntimeDB"); 
      if(resOpen.result) {
       console.log("DB Created")
      }
    } else {
      console.log('CapacitorSQLite Plugin: Initialization Failed');
    }
}
}
