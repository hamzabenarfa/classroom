import { useState } from "react";
import { Button } from "@/components/ui/button";
import axiosInstance from "@/lib/axios-instance";
import Toast from "react-hot-toast";

interface AddClassroomProps {
  setUpdateTrigger: React.Dispatch<React.SetStateAction<number>>;
}

const AddClassroom = ({ setUpdateTrigger }: AddClassroomProps) => {
  const [classroomName, setClassroomName] = useState("");

  const createClassroom = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const response = await axiosInstance.post("/classroom", {
        name: classroomName,
      });
      setUpdateTrigger((prev) => prev + 1);
      Toast.success(response.data.message);
    } catch (error) {
      Toast.error(error.response.data.message);
    }
  };

  return (
    <form
      onSubmit={createClassroom}
      className="border p-4 rounded-xl flex items-center justify-between"
    >
      <input
        type="text"
        className="w-full outline-none"
        placeholder="Create classroom"
        onChange={(e) => setClassroomName(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddClassroom;
