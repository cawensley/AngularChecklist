import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from './services/Auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  userInfo = null;
  UserSubscription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.UserSubscription = this.authService.UserInfoChanged.subscribe((userData) => {
      this.userInfo = userData;
    });
    this.authService.autoLogin();
  }

  ngOnDestroy() {
    this.UserSubscription.unsubscribe();
  }
}
