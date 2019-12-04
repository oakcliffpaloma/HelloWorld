import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from '../../../models';

@Component({
  selector: 'am-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  @Input() myAccount: Account;

  @Output() myEvent = new EventEmitter<number>();

  private timesClicked = 0;

  accountForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log(this.myAccount);

    this.accountForm = this.formBuilder.group({
      name: [this.myAccount && this.myAccount.name || '', Validators.required],
      email: [
        this.myAccount && this.myAccount.email || '',
        Validators.compose([Validators.required, Validators.email])
      ]
    });
  }

  buttonClicked() {
    this.timesClicked += 1;

    this.myEvent.emit(this.timesClicked);
  }

  cancel() {
    this.accountForm.patchValue({
      name: this.myAccount.name,
      email: this.myAccount.email
    });
  }

  reset() {
    this.accountForm.patchValue({
      name: '',
      email: ''
    });
  }

  save() {
    const value = this.accountForm.value;
    this.myAccount.name = value.name;
    this.myAccount.email = value.email;
  }
}
