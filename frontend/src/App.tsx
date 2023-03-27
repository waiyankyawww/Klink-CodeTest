import React, { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Home from "./pages/Home";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return (
    <Fragment>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </Fragment>
  );
};

export default App;
