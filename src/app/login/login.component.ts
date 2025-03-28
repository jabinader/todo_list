import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required) 
  });

  protected onSubmit(): void {
    console.log(this.loginForm.value);
    // We nee to match the credentials provided by the user with the ones saved in the local storage
    // We need to save the credentials somewhere and authorize the user
  }
}
