import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmailSenderFormComponent } from './email-sender-form/email-sender-form.component';
import { AppMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailService } from './email-service/email.service';
import { HttpClientModule } from '@angular/common/http';
import { JasperoAlertsModule } from '@jaspero/ng-alerts';

@NgModule({
  declarations: [
    AppComponent,
    EmailSenderFormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    JasperoAlertsModule.forRoot()
  ],
  providers: [
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
