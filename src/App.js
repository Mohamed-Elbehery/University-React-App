import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Courses, Blog, Contact } from "./pages";
import LazyLoad from "./components/LazyLoad/LazyLoad";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LazyLoad />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<LazyLoad />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/courses"
          element={
            <Suspense fallback={<LazyLoad />}>
              <Courses />
            </Suspense>
          }
        />
        <Route
          path="blog"
          element={
            <Suspense fallback={<LazyLoad />}>
              <Blog />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<LazyLoad />}>
              <Contact />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
