import { User } from '@firebase/auth';
import { useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';
import Card from 'react-bootstrap/Card';

export default function EventPage() {
  const navigate = useNavigate();
  const loginCheck: (User | null) = useAuthContext();

  useEffect(() => {
    if (!loginCheck) {
      navigate('/login?redirectUrl=/event');
    }
  }, [loginCheck]);

  return (
    <>
      <div className='container min-vh-100 d-flex align-items-center justify-content-center'>
        <section className='text-center h-full flex-col'>
          <h3 className='font-bold text-5xl'>Event Page</h3>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              {loginCheck?.photoURL &&
                <Card.Img variant="top" src={loginCheck?.photoURL} />}
              <Card.Title>User Info</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>{loginCheck?.email}</Card.Subtitle>
            </Card.Body>
          </Card>
        </section>
      </div>
    </>
  )
}