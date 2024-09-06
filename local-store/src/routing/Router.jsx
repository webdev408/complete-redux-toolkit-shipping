import { createBrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Product from '../components/Product';
import Cart from '../components/Cart';
import NotFound from './NotFound';
import Login from '../authenticate/Login';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: (
          <ProtectedRoute>
            {' '}
            <Product />
          </ProtectedRoute>
        ),
        index: true,
      },
      {
        path: '/cart',
        element: (
          <ProtectedRoute>
            {' '}
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default router;
