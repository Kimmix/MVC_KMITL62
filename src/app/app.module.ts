import { StudentController } from './student/student.controller';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [
    StudentController
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputMaskModule,
    PasswordModule,
    FormsModule,
    DialogModule,
    KeyFilterModule,
    MessagesModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [StudentController]
})
export class AppModule { }
