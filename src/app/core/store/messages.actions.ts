import { createAction, props } from '@ngrx/store';
import { Message } from '../interfaces/message';


export namespace messageActions {
    export const addMessage = createAction(`Add Message`, props<{ message: Message }>());
    export const addMessageSuccess = createAction(`Add Message Success`);
    export const addMessageFailure = createAction(`Add Message Failure`);
    
    export const getMessages = createAction(`Get Messages`);
    export const getMessagesSuccess = createAction(`Get Messages success`, props<{ messages: Message[]}>());
    export const getMessagesFailure = createAction(`Get Messages falure`);
}