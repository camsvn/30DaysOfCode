import { AfterViewInit, Component } from '@angular/core';
import { SQLiteService } from '../services/sqlite.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  messages : string [] = ["Start", "1"];

  constructor(private _SQLiteService: SQLiteService) {}

  ngAfterViewInit(){
    this._SQLiteService.initializePlugin()
    this.openDB(); 
    setTimeout(()=> {
      this.openDB()
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
