import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from "angularfire2/firestore";


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    
  constructor(public db: AngularFirestore) { }

  createDocument(document_name){
    
    this.db.collection('documents').add({
      document_name: document_name,
      is_important: 0
      
    });
    
  }
}
