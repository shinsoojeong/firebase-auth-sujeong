import { User } from '@firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';

export default function EventPage() {
  const navigate = useNavigate();
  const loginCheck: (User | null) = useAuthContext();

  const pathname: string = useLocation().pathname;
  
  useEffect(() => {
    if (!loginCheck) {
      navigate("/login", {
        state: {
          redirectUrl: pathname
        }
      });
    }
  }, [loginCheck]);
  

  return (
    <div>
      event event
      <h3>ID: {loginCheck?.uid}</h3>
      <h3>email: {loginCheck?.email}</h3>

    </div>
  )
}