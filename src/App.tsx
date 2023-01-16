import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const Home = React.lazy(() => import('@/Home'));
const ChatRoom = React.lazy(() => import('@/ChatRoom'));
const Login = React.lazy(() => import('@/Login'));

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

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
  const { t, i18n } = useTranslation();

  return (
    // <div>
    //   <button onClick={() => i18n.changeLanguage('en')}>En</button>
    //   <button onClick={() => i18n.changeLanguage('zh')}>Zh</button>
    //   <h2>{t('welcome')}</h2>
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
