import { Component } from '@angular/core';
import { accountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private accountsService : accountsService) {
    this.accountsService.statusUpdated.subscribe((message : string) => alert(message));
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.onAccountAdded(accountName, accountStatus);
  }
}
