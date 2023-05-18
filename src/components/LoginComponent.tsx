import { User } from 'firebase/auth';
import AuthService from '../service/Auth';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

export default function LoginComponent() {
  const authLogin = new AuthService();
  const loginCheck: (User | null) = useAuthContext();

  const navigate = useNavigate();
  const location = useLocation();
  const redirectUrl = new URLSearchParams(location.search).get('redirectUrl') || '/';


  useEffect(() => {
    if (loginCheck) {
      navigate(redirectUrl);
    }
  }, [loginCheck]);

  return (
    <>  
      <div className='container align-items-center justify-content-center'>
        <div className='text-center flex-col custom'>
          <h1 className='font-bold text-5xl'>LOGIN</h1>
          <br />
          <div className="d-grid gap-3 col-4 mx-auto">
            <Button className="btn btn-primary btn-block" variant="light" size="lg" onClick={() => authLogin.login('Google')}>
              Google</Button>
            <Button className="btn btn-primary btn-block" variant="light" size="lg" onClick={() => authLogin.login('Github')}>
              Github</Button>
          </div>
        </div>
      </div>
    </>
  )
}