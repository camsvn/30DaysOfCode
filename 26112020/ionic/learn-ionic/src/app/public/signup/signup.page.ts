import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router'
import { SQLiteService } from '../../services/sqlite.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  signupForm = new FormGroup({
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  btn_disabled : boolean = false;
  private _insertUser = "INSERT INTO user (fname, lname, username, password) VALUES (?,?,?,?)";

  constructor(
    private _SQLiteService: SQLiteService,
    private _router: Router
    ) { }

  async onSignUp(){
    if (this.signupForm.valid) {
      console.log(this.signupForm.value)
      let values: Array<any>  = Object.values(this.signupForm.value);
      this._SQLiteService.run(this._insertUser,values).then(val => {
        // console.log(val.message) //changes{changes,lastId}
        this.btn_disabled = true;
        this.signupForm.setValue({
          firstname: '',
          lastname: '',
          username: '',
          password: ''
        })
        console.log("Error: runSQL failed: net.sqlcipher.database.SQLiteConstraintException: error code 19: UNIQUE constraint failed: user.username");
        
        setTimeout(()=>{
          if (val.changes.changes === 1){        
              this._SQLiteService.presentToast("User Inserted")
              this._router.navigateByUrl("/login");            
          } else {
            val.message.includes("error code 19") && this._SQLiteService.presentToast("Error: User Already Exists")
          }
          this.btn_disabled = false;
        } ,1500)
      })
    } else {
      this._SQLiteService.presentToast("Error:Invalid Inputs")
    }
  }

}
