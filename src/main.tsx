import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const App = React.lazy(() => import('./App'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>error</div>,
  },
  {
    path: '/other',
    element: <div>other</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
