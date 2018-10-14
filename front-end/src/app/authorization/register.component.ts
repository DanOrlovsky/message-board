import { Component } from '@angular/core';
import  { FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  registerForm;

  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, { validator: matchingFields('password', 'confirmPassword')})
  }

  onSubmit() {
    console.log(this.registerForm.errors);
  }

  isValid(control) {
    return this.registerForm.controls[control].invalid && this.registerForm.controls[control].touched
  }

}

const matchingFields = (field1, field2) => {
  return form => {
    if(form.controls[field1].value !== form.controls[field2].value) {
      return { mismatchedFields: true };
    }
  }
}
