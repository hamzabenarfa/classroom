import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import { RouteObject } from "react-router";

const authRoutes: RouteObject[] = [
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "*", element: <Login /> },
];

export default authRoutes;
