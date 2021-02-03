import { Component } from '@angular/core';
import {AuthService} from '../../../services/Auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(private authService: AuthService) {}

  login() {this.authService.login(); }

}
