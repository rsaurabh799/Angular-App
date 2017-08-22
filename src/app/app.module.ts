import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule,Routes} from '@angular/router';
import {AuthGuard} from './auth.guard';
import {UserService} from './user.service';

const appRoutes:Routes = [
  {
    path: '',
    component: LoginformComponent
  },
  {
    path: 'dashboard',
    canActivate : [AuthGuard],
    component : DashboardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [UserService , AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
