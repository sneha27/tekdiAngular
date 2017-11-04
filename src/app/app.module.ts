import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { CountryService } from './country.service';
import { UniteModule } from '@appcarvers/ngx-unitelist/unite.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    UniteModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
