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
      <div className='m-10 h-full'>
        <section className='text-center h-full flex-col'>
          <h1 className='font-bold text-5xl'>LOGIN</h1>
          <br />
          <div className='mt-20'>
            <div className="flex-col">
              <Button className="mb-3 p-4 w-[300px] text-2xl font-semibold flex items-center justify-center m-auto  border-2" variant="primary" size="lg" onClick={() => authLogin.login('Google')}>Google</Button>
              {' '}
              <Button className="mb-3 p-4 w-[300px] text-2xl font-semibold flex items-center justify-center m-auto  border-2" variant="danger" size="lg" onClick={() => authLogin.login('Github')}>Github</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}