import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, filter, Observable, Subscription, tap } from 'rxjs';
import { Message } from 'src/app/core/interfaces/message';
import { DataBaseService } from 'src/app/core/data-base-service/data-base.service';
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

export class MessagesComponent implements OnInit, OnDestroy{
  subscription: Subscription = new Subscription();
  messages$: Observable<Message[]> = this.store.select(messageSelectors.selectSortedMessages);
  isLoading$: Observable<boolean> = this.store.select(messageSelectors.selectLoading);
  displayedColumns: string[] = ['id', 'name', 'message', 'date', 'actions'];

  constructor (
    private databaseService: DataBaseService,
    private store: Store<MessageState>,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(messageActions.getMessages());    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addMessage() {
    this.dialog.open(AddMessageModalComponent, { data: { isLoading$: this.isLoading$ }}).afterClosed().pipe(filter(result => !!result)).subscribe((message) => {
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

