import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LogInFormComponent } from './log-in-form/log-in-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TablePageComponent } from './table-page/table-page.component';
import { FirstPipePipe } from './first-pipe.pipe';
import { HttpClientModule } from '@angular/common/http'

const onerouter: Routes = [
  {
   path:'register-form',
   component: RegisterFormComponent, 
  },
  {
    path:'table-page',
    component: TablePageComponent, 
   },
  {
    path:'log-in-form',
    component: LogInFormComponent,
  },
  {
    path:'home-page',
    component: HomePageComponent,
  },
  {
    path:'**',
    redirectTo: '/home-page',
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LogInFormComponent,
    HomePageComponent,
    TablePageComponent,
    FirstPipePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(onerouter),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
