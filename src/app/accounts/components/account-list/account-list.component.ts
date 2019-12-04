import { Component, OnInit } from '@angular/core';

import { AccountsService } from '../../../services';
import { Account } from '../../../models';
// import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'am-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accounts: Account[];

  constructor(
    private accountsService: AccountsService,
    // private cartService: CartService
    ) { }

  ngOnInit() {
    this.accounts = this.accountsService.getAll();
  }

  // addItem() {
  //   this.cartService.addItemToCart();
  // }

  // removeItem() {
  //   this.cartService.removeItemFromCart();
  // }
}
