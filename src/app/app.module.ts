import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NewDocumentComponent } from './new-document/new-document.component';
import { FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FirebaseService } from './firebase.service';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

import { DocumentlistComponent } from './documentlist/documentlist.component';
import { DeleteDocumentComponent } from './delete-document/delete-document.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NewDocumentComponent,
    DocumentlistComponent,
    DeleteDocumentComponent
 
  ],
  imports: [
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [TopBarComponent,NewDocumentComponent,DeleteDocumentComponent],
  bootstrap: [AppComponent,TopBarComponent],
  providers: [FirebaseService]
  
})
export class AppModule { }
