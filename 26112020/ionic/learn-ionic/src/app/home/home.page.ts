import { AfterViewInit, Component, OnInit, ViewChild, ElementRef, HostListener, AfterContentChecked} from '@angular/core';
import { SQLiteService } from '../services/sqlite.service'
import { Router } from '@angular/router'

import SignaturePad from 'signature_pad';
import { Plugins, CameraResultType } from '@capacitor/core';

const { Geolocation, Camera } = Plugins;

interface coords {
  accuracy?: number,
  latitude: number,
  longitude: number,
  altitude?: number,
  altitudeAccuracy?: number,
  heading?: number,
  speed?: number
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit, OnInit, AfterContentChecked {

  messages : string [] = ["Start", "End"];
  user: {id: number, name: string};
  panelOpenState = false;
  geoLocationCoords : coords = {latitude: null, longitude: null};
  getLocationDisabled = false;
  profilePicElement: HTMLImageElement;


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
    // console.log(this.user.name)
    this.init();
  }

  init() {
    this.profilePicElement = this.elementRef.nativeElement.querySelector('#profile-pic');
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

  ngAfterContentChecked(){

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

  async getCurrentPosition() {
    this.getLocationDisabled = true;
    const coordinates = await Geolocation.getCurrentPosition();
    this.getLocationDisabled = false;
    console.log('Current', coordinates.coords);
    this.geoLocationCoords = coordinates.coords;
  }

  uploadLocation(){}

  async takePicture() {
    try{
      const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      width: 350,
      height: 220,
      preserveAspectRatio: true,      
      resultType: CameraResultType.DataUrl
    });
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    // var imageUrl = image.webPath;
    console.log(image.dataUrl);
    // let imageURL = `data:image/jpeg;base64,${image.base64String}`; 
    // console.log(imageURL);
    // console.log("ImageURL",imageUrl);
    // Can be set to the src of an image now
    this.profilePicElement.src = image.dataUrl;
    } catch (e) {
      this._SQLiteService.presentToast("Camera Closed")
    }
  }

  deletePicture(){
    if (this.profilePicElement.src) {
      this.profilePicElement.src = ""
    }
  }
}
