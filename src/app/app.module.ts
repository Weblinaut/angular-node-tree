import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NodeTreeComponent } from './node-tree/node-tree.component';
import { NodeBranchComponent } from './node-branch/node-branch.component';

@NgModule({
  declarations: [
    AppComponent,
    NodeTreeComponent,
    NodeBranchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
