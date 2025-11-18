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

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />} />
      <Route path="/hair-removal/*" element={<HairRemovalPage />} />
      <Route path="/pigment/*" element={<PigmentPage />} />
      <Route path="/tattoo/*" element={<TattooPage />} />
      <Route path="/acne/*" element={<AcnePage />} />
      <Route path="/lifting/*" element={<LiftingPage />} />
      <Route path="/care/*" element={<CarePage />} />
    </>
  )
);
