import { Component } from '@angular/core';
import { accountsService } from './accounts.service';
import { loggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private accountsService : accountsService) {
  
  }

  accounts = this.accountsService.accounts;
}
