import { ActionReducerMap } from '@ngrx/store';

import { messageReducer, messagesStateKey, MessageState } from './messages.reducer';

interface AppState {
  [messagesStateKey]: MessageState;  
}

export const appReducer: ActionReducerMap<AppState, any> = {
    [messagesStateKey]: messageReducer
};
