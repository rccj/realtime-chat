import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Home = React.lazy(() => import('@/Home'));
const ChatRoom = React.lazy(() => import('@/ChatRoom'));
const Login = React.lazy(() => import('@/Login'));

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
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
