import { Component, Input } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
  // providers: [LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService,
              private  accountService: AccountsService){
      accountService.statusUpdated.subscribe((status)=>{
        console.log(`Cross-Component Communication, Data Received: '${status}'`)
      })
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
