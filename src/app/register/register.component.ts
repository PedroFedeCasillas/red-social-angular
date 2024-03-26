import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, NgIf],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm: FormGroup;
  
  constructor(private _form: FormBuilder) {
    this.registerForm = this._form.group({
      name: ["", [ Validators.required, Validators.minLength(6) ]],
      email: ["", [ Validators.required, Validators.email ]],
      password: ["", [ Validators.required ]],
      confirmPassword: ["", [ Validators.required ]],
    });

    this.registerForm.get("confirmPassword")?.valueChanges.subscribe(() => {
      this.confirmPasswordValidator();
    })
  }

  confirmPasswordValidator() {
    const password = this.registerForm.get("password")?.value;
    const confirmPassword = this.registerForm.get("confirmPassword")?.value;
    if(password !== confirmPassword) {
      this.registerForm.get("confirmPassword")?.setErrors({ passNotMatch: true });
    } else {
      this.registerForm.get("confirmPassword")?.setErrors(null);
    }
  }

  hasErrors(controlName: string, errorType: string) {
    return this.registerForm.get(controlName)?.hasError(errorType) && this.registerForm.get(controlName)?.touched;
  }

  register() {
    console.log(this.registerForm);
  }
}
