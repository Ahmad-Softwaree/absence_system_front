import Login from "@/pages/_root/Login";
import RootLayout from "@/pages/_root/RootLayout";
import Home from "@/pages/_user/Home";

import UserLayout from "@/pages/_user/UserLayout";
import Error from "@/pages/Error";
import NotFound from "@/pages/NotFound";
import RootRouterProvider from "@/provider/RootRouterProvider";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import AuthRouterProvider from "@/provider/AuthRouterProvider";
import Profile from "@/pages/_user/Profile";
import Employees from "@/pages/_user/Employees";
import Departments from "@/pages/_user/Departments";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <>
        {/* Root Routes */}

        <Route
          errorElement={<Error />}
          path="/"
          element={<RootRouterProvider Component={RootLayout} />}>
          <Route path="login" errorElement={<Error />} element={<Login />} />
        </Route>
      </>

      <>
        <Route
          errorElement={<Error />}
          path="/"
          element={<AuthRouterProvider Component={UserLayout} />}>
          <Route index errorElement={<Error />} element={<Home />} />
          <Route
            path="profile"
            errorElement={<Error />}
            element={<Profile />}
          />
          <Route
            path="employees"
            errorElement={<Error />}
            element={<Employees />}
          />
          <Route
            path="departments"
            errorElement={<Error />}
            element={<Departments />}
          />
        </Route>
      </>

      <Route path="*" element={<NotFound />} errorElement={<Error />} />
    </>
  )
);

export default router;
