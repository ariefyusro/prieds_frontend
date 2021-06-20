import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VisitorListComponent } from './menu/visitor-list/visitor-list.component';
import { InputVisitorDetailsComponent } from './menu/visitor-list/input-visitor-details/input-visitor-details.component';
import { RequestQueueNumberComponent } from './menu/visitor-list/request-queue-number/request-queue-number.component';
import { MenuComponent } from './menu/menu.component';

import { MaterialModule } from './tools/material.module';
import { VisitorService } from './shared/services/visitor.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InputVisitorDetailsComponent,
    RequestQueueNumberComponent,
    VisitorListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    VisitorService
  ],
  bootstrap: [AppComponent],
  entryComponents: [InputVisitorDetailsComponent]
})
export class AppModule { }
