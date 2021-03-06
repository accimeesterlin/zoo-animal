import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from "@angular/router"
import {HttpModule} from "@angular/http";


import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { AnimalsComponent } from './animals/animals.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    AnimalsComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'',
        component: HomeComponent
      },

      {
        path:'views',
        component: AnimalsComponent
      },

      {
        path:'table',
        component: ListComponent
      },

       {
        path:'add',
        component: FormsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
