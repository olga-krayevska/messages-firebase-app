import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { MatToolbarModule } from '@angular/material/toolbar';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EffectsModule } from '@ngrx/effects';
import { MessageEffect } from './core/store/messages.effects';
import { messageReducer } from './core/store/messages.reducer'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './core/store/app.reducer';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirestore(() => getFirestore()),
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([MessageEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 100 }),
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
