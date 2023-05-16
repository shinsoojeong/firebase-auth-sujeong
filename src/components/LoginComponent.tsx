import { User } from 'firebase/auth';
import Auth from '../service/Auth';
import React, { useEffect } from 'react';

export default function LoginComponent() {
  const authLogin = new Auth();
  let result: (string | User) = "";

  console.log("LoginComponent start");

  const onLogin = (e: any) => {
    console.log("onLogin start");
    result = authLogin.login(e.target.textContent);
    console.log("onLogin end");
  }

  useEffect(() => {
    if (typeof result == 'string') {
      console.log("useEffect string");
    } else {
      //alert("success 성공하셨습니다.");
      console.log("useEffect User");
      authLogin.onAuthChage(result);
    }
  }, [result]);


  console.log("LoginComponent end");

  return (
    <>
      <h1>LOGIN</h1>
      <ul>
        <li><button onClick={onLogin}>Google</button></li>
        <li><button onClick={onLogin}>Github</button></li>
        <li><button onClick={() => authLogin.logout()}>logout</button></li>
      </ul>
    </>
  )
}