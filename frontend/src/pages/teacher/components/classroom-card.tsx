import Toast from "react-hot-toast";
import { Copy } from "lucide-react";
import { Classroom } from "@/types/classroom";

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
      className="bg-slate-50 shadow-sm p-4 rounded-lg w-80"
    >
      <h2 className="text-lg font-semibold whitespace-pre-line break-words">
        {classroom.name}
      </h2>
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
