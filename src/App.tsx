import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import AuthProvider from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Header />
      <Outlet />
    </AuthProvider>
  );
}

