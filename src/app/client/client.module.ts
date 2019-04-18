import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  declarations: [ClientLoginComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  exports:[ClientLoginComponent]
})
export class ClientModule { }
