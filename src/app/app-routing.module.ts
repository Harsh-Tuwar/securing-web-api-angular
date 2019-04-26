import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { GurdAuthService } from './gurd-auth.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'vehicles', component: VehiclesComponent, canActivate: [GurdAuthService]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
