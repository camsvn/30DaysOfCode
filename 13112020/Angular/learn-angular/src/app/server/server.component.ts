import { Component, Input } from '@angular/core';

//decorators enhance class, elements etc..
@Component({
    selector: 'app-server', //sould be unique
    templateUrl: './server.component.html',
    styles:[`
        .online {
            color : white;
        }
    `]
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline'
    @Input() serverName:string;

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offine';
    }

    getServerStatus(){
        return this.serverStatus
    }

    getColor(){
        return this.serverStatus==='online' ? 'green' : 'red'
    }
}