import { NavLink } from "react-router-dom";

import { routes } from "../constants/routes";
import JoinClassroomModal from "./join-classroom-modal";
import { GraduationCap } from "lucide-react";

const SidebarStudent = () => {
  return (
    <div
      className={`fixed inset-0 z-30 bg-[#F9FAF5] text-black transform  transition-transform duration-200 ease-in-out md:relative md:translate-x-0 md:w-64`}
    >
      <div className="py-5 px-6 font-bold text-lg ">Teacher dashboard</div>
      <ul className="flex-1 p-6 space-y-4">
        <JoinClassroomModal />

        {routes.map(({ path, label, icon: Icon }) => (
          <li
            key={path}
            className="p-2 font-semibold text-sm flex items-center gap-2"
          >
            <Icon className="w-6 h-6" />
            <NavLink to={path}>{label}</NavLink>
          </li>
        ))}
      </ul>
      <hr />
      <ul className="flex-1 p-6 space-y-4">
        <li className="p-2 font-semibold text-sm flex items-center gap-2">
          <GraduationCap className="w-6 h-6" />
         
          Enrolled
        </li>
        <li className="px-6 font-semibold text-sm flex items-center gap-2">
          <GraduationCap className="w-6 h-6" />
         
          DSI2.1
        </li>
      </ul>
      {/* <button
        className="absolute top-4 right-4 text-green-800 md:hidden"
        
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button> */}
    </div>
  );
};

export default SidebarStudent;
