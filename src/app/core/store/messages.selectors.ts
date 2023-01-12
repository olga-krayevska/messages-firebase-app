import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { sortArrayByProperty } from "../utils/helper.function";
import { messagesStateKey, MessageState } from "./messages.reducer";

const messageSelector = createFeatureSelector<MessageState>(messagesStateKey);
export namespace messageSelectors {
    export const selectAllMessages = createSelector(messageSelector, (state) => state.messages);
    export const selectSortData = createSelector(messageSelector, (state) => state.sortData);
    
    export const selectSortedMessages = createSelector(
        selectAllMessages,
        selectSortData,
        (messages, sortData) => sortArrayByProperty(messages, sortData.field, sortData.direction))

    export const selectLoading = createSelector(messageSelector, (state) => state.isLoading);    
}

