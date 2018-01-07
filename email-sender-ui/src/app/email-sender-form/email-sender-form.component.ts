import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../email-service/email.service';

@Component({
  selector: 'app-email-sender-form',
  templateUrl: './email-sender-form.component.html',
  styleUrls: ['./email-sender-form.component.css']
})
export class EmailSenderFormComponent {
  private readonly RECEIVER_CONTROL_NAME = 'receiver';
  private readonly TOPIC_CONTROL_NAME = 'topic';
  private readonly CONTENT_CONTROL_NAME = 'content';

  emailSenderForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) {
    this.initEmailSenderForm();
  }

  get receiverControl(): AbstractControl | null {
    return this.emailSenderForm.get(this.RECEIVER_CONTROL_NAME);
  }

  get topicControl(): AbstractControl | null {
    return this.emailSenderForm.get(this.TOPIC_CONTROL_NAME);
  }

  get contentControl(): AbstractControl | null {
    return this.emailSenderForm.get(this.CONTENT_CONTROL_NAME);
  }

  submitForm() {
    if (this.emailSenderForm.invalid) {
      this.validateAllFormControls(this.emailSenderForm);
      return;
    }

    this.emailService.sendEmail(this.emailSenderForm.value);
  }

  private initEmailSenderForm() {
    this.emailSenderForm = this.formBuilder.group({
      [this.RECEIVER_CONTROL_NAME]: ['', [Validators.required, Validators.email]],
      [this.TOPIC_CONTROL_NAME]: ['', Validators.required],
      [this.CONTENT_CONTROL_NAME]: ['', Validators.required]
    });
  }

  private validateAllFormControls(form: FormGroup): void {
    Object.keys(form.controls).forEach(controlName => {
      const control = form.get(controlName);
      if (control instanceof FormControl) {
        (control as FormControl).markAsTouched({onlySelf: true});
      }
    });
  }
}
