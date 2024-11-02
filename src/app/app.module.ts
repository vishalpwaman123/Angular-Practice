import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './lifecycle/parent/parent.component';
import { ChildComponent } from './lifecycle/child/child.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
