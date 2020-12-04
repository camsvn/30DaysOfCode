import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  exampleJsonObject = {
    "first_name": "Jane", "last_name": "Doe", "age": 25, "is_company": false,
    "address": {
      "street_1": "123 Main St.", "street_2": null,
      "city": "Las Vegas", "state": "NV", "zip_code": "89123"
    },
    "phone_numbers": [
      { "number": "702-123-4567", "type": "cell" },
      { "number": "702-987-6543", "type": "work" }
    ], "notes": ""
  };

  submitData: any;

  submit(data:any){
    console.log(data)
  }
}
