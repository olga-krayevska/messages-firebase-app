import { Action, ActionReducerMap, createReducer, on } from '@ngrx/store';
import { DirectionEnum } from '../enams/enams';
import { Message, SortData } from '../interfaces/message';
import { messageActions } from './messages.actions';


export interface MessageState {
    messages: Message[];
    sortData: SortData;
    isLoading: boolean
  }

export const initialState: MessageState = {
    messages: [],
    sortData: { 
        field: 'time',
        direction: DirectionEnum.Descending
    },
    isLoading: false
};
  
export const messagesStateKey = 'messages';
  export const messageReducer = createReducer(
    initialState,
    on(messageActions.getMessages, (state => ({...state, isLoading: true}))),
    on(messageActions.getMessagesSuccess, (state, { messages }) => ({...state, messages, isLoading: false})), 
    on(messageActions.getMessagesFailure, (state => ({...state, isLoading: false}))), 
    
    on(messageActions.addMessage, (state => ({...state, isLoading: true}))),  
    on(messageActions.addMessageSuccess, (state => ({...state, isLoading: false}))), 
    on(messageActions.addMessageFailure, (state => ({...state, isLoading: false}))), 
    
    on(messageActions.deleteMessage, (state => ({...state, isLoading: true}))),  
    on(messageActions.deleteMessageSuccess, (state => ({...state, isLoading: false}))), 
    on(messageActions.deleteMessageFailure, (state => ({...state, isLoading: false}))),
  )