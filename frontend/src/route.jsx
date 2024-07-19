import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import FormAdd from "./pages/FormAdd";
import Register from "./pages/Register";
import FormEdit from "./pages/FormEdit";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => {
      if (!localStorage.email_login) {
        return redirect("/login");
      }
      return null;
    },
  },
  {
    path: "login",
    element: <Login />,
    loader: () => {
      if (localStorage.email_login) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/add-task",
    element: <FormAdd />,
    loader: () => {
      if (!localStorage.email_login) {
        return redirect("/login");
      }
      return null;
    },
  },
  {
    path: "/edit-task/:id",
    element: <FormEdit />,
    loader: () => {
      if (!localStorage.email_login) {
        return redirect("/login");
      }
      return null;
    },
  },
]);

export default route;
