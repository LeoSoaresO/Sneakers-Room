import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { BrandComponent } from './pages/brand/brand.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  {path: '', component:HomeComponent},
  {path: 'account', component: AccountComponent},
  {path: 'brand', component: BrandComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
