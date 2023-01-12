import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid'
import { messageActions } from 'src/app/core/store/messages.actions';
import { MessageState } from 'src/app/core/store/messages.reducer';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-message-modal',
  templateUrl: './add-message-modal.component.html',
  styleUrls: ['./add-message-modal.component.scss']
})
export class AddMessageModalComponent {
  constructor(
    private store: Store<MessageState>,
    public dialogRef: MatDialogRef<AddMessageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    messageForm = new FormGroup({
      name: new FormControl('', [
        Validators.required]),
      message: new FormControl('', [
        Validators.required]),
    });

  submit() {
    const message = {
      ...this.messageForm.getRawValue(),
      id: uuidv4(),
      date: moment().format('YYYY-MM-DD HH:mm'),
      time: moment().unix()
    } 
    this.dialogRef.close(message)
  }  

  closeModal() {
    this.dialogRef.close(false);
  }
}
