import { Component} from '@angular/core';

@Component({
  selector: 'app-dep-inj',
  templateUrl: './dep-inj.component.html',
  styleUrls: ['./dep-inj.component.scss']
})
export class DepInjComponent {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
