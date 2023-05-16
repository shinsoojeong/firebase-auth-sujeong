import { useState } from 'react';
import { firebaseAuth } from '../firebase';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, Auth, User } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export default class AuthService {

  login(name: string): (string | User) {
    const provider = this.getProvider(name);

    console.log("login start");
    console.log(name);
    signInWithPopup(firebaseAuth, provider).then((result) => {
      console.log("login success end");
      return result.user;
    }).catch((error) => {
      console.log("login catch end");
      return "error";
    })
    console.log("login else out end");
    return "error";
  }

  getProvider(name: any) {
    switch (name) {
      case 'Google':
        return googleProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error('${name} is unknown provider.');
    }
  }

  onAuthChage = (callback: User) => {

    console.log("onAuthChage start");
    const [user, setUser] = useState<User | null>(null);

    firebaseAuth.onAuthStateChanged(callback => {
      console.log('구독 실행', user);
      setUser(user);
    })
    console.log("onAuthChage start");
  }

  logout() {
    console.log("logout start");
    console.log(firebaseAuth);
    firebaseAuth.signOut();
    console.log(firebaseAuth);
    console.log("logout end");
  }
};