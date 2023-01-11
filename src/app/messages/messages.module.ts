import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';


import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './components/messages/messages.component';
import { AddMessageModalComponent } from './components/add-message-modal/add-message-modal.component';


@NgModule({
  declarations: [
    MessagesComponent,
    AddMessageModalComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule        
  ]
})
export class MessagesModule { }
