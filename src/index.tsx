import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './page/HomePage';
import NotFoundPage from './page/NotFoundPage';
import LoginPage from './page/LoginPage';
import EventPage from './page/EventPage';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, path: "/", element: <HomePage /> },
      { path: "/event", element: <EventPage /> },
      { path: "/login", element: <LoginPage /> },
    ]
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
