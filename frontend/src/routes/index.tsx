import { RouteObject } from "react-router";
import authRoutes from "./authRoutes";
import studentRoutes from "./studentRoutes";
import teacherRoutes from "./teacherRoutes";

const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      ...authRoutes,
      {
        path: "teacher",
        //element: <ProtectedRoute roleRequired="teacher" />,
        children: teacherRoutes,
      },
      {
        path: "student",
        //element: <ProtectedRoute roleRequired="student" />,
        children: studentRoutes,
      },
    ],
  },
];

export default routes;
