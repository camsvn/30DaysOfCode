import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms'
import { Router } from '@angular/router'
import { SQLiteService } from '../../services/sqlite.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  btn_disabled : boolean = false;
  private _queryUser = "SELECT password FROM user WHERE username = ?";  

  constructor(
    private _SQLiteService: SQLiteService,
    private _router: Router
    ) { }
 
  async onLogin(){
    console.log(this.loginForm.value)
    // console.log(this.loginForm.value.username);
    this._SQLiteService.query(this._queryUser,[this.loginForm.value.username])
    .then(data => {
      // console.log("Returned", data.values.length)
      this.btn_disabled = true;
      if(data.values.length && data.values[0].password === this.loginForm.value.password){
        this._SQLiteService.presentToast("Success");
        this._router.navigateByUrl('/home')
      } else{
        this._SQLiteService.presentToast("Invaid Username or Password");
      }
      setTimeout(()=> this.btn_disabled = false, 1500)
    })
  }

}
