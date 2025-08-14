import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { lazy } from 'react';

const MainPage = lazy(() => import('./page/mainPage/MainPage'));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<MainPage />} />
    </>
  )
);
