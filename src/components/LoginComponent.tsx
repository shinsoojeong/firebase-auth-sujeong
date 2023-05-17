import { User } from 'firebase/auth';
import AuthService from '../service/Auth';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Url } from 'url';
import { useAuthContext } from '../context/AuthContext';

export default function LoginComponent() {
  const authLogin = new AuthService();
  const [result, setResult] = useState<User | string>('');
  const [loding, setLoding] = useState<boolean>(true);

  const location = useLocation();
  const pathname: string = location.state;
  const navigate = useNavigate();

  const loginCheck: (User | null) = useAuthContext();

  useEffect(() => {
    if (loginCheck) {
      navigate('/');
    }
  }, [loginCheck]);

  //console.log("state : " + pathname);
  console.log("LoginComponent start");

  // e:any 타입 바꿔야함 again
  const onLogin = (e: any) => {
    console.log("onLogin start");
    console.log("result onloing 전: " + result);
    authLogin.login(e.target.textContent);
    console.log("result onloing 후: " + result);
    console.log("onLogin end");
  }

  // 처리하거나 지우기 again
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
      {loding &&
      <ul>
          <li><button onClick={() => authLogin.login('Google')}>Google</button></li>
          <li><button onClick={() => authLogin.login('Github')}>Github</button></li>
      </ul>
      }

      {!loding && <h3>LODING...</h3>}
    </>
  )
}