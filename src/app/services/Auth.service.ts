import {Injectable} from '@angular/core';
import firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  private UserInfo;

  constructor(public auth: AngularFireAuth, private router: Router) {}

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((user) => {
      this.UserInfo = user.additionalUserInfo.profile;
      localStorage.setItem('TaskUserData', JSON.stringify(this.UserInfo));
      this.router.navigate(['tasks']);
    });
  }

  autoLogin() {
    this.UserInfo = JSON.parse(localStorage.getItem('TaskUserData'));
    if (this.UserInfo) {
      this.router.navigate(['tasks']);
    }
  }

  logout() {
    this.auth.signOut();
    this.UserInfo = null;
    localStorage.removeItem('TaskUserData');
    this.router.navigate(['']);
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
