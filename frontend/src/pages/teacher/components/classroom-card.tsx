import Toast from "react-hot-toast";
import { Copy, EllipsisVertical } from "lucide-react";
import { Classroom } from "@/types/classroom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ClassRoomCard = ({ classroom }: { classroom: Classroom }) => {
  const handleCopyClick = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        Toast.success("Link copied to clipboard!");
      })
      .catch((err) => {
        Toast.error("Failed to copy link to clipboard", err);
      });
  };
  return (
    <div
      key={classroom._id}
      className="bg-slate-50 shadow-sm p-4 rounded-lg w-96 space-y-8"
    >
      <div className="flex items-center justify-between">
        <Link to={`/teacher/classroom/${classroom._id}`} className=" ">
          <h2 className="text-lg font-semibold ">
            {classroom.name.length>30 ? classroom.name.substring(0, 28)+'...' : classroom.name}
          </h2>
        </Link>
        <Button variant="ghost" size="icon">
          <EllipsisVertical />
        </Button>
      </div>
      <p
        onClick={() => handleCopyClick(classroom.joinKey)}
        className="flex items-center gap-2 text-sm whitespace-pre-line break-words cursor-pointer"
      >
        {classroom.joinKey} <Copy />
      </p>
    </div>
  );
};

export default ClassRoomCard;
