import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { lazy, Suspense } from "react";

const MainPage = lazy(() => import("./page/mainPage/MainPage"));
const HairRemovalPage = lazy(() => import("./pages/hair-removal"));
const PigmentPage = lazy(() => import("./pages/pigment"));
const TattooPage = lazy(() => import("./pages/tattoo"));
const AcnePage = lazy(() => import("./pages/acne"));
const LiftingPage = lazy(() => import("./pages/lifting"));
const CarePage = lazy(() => import("./pages/care"));

const Loading = () => (
  <div style={{ paddingTop: "10rem", textAlign: "center" }}>Loading...</div>
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <MainPage />
          </Suspense>
        }
      />
      <Route
        path="/hair-removal/*"
        element={
          <Suspense fallback={<Loading />}>
            <HairRemovalPage />
          </Suspense>
        }
      />
      <Route
        path="/pigment/*"
        element={
          <Suspense fallback={<Loading />}>
            <PigmentPage />
          </Suspense>
        }
      />
      <Route
        path="/tattoo/*"
        element={
          <Suspense fallback={<Loading />}>
            <TattooPage />
          </Suspense>
        }
      />
      <Route
        path="/acne/*"
        element={
          <Suspense fallback={<Loading />}>
            <AcnePage />
          </Suspense>
        }
      />
      <Route
        path="/lifting/*"
        element={
          <Suspense fallback={<Loading />}>
            <LiftingPage />
          </Suspense>
        }
      />
      <Route
        path="/care/*"
        element={
          <Suspense fallback={<Loading />}>
            <CarePage />
          </Suspense>
        }
      />
    </>
  )
);
