import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const AboutPage = lazy(() => import("./about"));
const HomePage = lazy(() => import("./home"));
const MainPage = lazy(() => import("./main"));

export const AppRouting = () => (
  <Suspense fallback={<h1>LOADING...</h1>}>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="main" element={<MainPage />} />
    </Routes>
  </Suspense>
);
