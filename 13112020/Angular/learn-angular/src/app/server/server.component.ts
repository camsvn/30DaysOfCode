import { 
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
 } from '@angular/core';

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
export class ServerComponent implements 
    OnChanges
    // OnInit,
    // DoCheck,
    // AfterContentInit,
    // AfterContentChecked,
    // AfterViewInit,
    // AfterViewChecked,
    // OnDestroy
    {
    serverId = 10;
    serverStatus = 'offline'
    @Input() serverName:string;

    constructor(){
        console.log("Constructor Called!");
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offine';
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log("ngOnChange Called!");
        console.log(changes);
    }    
    
    // ngOnInit() {console.log("ngOnInit Called!");}

    // ngDoCheck() {console.log("ngDoCheck Called!");}

    // ngAfterContentInit() {console.log("ngAfterContentInit Called!");}

    // ngAfterContentChecked() {console.log("ngAfterContentChecked Called!");}

    // ngAfterViewInit() {console.log("ngAfterViewInit Called!");}

    // ngAfterViewChecked() {console.log("ngAfterViewChecked Called!");}

    // ngOnDestroy() {console.log("ngOnDestroy Called!");}

    getServerStatus(){
        return this.serverStatus
    }

    getColor(){
        return this.serverStatus==='online' ? 'green' : 'red'
    }
}