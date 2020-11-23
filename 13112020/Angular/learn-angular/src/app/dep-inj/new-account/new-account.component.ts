import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
  // providers: [LoggingService]
})
export class NewAccountComponent implements OnDestroy {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  private observer;

  constructor(private loggingService: LoggingService,
              private  accountService: AccountsService){
      this.observer = this.accountService.statusUpdated.subscribe((status)=>{
        console.log(`Cross-Component Communication, Data Received: '${status}'`)
      })
  }

  // ngOnInit(){
  //   this.accountService.statusUpdated.subscribe((status)=>{
  //     console.log(`Cross-Component Communication, Data Received: '${status}'`)
  //   })
  // }

  ngOnDestroy(){
    this.observer.unsubscribe();
  }

  onCreateAccount(accountName:string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // console.log('A server status changed, new status: ' + accountStatus);
    
    this.accountService.addAccount(accountName,accountStatus);
    // this.loggingService.logServerAdded(accountStatus);
  }

}
