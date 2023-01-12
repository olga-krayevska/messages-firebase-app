import { Component } from '@angular/core';
import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid'
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-message-modal',
  templateUrl: './add-message-modal.component.html',
  styleUrls: ['./add-message-modal.component.scss']
})
export class AddMessageModalComponent {
  constructor(public dialogRef: MatDialogRef<AddMessageModalComponent>) {}

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
