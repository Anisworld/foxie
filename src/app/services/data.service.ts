import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore ) { }

  getUser(){
    const userRef = collection(this.firestore, 'user'); // we can create later
    return collectionData (userRef);
  }
}
