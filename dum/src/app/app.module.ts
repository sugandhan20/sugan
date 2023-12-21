import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { DelComponent } from './del/del.component';
import { GetComponent } from './get/get.component';
import { UpdComponent } from './upd/upd.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ViewComponent } from './view/view.component'

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    DelComponent,
    GetComponent,
    UpdComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
