import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddnewsComponent } from './addnews/addnews.component';
import { ViewallnewsComponent } from './viewallnews/viewallnews.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'


const myroutes=[
  {path:"",component:AddnewsComponent},
  {path:"a",component:ViewallnewsComponent}
]




@NgModule({
  declarations: [
    AppComponent,
    AddnewsComponent,
    ViewallnewsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
   
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
