import { Component } from '@angular/core';
import { DataBaseService } from './core/data-base-service/data-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){}

  title = 'messages-firebase-app';
 
}
