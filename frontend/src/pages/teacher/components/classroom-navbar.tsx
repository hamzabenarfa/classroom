import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import {  NavLink } from "react-router-dom";

const ClassRoomNavbar = ({id}: {id:string}) => {
  return (
    <div className="flex items-center justify-between gap-2 border-b p-2 px-16">
        <nav>
        
       
        <Button  variant="ghost" size="lg">
            Agenda
        </Button>
        <Button  variant="ghost" size="lg">
            Posts
        </Button>
        <Button  variant="ghost" size="lg" asChild>
            <NavLink to={`/teacher/classroom/${id}/team`}>Team</NavLink>

        </Button>
        </nav>
        <div>
            <Button  variant="ghost" size="icon">
                <Settings />
            </Button>
        </div>
    </div>
  );
};

export default ClassRoomNavbar;
