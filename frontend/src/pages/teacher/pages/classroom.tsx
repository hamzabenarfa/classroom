import { Outlet, useParams } from "react-router-dom";
import ClassRoomNavbar from "../components/classroom-navbar";

type Params = {
  id: string;
};
const Classroom = () => {
  const { id = "" } = useParams<Params>();

  
  return (
    <div>
      <ClassRoomNavbar id={id} />
      <Outlet />
    </div>
  );
};

export default Classroom;
