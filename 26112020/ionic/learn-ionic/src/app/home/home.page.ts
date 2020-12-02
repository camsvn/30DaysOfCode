import { AfterViewInit, Component } from '@angular/core';
// import { SQLiteService } from '../services/sqlite.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  messages : string [] = ["Start", "End"];
  constructor(private _router: Router) {}

  ngAfterViewInit(){
  }

  onLogout(){
    localStorage.setItem("loggedIn","false");
    this._router.navigateByUrl('/login') 
  }

}
