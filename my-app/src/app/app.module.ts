import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal.component';
import { AddModalComponent } from './addNew.component';
import { ConnectionComponent } from './connection.component';
import { ConnectionChiComponent } from './connectionChi.component';
import { ConnectionDalComponent } from './connectionDal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    AddModalComponent,
    ConnectionComponent,
    ConnectionChiComponent,
    ConnectionDalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
