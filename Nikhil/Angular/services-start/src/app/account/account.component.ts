import { Component, EventEmitter, Input, Output } from '@angular/core';
import { accountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id : number;

  constructor(private accountsService : accountsService) {
  }
  
  onSetTo(status: string) {
    this.accountsService.onStatusChanged(this.id, status);
    this.accountsService.statusUpdated.emit(`Status Updated : ${status}`);
  }
}
