import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { GamePage } from '../pages/game/game';


// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyC3VUWDei9pmytUQ8Dk9bMIYhOjug6lpoU",
  authDomain: "flanelinha-223018.firebaseapp.com",
  databaseURL: "https:// flanelinha-223018.firebaseio.com",
  projectId: " flanelinha-223018",
  storageBucket: " flanelinha-223018.appspot.com",
  messagingSenderId: "671584397542"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GamePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
