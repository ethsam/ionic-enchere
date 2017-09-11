import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AcheterPage } from '../pages/acheter/acheter';
import { AcheterDesBCOINSPage } from '../pages/acheter-des-bcoins/acheter-des-bcoins';
import { CloudPage } from '../pages/cloud/cloud';
import { LoginPage } from '../pages/login/login';
import { InscriptionPage } from '../pages/inscription/inscription';
import { PagePage } from '../pages/page/page';
import { EnchRePage } from '../pages/ench-re/ench-re';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AcheterPage,
    AcheterDesBCOINSPage,
    CloudPage,
    LoginPage,
    InscriptionPage,
    PagePage,
    EnchRePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AcheterPage,
    AcheterDesBCOINSPage,
    CloudPage,
    LoginPage,
    InscriptionPage,
    PagePage,
    EnchRePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
