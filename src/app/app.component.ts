import { Component } from '@angular/core';
import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid'
import { DataBaseService } from './core/data-base-service/data-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private databaseService: DataBaseService){}

  title = 'messages-firebase-app';
 
}
