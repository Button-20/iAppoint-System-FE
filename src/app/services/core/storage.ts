import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJs from 'crypto-js';
import { Variables } from './variable';

const SecureStorage = require('secure-web-storage');
const { ACCESS_TOKEN, USER_DETAILS } = Variables;

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  secureStorage: any;

  constructor(private router: Router) {
    let SECRET_KEY: any = '%B00KSt0re_==_USER_**_APP_%%_HASH_##_HASH%';

    this.secureStorage = new SecureStorage(localStorage, {
      hash: (key: any) => {
        key = CryptoJs.SHA256(key, SECRET_KEY);
        return key.toString();
      },
      encrypt: function encrypt(data: any) {
        data = CryptoJs.AES.encrypt(data, SECRET_KEY);
        data = data.toString();
        return data;
      },
      decrypt: function decrypt(data: any) {
        data = CryptoJs.AES.decrypt(data, SECRET_KEY);
        if (data) {
          try {
            data = data.toString(CryptoJs.enc.Utf8);
            if (data) {
              return data;
            }
          } catch (e) {
            return null;
          }
        }
        return null;
      },
    });

    let data = {
      secret: 'data',
    };

    this.secureStorage.setItem('data', data);
  }

  setAccessToken(token: string): any {
    this.secureStorage.setItem(ACCESS_TOKEN, token);
  }

  getAccessToken(): any {
    let token = this.secureStorage.getItem(ACCESS_TOKEN);
    if (token) {
      return token;
    }
    return null;
  }

  isAuthenticated(): boolean {
    let token = this.getAccessToken();
    if (token != null) {
      let decodedToken = atob(token.split('.')[1]);
      if (JSON.parse(decodedToken).exp > Date.now() / 1000) return true;
    }
    return false;
  }

  getUserDetails(): any {
    let userDetails = this.secureStorage.getItem(USER_DETAILS);
    if (userDetails) {
      return userDetails;
    }
    return null;
  }

  setUserDetails(userDetails: any) {
    this.secureStorage.setItem(USER_DETAILS, userDetails);
  }

  setData(key: string, value: any) {
    let data = JSON.stringify(value);
    localStorage.setItem(key, data);
  }

  getData(key: string) {
    let data = localStorage.getItem(key);
    if (data != null) {
      return JSON.parse(data);
    }
    return null;
  }

  clearAllStorage() {
    this.secureStorage.clear();
  }

  clearAllExceptRememberMe() {
    this.secureStorage.removeItem(ACCESS_TOKEN);
    this.secureStorage.removeItem(USER_DETAILS);
  }

  logOutUser() {
    this.clearAllExceptRememberMe();
    this.router.navigateByUrl('auth', { replaceUrl: true });
  }
}
