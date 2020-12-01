import { AfterViewInit, Component } from '@angular/core';
// import { SQLiteService } from '../services/sqlite.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  messages : string [] = ["Start", "End"];
  constructor() {}

  ngAfterViewInit(){
  }

}
