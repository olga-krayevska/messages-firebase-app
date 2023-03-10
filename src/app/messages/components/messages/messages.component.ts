import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Observable } from 'rxjs';
import { Message } from 'src/app/core/interfaces/message';
import { MessageState } from 'src/app/core/store/messages.reducer';
import { messageActions } from 'src/app/core/store/messages.actions';
import { messageSelectors } from 'src/app/core/store/messages.selectors';
import { MatDialog } from '@angular/material/dialog';
import { AddMessageModalComponent } from '../add-message-modal/add-message-modal.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})

export class MessagesComponent implements OnInit {
  messages$: Observable<Message[]> = this.store.select(messageSelectors.selectSortedMessages);
  isLoading$: Observable<boolean> = this.store.select(messageSelectors.selectLoading);
  displayedColumns: string[] = ['id', 'name', 'message', 'date', 'actions'];

  constructor (
    private store: Store<MessageState>,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(messageActions.getMessages());    
  }

  addMessage() {
    this.dialog.open(AddMessageModalComponent).afterClosed().pipe(filter(result => !!result)).subscribe((message) => {
      this.store.dispatch(messageActions.addMessage({ message: message }))
    })    
  }

  checkLength(message: string) {
    return message.length < 101 ? message : message.substring(0, 100)
  }

  delete(id: string) {
    this.store.dispatch(messageActions.deleteMessage({ id: id }))
  }
}

