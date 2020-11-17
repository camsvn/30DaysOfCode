import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl:'./servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   `,
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = 'No new servers are created!'
  serverName = ''
  constructor() {
    setTimeout(() => {
      this.allowNewServers = true
    },2000)
   }

  displayStatus():string {
    return `Disabled: ${!this.allowNewServers}`
  }

  onCreateServer():void {
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`
  }

  onUpdateServerName(event:InputEvent){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }

}
