import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const App = React.lazy(() => import('@/App'));
const Home = React.lazy(() => import('@/Home'));
const ChatRoom = React.lazy(() => import('@/ChatRoom'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <ChatRoom />,
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
