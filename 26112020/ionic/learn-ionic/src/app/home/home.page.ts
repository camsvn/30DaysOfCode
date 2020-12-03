import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, HostListener} from '@angular/core';
import { SQLiteService } from '../services/sqlite.service'
import { Router } from '@angular/router'

import SignaturePad from 'signature_pad';
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
  @ViewChild('canvas', { static: true }) signaturePadElement: ElementRef;  
  
  @HostListener('window: resize', ['$event'])
  onResize(event){
    this.init();
    console.log("Rezised")
  } 

  signaturePad : SignaturePad;

  constructor(
    private _router: Router,
    private _SQLiteService: SQLiteService,
    private elementRef: ElementRef) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user')); 
    console.log(this.user.name)
    this.init();
  }

  init() {
    const canvas: HTMLCanvasElement = this.elementRef.nativeElement.querySelector('canvas');
    canvas.width = window.innerWidth - 80;
    canvas.height = 200;
    this.clearCanvas();
  }

  ngAfterViewInit() {
    this._SQLiteService.execute(this._createDataTBL).then(data => {
      this._SQLiteService.presentToast(`Returned ${data}`)
          if(data.changes.changes === 0)
          this._SQLiteService.presentToast("Table 'data' created")
          else 
          this._SQLiteService.presentToast(`Table not created ${data.message}` )
    });
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
    this.signaturePad.clear();
    this.signaturePad.penColor = 'rgb(43, 43, 49)';
  }

  onLogout(){
    localStorage.clear();
    this._router.navigateByUrl('/login') 
  }

  isCanvasBlank(): boolean {
    if(this.signaturePad){
      return this.signaturePad.isEmpty() ? true : false;
    }
  }

  clearCanvas(){
    if(this.signaturePad){
      this.signaturePad.clear();
    }
  }

  uploadSignature(){
    let signaturePNG = this.signaturePad.toDataURL();
    console.log(signaturePNG);
  }

  deleteSignature(){}

}
