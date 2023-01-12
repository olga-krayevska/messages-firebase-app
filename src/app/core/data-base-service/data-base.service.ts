import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { Message } from '../interfaces/message'

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  constructor(private firestore: AngularFirestore) { }

  createMessage(message: Message): Observable<void>{
    return from(this.firestore.collection<Message>('messages').doc(message.id).set(message));
  }

  getAllMessages(): Observable<Message[]> {
    return this.firestore.collection<Message>('messages').valueChanges();
  }
}
