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
  serverCreated = false
  servers=['TestServer','ProductionServer'];
  
  constructor() {
    setTimeout(() => {
      this.allowNewServers = true
    },2000)
   }

  displayStatus():string {
    return `Disabled: ${!this.allowNewServers}`
  }

  onCreateServer():void {
    if (this.serverName !== '') {
      this.servers.push(this.serverName)
      this.serverCreated = true;
      this.serverCreationStatus = `Server was created! Name is ${this.serverName}`
    } else {
      this.serverCreated = false;
      this.serverCreationStatus = `No new servers are created!`
    }
  }

  onUpdateServerName(event:InputEvent){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }

}
