import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ClientLoginComponent } from './client/client-login/client-login.component';

import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    ClientLoginComponent

  ],
  imports: [
    BrowserModule,
    AdminModule,
    ClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),	
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
