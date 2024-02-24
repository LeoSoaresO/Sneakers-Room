import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { BrandComponent } from './pages/brand/brand.component';
import { HomeComponent } from './pages/home/home.component';
import { WomenComponent } from './components/women/women.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'account', component: AccountComponent},
  {path: 'brand', component: BrandComponent},
  {path: 'women', component: WomenComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
