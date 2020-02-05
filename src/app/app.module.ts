import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NewDocumentComponent } from './new-document/new-document.component';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NewDocumentComponent
  ],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [TopBarComponent, NewDocumentComponent],
  bootstrap: [AppComponent,TopBarComponent],
  providers: []
  
})
export class AppModule { }
