import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Account } from '../../../models';
import { AccountsService } from '../../../services';

@Component({
  selector: 'am-account-editor',
  templateUrl: './account-editor.component.html',
  styleUrls: ['./account-editor.component.css']
})
export class AccountEditorComponent implements OnInit {
  private accountId: number;
  account: Account;

  constructor(
    private route: ActivatedRoute,
    private accountsService: AccountsService
  ) { }

  ngOnInit() {
    // TODO: don't use snapshot
    console.warn('do not use snapshot');
    const params = this.route.snapshot.params;
    this.accountId = +params.accountId;

    this.account = this.accountsService.get(this.accountId);
  }

  showTimesClicked(timesClicked: number) {
    console.log('times clicked', timesClicked);
  }
}
