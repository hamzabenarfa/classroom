import { Outlet } from "react-router-dom";
import SidebarStudent from "./components/sidebar";
import NavbarStudent from "./components/navbar";

const Student = () => {
  return (
    <div className="flex min-h-screen">
      <SidebarStudent />
      <div className="flex-1 flex flex-col">
        <NavbarStudent />
        <main className="flex-1 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Student;
