import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatCardModule, 
  MatInputModule, 
  MatSnackBarModule, 
  MatToolbarModule 
} from '@angular/material';
import { WebService } from './web.service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component';
import  { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import {RegisterComponent } from './authorization/register.component';


const routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'messages',
  component: MessagesComponent
},{
  path: 'messages/:name',
  component: MessagesComponent
}, {
  path: 'register',
  component: RegisterComponent
}];


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [ WebService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
