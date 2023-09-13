import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LayoutPage from './Pages/LayoutPage';
import HomePage from './Pages/HomePage';
import ReservationPage from './Pages/ReservationPage';
import ProfilePage from './Pages/ProfilePage';
import AboutPage from './Pages/AboutPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage/>,
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'reservation', element: <ReservationPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'profile', element: <ProfilePage /> },
    ]
  },
])

function App() {
  return (
    <>
      <div>APP</div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
