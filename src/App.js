import React, { lazy } from 'react';
import { Routes, Route } from "react-router-dom";

const Layout = lazy(() => import('component/Layout'));
const Login = lazy(() => import('container/login/Login'));
const Protected = lazy(() => import('container/Protected'));
const RequireAuth = lazy(() => import('component/RequireAuth'));
const Page404 = lazy(() => import('container/Page404'));

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <React.Suspense fallback={<>...</>}>
                  <RequireAuth>
                    <Protected />
                  </RequireAuth>
                </React.Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <React.Suspense fallback={<>...</>}>
                    <Login />
                </React.Suspense>
              }
            />
            <Route
              path="*"
              element={
                <RequireAuth>
                <React.Suspense fallback={<>...</>}>
                    <Page404 />
                </React.Suspense>
                </RequireAuth>
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
    </div>
  );
}

export default React.memo(App, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});
