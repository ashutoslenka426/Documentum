import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from "angularfire2/firestore";
import { DocumentlistComponent } from './documentlist/documentlist.component';
import { element } from 'protractor';


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

  editDocument(document_name , old){

    console.log('edit document called');

    let x;
    this.db.collection('documents',ref => ref.where('document_name', '==', old)).snapshotChanges()
    .subscribe(result => {
      
      result.forEach((doc) => {
        x = doc.payload.doc.id;
        console.log(' key edit ' + x);
        console.log(' key edit ' + document_name);
        this.db.collection("documents").doc(x).update({'document_name':document_name});
          
        });
  
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

  importantUnimportantDocument(document_name){
    
    let x;
    let data;
    var keepGoing = true;
    this.db.collection('documents',ref => ref.where('document_name', '==', document_name)).snapshotChanges()
    .subscribe(result => {
      
      result.forEach((doc) => {
        x = doc.payload.doc.id;
        data = doc.payload.doc.data();
        console.log(' key1 ' + x);
        console.log(' is important' + data.is_important);
        if(keepGoing) {
          if(data.is_important == 0){
            this.db.collection("documents").doc(x).update({'is_important':1});
            keepGoing = false;
          
          }
          else if(data.is_important == 1){
            this.db.collection("documents").doc(x).update({'is_important':0});
            keepGoing = false;
            
          }
        }  

      });

        

    });
      
  }
} 


  
  
