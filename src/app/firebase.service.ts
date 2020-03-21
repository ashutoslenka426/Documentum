import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from "angularfire2/firestore";
import { DocumentlistComponent } from './documentlist/documentlist.component';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    
  constructor(public db: AngularFirestore) { }

  createDocument(document_name){

    console.log('create document called');

    this.db.collection('documents').add({
      document_name: document_name,
      is_important: 0
      
    });
   
  }
  getDocumentList(){
    return this.db.collection('documents').snapshotChanges();
  }

  deleteDocument(document_name , deleteFlag){
    if(deleteFlag == true){

      console.log('delete flag' + deleteFlag);

      let x;
      this.db.collection('documents',ref => ref.where('document_name', '==', document_name)).snapshotChanges()
      .subscribe(result => {
        
        result.forEach((doc) => {
          x = doc.payload.doc.id;
          console.log(' key1 ' + x);

          this.db.collection("documents").doc(x).delete().then(function() {
                console.log("Document successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });

        });

      });
        
    }
  }  

}
