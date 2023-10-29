import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { setItems } from './redux/item/itemSlice';

// Styling
import './App.css';

// Page Imports
import LayoutPage from './Pages/LayoutPage';
import HomePage from './Pages/HomePage';
import ReservationPage from './Pages/ReservationPage';
import ProfilePage from './Pages/ProfilePage';
import AboutPage from './Pages/AboutPage';
import ErrorPage from './Pages/ErrorPage';


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
  const dispatch = useDispatch()
  const bosses = useSelector(state => state.items.currentBosses)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://192.168.50.171:9000/items');
      const itemsData = (await data.json()).message
      dispatch(setItems(itemsData))
    }
    fetchData()
  }, [dispatch])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
