import { Action, ActionReducerMap, createReducer, on } from '@ngrx/store';
import { DirectionEnum } from '../enams/enams';
import { Message, SortData } from '../interfaces/message';
import { messageActions } from './messages.actions';


export interface MessageState {
    messages: Message[];
    sortData: SortData;
  }

export const initialState: MessageState = {
    messages: [],
    sortData: { 
        field: 'time',
        direction: DirectionEnum.Descending
    }
};
  
export const messagesStateKey = 'messages';
  export const messageReducer = createReducer(
    initialState,
    on(messageActions.getMessagesSuccess, (state, { messages }) => ({...state, messages})),    
  )