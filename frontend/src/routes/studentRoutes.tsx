import Student from "@/pages/student";
import { RouteObject } from "react-router";

const studentRoutes: RouteObject[] = [
  {
    path: "",
    element: <Student />,
    children: [{ path: "", element: <h1>dashboard</h1> }],
  },
];

export default studentRoutes;
