import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LayoutPage from './Pages/LayoutPage';
import HomePage from './Pages/HomePage';
import ReservationPage from './Pages/ReservationPage';
import ProfilePage from './Pages/ProfilePage';
import AboutPage from './Pages/AboutPage';
import ErrorPage from './Pages/ErrorPage';
import { useEffect } from 'react';
import { fetchData } from './data';



const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage/>,
    errorElement: <ErrorPage/>,
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'reservation', element: <ReservationPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'profile', element: <ProfilePage /> },
    ]
  },
])


function App() {

  useEffect(() => {
    const items = fetchData();
  })

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
