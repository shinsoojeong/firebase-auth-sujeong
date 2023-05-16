import { User } from '@firebase/auth';
import React, { useEffect, useState, useContext } from 'react';
import { firebaseAuth } from '../firebase';

export const AuthContext = React.createContext<User | null>(null);

export function useAuthContext() {
  return useContext(AuthContext);
}


type AuthProviderProps = {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const subscribe = firebaseAuth.onAuthStateChanged(fbUser => {
      console.log('구독 실행', fbUser);
      setUser(fbUser);
    });

    return subscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;