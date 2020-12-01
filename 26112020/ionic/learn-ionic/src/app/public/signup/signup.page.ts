import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms'
import { Router } from '@angular/router'
import { SQLiteService } from '../../services/sqlite.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  signupForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  });

  btn_disabled : boolean = false;
  private _insertUser = "INSERT INTO user (fname, lname, username, password) VALUES (?,?,?,?)";

  constructor(
    private _SQLiteService: SQLiteService,
    private _router: Router
    ) { }

  async onSignUp(){
    console.log(this.signupForm.value)
    let values: Array<any>  = Object.values(this.signupForm.value);
    this._SQLiteService.run(this._insertUser,values).then(val => {
      // console.log(val) //changes{changes,lastId}
      this.signupForm.setValue({
        firstname: '',
        lastname: '',
        username: '',
        password: ''
      })
      this.btn_disabled = true;
      if (val.changes.changes === 1){
        this._SQLiteService.presentToast("User Inserted")
        setTimeout(()=>{
          this.btn_disabled = false;
          this._router.navigateByUrl("/login");
        } ,1500)
      }
    })
    
  }

}
