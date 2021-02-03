import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/Auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  DisplayName: 'String';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.DisplayName = this.authService.getUserName();
  }

  logout() {this.authService.logout(); }

}
