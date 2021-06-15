import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './Material/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderComponent } from './Components/order/order.component';
import { ConfirmServiceService } from './shared/confirm-service.service';
import { ConfirmServiceComponent } from './Components/confirm-service/confirm-service.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrderComponent,
    ConfirmServiceComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [ConfirmServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
