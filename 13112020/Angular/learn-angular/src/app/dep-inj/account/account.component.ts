import { Component, Input, Output, EventEmitter, AfterContentChecked } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
  // providers: [LoggingService]
})
export class AccountComponent implements AfterContentChecked {

  @Input() account: {name: string, status: string} ;
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
  
  blockClasses;

  constructor (private loggingService: LoggingService,
               private accountsService: AccountsService){}
  
  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
    this.accountsService.updateStatus(this.id,status);
    // this.loggingService.logStatusChange(this.account.name,status);
    this.accountsService.statusUpdated.emit(status);
  }

  ngAfterContentChecked(){
    this.blockClasses = {
      'block active': this.account.status === 'active',
      'block inactive': this.account.status === 'inactive',
      'block unknown': this.account.status === 'unknown'
    }
  } 

}
