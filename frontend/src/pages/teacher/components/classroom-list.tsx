import { useEffect, useState } from "react";
import { Classroom } from "@/types/classroom";
import axiosInstance from "@/lib/axios-instance";
import ClassRoomCard from "./classroom-card";
import AddClassroom from "./add-classroom";

const ClassRoomList = () => {
  const [myClassrooms, setMyClassrooms] = useState<Classroom[]>([]);
  const [updateTrigger, setUpdateTrigger] = useState(0); 
  useEffect(() => {
    fetchClassroom();
  }, [updateTrigger]);

  const fetchClassroom = async () => {
    try {
      const response = await axiosInstance("/classroom/myclassrooms");
      setMyClassrooms(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className=" space-y-4">
      <AddClassroom setUpdateTrigger={setUpdateTrigger} />
      <div className="flex flex-wrap gap-4">
        {myClassrooms.map((classroom: Classroom) => (
          <ClassRoomCard classroom={classroom} />
        ))}
      </div>
    </div>
  );
};

export default ClassRoomList;
