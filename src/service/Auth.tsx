import { firebaseAuth } from '../firebase';
import { GoogleAuthProvider, GithubAuthProvider, getRedirectResult, signInWithRedirect, signInWithPopup, User } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export default class AuthService {

  login(name: string): void {
    const provider = this.getProvider(name);
    signInWithRedirect(firebaseAuth, provider).then((result) => { });
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

  logout() {
    firebaseAuth.signOut();
  }
};