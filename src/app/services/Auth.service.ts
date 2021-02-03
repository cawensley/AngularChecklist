import {Injectable} from '@angular/core';
import firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {Subject} from 'rxjs';

@Injectable()
export class AuthService {
  private UserInfo;
  UserInfoChanged = new Subject();

  constructor(public auth: AngularFireAuth) {}

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((user) => {
      this.UserInfo = user.additionalUserInfo.profile;
      localStorage.setItem('TaskUserData', JSON.stringify(this.UserInfo));
      this.UserInfoChanged.next(this.UserInfo);
    });
  }

  autoLogin() {
    this.UserInfo = JSON.parse(localStorage.getItem('TaskUserData'));
    if (this.UserInfo) {
      this.UserInfoChanged.next(this.UserInfo);
    }
  }

  logout() {
    this.auth.signOut();
    this.UserInfo = null;
    localStorage.removeItem('TaskUserData');
    this.UserInfoChanged.next(this.UserInfo);
  }

  getUserID() {
    if (this.UserInfo) {
      return this.UserInfo.id;
    } else { return null; }
  }

  getUserName() {
    if (this.UserInfo) {
      return this.UserInfo.name;
    } else { return null; }
  }

}
