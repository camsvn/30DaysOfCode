import { Component, OnInit } from '@angular/core';
import {papper} from './const'

@Component({
  selector: 'amal-owns-it',
  templateUrl: './tt.component.html',
  styleUrls: ['./tt.component.scss']
})
export class TtComponent implements OnInit {

  papper=papper;
  constructor() { }

  ngOnInit(): void {
  }


}
