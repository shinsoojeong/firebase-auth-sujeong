import { Link } from 'react-router-dom';
import { User } from '@firebase/auth';


export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">HOME</Link>
        <br />
        <Link to="/event">EVENT</Link>
        <br />
        <Link to="/login">LOGIN</Link>
      </nav>
    </header>
  );
}
