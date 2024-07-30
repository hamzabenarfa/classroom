import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import Student from "@/pages/student";
import Teacher from "@/pages/teacher";
import Classroom from "@/pages/teacher/pages/classroom";
import ClassroomManagement from "@/pages/teacher/pages/classroom-management";
import ClassroomTeam from "@/pages/teacher/pages/Classroom-team";
import { RouteObject } from "react-router";

const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      { path: "login", element: <Login /> },
      { path: "/", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "teacher",
        //element: <ProtectedRoute roleRequired="teacher" />,
        children: [
          {
            path: "",
            element: <Teacher />,
            children: [
              {
                path: "classroom",
                element: <ClassroomManagement />,
              },
              {
                path: "classroom/:id",
                element: <Classroom />,
                children: [
                  {
                    path: "team",
                    element: <ClassroomTeam />,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "student",
        //element: <ProtectedRoute roleRequired="student" />,
        children: [
          {
            path: "",
            element: <Student />,
            children: [{ path: "", element: <h1>student</h1> }],
          },
        ],
      },
      { path: "*", element: <Login /> },
    ],
  },
];

export default routes;
