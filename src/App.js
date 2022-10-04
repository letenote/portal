import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Layout = lazy(() => import('component/Layout'));
const Login = lazy(() => import('container/login/Login'));
const Protected = lazy(() => import('container/Protected'));
const RequireAuth = lazy(() => import('component/RequireAuth'));
const Page404 = lazy(() => import('container/Page404'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <React.Suspense fallback={<>...</>}>
                  {/*<RequireAuth>*/}
                  <Login />
                  {/*</RequireAuth>*/}
                </React.Suspense>
              }
            />
            <Route
              path="protected"
              element={
                <React.Suspense fallback={<>...</>}>
                  <RequireAuth>
                    <Protected />
                  </RequireAuth>
                </React.Suspense>
              }
            />
            <Route
              path="*"
              element={
                <React.Suspense fallback={<>...</>}>
                  <RequireAuth>
                    <Page404 />
                  </RequireAuth>
                </React.Suspense>
              }
            />
            {/*<Route*/}
            {/*  path="login"*/}
            {/*  element={*/}
            {/*    <React.Suspense fallback={<>...</>}>*/}
            {/*      <Login />*/}
            {/*    </React.Suspense>*/}
            {/*  }*/}
            {/*/>*/}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default React.memo(App, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});
