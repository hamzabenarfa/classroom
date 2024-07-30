import { Outlet } from "react-router-dom";
import NavbarTeacher from "./components/navbar";
import Sidebar from "./components/sidebar";

const Teacher = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <NavbarTeacher  />
        <main className="flex-1 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Teacher;
