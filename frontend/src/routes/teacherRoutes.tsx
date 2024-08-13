import Teacher from "@/pages/teacher";
import Classroom from "@/pages/teacher/pages/classroom";
import ClassroomManagement from "@/pages/teacher/pages/classroom-management";
import ClassroomTeam from "@/pages/teacher/pages/Classroom-team";
import { RouteObject } from "react-router";

const teacherRoutes: RouteObject[] = [
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
];

export default teacherRoutes;
