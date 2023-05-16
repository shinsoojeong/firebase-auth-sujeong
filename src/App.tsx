import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import { useAuthContext } from './context/AuthContext';
import AuthProvider from './context/AuthContext';

export default function App() {
  const userInfo = useAuthContext();
  console.log("로그인이 아닌 경우 null값 출력 : " + userInfo);
  return (
    <AuthProvider>
      <Header />
      <Outlet />
    </AuthProvider>
  );
}

