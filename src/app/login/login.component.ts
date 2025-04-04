import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { User } from '../shared/models/user.model';
import { DatabaseService } from '../shared/services/database.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  incorrectCredentials = false;
  user: User | undefined;
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required) 
  });

  constructor(private readonly loginService: LoginService, private route: Router, private readonly dbService: DatabaseService) { }

  protected onSubmit(): void {
    const credentials = this.loginForm.value;
    this.loginService.login(credentials.username, credentials.password).subscribe((data: any) => {
      const user = data.find((user: any) => user.username === credentials.username && user.password === credentials.password);
      if (user) {
        this.route.navigate(['']);
        this.incorrectCredentials = false;
        this.user = user;
      } else {
        this.incorrectCredentials = true;
        this.user = undefined;
      }
      this.dbService.saveUser(this.user);
    })
  }
}
