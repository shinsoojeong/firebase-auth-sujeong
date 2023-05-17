import { Link, useLocation } from 'react-router-dom';
import { User } from '@firebase/auth';
import { useAuthContext } from '../context/AuthContext';
import AuthService from '../service/Auth';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  const loginCheck: (User | null) = useAuthContext();
  const authLogin = new AuthService();
  const pathname: string = useLocation().pathname;

  if (pathname == '/login') {
    return <></>;
  }

  return (
    <Navbar className="justify-content-end" bg="light" expand="lg">
      <Nav>
        <Nav.Link href="/">HOME</Nav.Link>
        <Nav.Link href="/event">EVENT</Nav.Link>
        {!loginCheck && <Nav.Link href="/login">LOGIN</Nav.Link>}
        {loginCheck && <Nav.Link href="/" onClick={() => authLogin.logout()}>LOGOUT</Nav.Link>}
      </Nav>
    </Navbar>
  );
}
