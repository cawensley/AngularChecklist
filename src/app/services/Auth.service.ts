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
      this.UserInfoChanged.next(this.UserInfo);
    });
  }

  logout() {
    this.auth.signOut();
    this.UserInfo = null;
    this.UserInfoChanged.next(this.UserInfo);
  }

  getUserID() {
    if (this.UserInfo) {
      return this.UserInfo.id;
    } else { return null; }
  }

}
