import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, switchMap, tap, of } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { DataBaseService } from '../data-base-service/data-base.service';
import { Message } from '../interfaces/message';
import { messageActions } from './messages.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class MessageEffect {
    constructor(
        private actions$: Actions,
        private dbService: DataBaseService,
        private snackBar: MatSnackBar 
    ) {}
    
    addMessage$ = createEffect(() => this.actions$.pipe( 
        ofType(messageActions.addMessage),
        switchMap(({message}) => this.dbService.createMessage(message).pipe(
            map(() => {
                this.snackBar.open("Message added", "Success", {
                    duration: 2000
                  });
                return messageActions.addMessageSuccess()
            }),
            catchError(() => {
                this.snackBar.open("Message hes not been added", "#fail", {
                    duration: 2000
                  });
                return of(messageActions.addMessageFailure())
            }           
        ))                   
    )))

    getMessages$ = createEffect(() => this.actions$.pipe( 
        ofType(messageActions.getMessages),
        switchMap(() => this.dbService.getAllMessages().pipe(
            map((messages) => {
                return messageActions.getMessagesSuccess({ messages })
            }),
            catchError(() => {
                this.snackBar.open("Messages has not been loaded", "#fail", {
                    duration: 2000
                  });
                return of(messageActions.getMessagesFailure())
            })           
        ))                   
    ))

    deleteMessage$ = createEffect(() => this.actions$.pipe( 
        ofType(messageActions.deleteMessage),
        switchMap(({ id }) => this.dbService.deleteMessage(id).pipe(
            map(() => {
                this.snackBar.open(`Message ${id} has beed deleted`, "Success", {
                    duration: 2000
                  });
                return messageActions.deleteMessageSuccess()
            }),
            catchError(() => {
                this.snackBar.open("Message hes not been deleted", "#fail", {
                    duration: 2000
                  });
                return of(messageActions.deleteMessageFailure())
            }           
        ))                   
    )))

    
    
    
}