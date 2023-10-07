import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { headerComponent } from './components/header/header.component';
import { exchangeComponent } from './components/exchange/exchange.component';


@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    exchangeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
