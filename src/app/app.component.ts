import { Component, OnInit } from '@angular/core';
import { Account } from './models';
import { AccountsService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private accountsService = new AccountsService();

  accounts: Account[];

  ngOnInit() {
    this.accounts = this.accountsService.getAll();
  }
}
