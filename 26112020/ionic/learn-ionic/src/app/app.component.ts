import { AfterViewInit, Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { SQLiteService } from './services/sqlite.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements AfterViewInit{

  private _createTBLQuery: string =`CREATE TABLE IF NOT EXISTS "user" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "fname" VARCHAR(30) NOT NULL,
    "lname" VARCHAR(30) NOT NULL,
    "username" VARCHAR(30) NOT NULL UNIQUE,
    "password" VARCHAR(30) NOT NULL
    );
    `; 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _SQLiteService: SQLiteService
  ) {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
    // this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this._SQLiteService.presentToast("App is Ready")
    });
  }

  ngAfterViewInit(){
    !this._SQLiteService._isPermission && this._SQLiteService.initializePlugin()
    !this._SQLiteService._isPermission && this._SQLiteService.isService.subscribe(data => {
      data && this.openDB("bizRuntimeDB")
    })
  }

  async openDB(dbName: string): Promise<void> {
      if(this._SQLiteService._isPermission) {
        let resOpen = await this._SQLiteService.openDB(dbName); 
        if(resOpen.result) {
          this._SQLiteService.presentToast("DB Created");
          this._SQLiteService.execute(this._createTBLQuery).then(data => {
            this._SQLiteService.presentToast(`Returned ${data}`)
                if(data.changes.changes === 0)
                this._SQLiteService.presentToast("Table 'user' created")
                else 
                this._SQLiteService.presentToast(`Table not created ${data.message}` )
              });
        }
      } else {
        this._SQLiteService.presentToast('CapacitorSQLite Plugin: Initialization Failed');
      }
  }

}
