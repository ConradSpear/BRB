import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal.component';
import { ConnectionComponent } from './connection.component';
import { ConnectionChiComponent } from './connectionChi.component';
import { ConnectionDalComponent } from './connectionDal.component';
import { ConnectionDCComponent } from './connectionDC.component';
import { ConnectionHouComponent } from './connectionHou.component';
import { ConnectionLAComponent } from './connectionLA.component';
import { ConnectionNYComponent } from './connectionNY.component';
import { ConnectionPhilComponent } from './connectionPhil.component';
import { ConnectionSeattleComponent } from './connectionSeattle.component';
import { ConnectionSFComponent } from './connectionSF.component';
import { AddModalComponent } from './addNew.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    AddModalComponent,
    ConnectionComponent,
    ConnectionChiComponent,
    ConnectionDalComponent,
    ConnectionDCComponent,
    ConnectionHouComponent,
    ConnectionLAComponent,
    ConnectionNYComponent,
    ConnectionPhilComponent,
    ConnectionSeattleComponent,
    ConnectionSFComponent
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
