import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from '../../components/document/document.component';
import { Document2Component } from '../../components/document2/document2.component';
import { MainComponent } from '../../components/main/main.component';

@NgModule({
  declarations: [
    MainComponent,
    DocumentComponent,
    Document2Component  
  ],
  exports: [
    MainComponent
    // DocumentComponent,
    // Document2Component
  ],
  imports: [
    CommonModule
  ]
})
export class DocumentViewerModule { }
