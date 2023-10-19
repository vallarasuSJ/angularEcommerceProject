import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartsComponent } from './components/carts/carts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component'; 
import { authGuardGuard } from './common/auth-guard.guard';
import { GuideComponent } from './components/guide/guide.component';

const routes: Routes = [ 
  {path:'',component:GuideComponent},
  { path: 'home', component: HomeComponent },
  { path: 'carts', component: CartsComponent, canActivate:[authGuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
