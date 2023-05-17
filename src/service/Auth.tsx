import { useState } from 'react';
import { firebaseAuth } from '../firebase';
import { GoogleAuthProvider, GithubAuthProvider, getRedirectResult, signInWithRedirect, signInWithPopup, User } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export default class AuthService {

  login(name: string): void {
    const provider = this.getProvider(name);
    //const [userData, setUserData] = useState<User | null>(null);

    console.log("login start");
    console.log("signInWithRedirect 전: " + name);

    signInWithRedirect(firebaseAuth, provider).then((result) => {
      console.log("signInWithRedirect: " + result)
    });

    console.log("signInWithRedirect 후: " + name);
    //return userData;
  }

  getProvider(name: string) {
    switch (name) {
      case 'Google':
        return googleProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error('${name} is unknown provider.');
    }
  }

  // 처리하거나 지우기
  onAuthChage = (callback: User) => {
    console.log("onAuthChage start");
    const [user, setUser] = useState<User | null>(null);

    firebaseAuth.onAuthStateChanged(callback => {
      console.log('구독 실행 onAuthChange', user);
      setUser(user);
    })
    console.log("onAuthChage start");
  }

  logout() {
    firebaseAuth.signOut();
  }
};