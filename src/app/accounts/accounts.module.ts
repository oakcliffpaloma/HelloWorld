
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AccountsRoutingModule } from './accounts-routing.module';

import * as components from './components';

@NgModule({
  declarations: [
    components.AccountListComponent,
    components.AccountEditorComponent,
    components.NotFoundComponent,
    components.AccountFormComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AccountsModule { }
