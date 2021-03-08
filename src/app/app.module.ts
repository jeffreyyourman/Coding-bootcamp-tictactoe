import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DocumentViewerModule} from './modules/document-viewer/document-viewer.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DocumentViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
