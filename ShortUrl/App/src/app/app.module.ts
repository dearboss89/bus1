import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressesComponent, DialogOverviewCreateNewUrlTwo, DialogOverviewEditUrl, DialogOverviewDeleteUrl } from './addresses/addresses.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    AddressesComponent,
    DialogOverviewCreateNewUrlTwo,
    DialogOverviewEditUrl,
    DialogOverviewDeleteUrl
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    MatDialogModule
    
  ],
  entryComponents:[
    DialogOverviewCreateNewUrlTwo,
    DialogOverviewEditUrl,
    DialogOverviewDeleteUrl
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
