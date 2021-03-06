import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'accounts',
  loadChildren: () => import('./accounts/accounts.module')
    .then(data => data.AccountsModule)
},

{path: '', redirectTo: 'accounts', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
