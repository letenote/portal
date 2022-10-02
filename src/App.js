import React from 'react';
import 'App.css';
import {Routes, Route} from "react-router-dom";

const Layout = React.lazy(() => import('component/Layout'));
const Login = React.lazy(() => import('container/Login'));
const Protected = React.lazy(() => import('container/Protected'));
const RequireAuth = React.lazy(() => import('component/RequireAuth'));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <RequireAuth>
                <Protected />
              </RequireAuth>
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
            path="login"
            element={
              <React.Suspense fallback={<>...</>}>
                <Login />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default React.memo(App,(prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});
