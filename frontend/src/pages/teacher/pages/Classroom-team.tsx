import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios-instance";
import { Button } from "@/components/ui/button";

interface ClassRoom {
  _id: string;
  name: string;
}

interface MemberId {
  _id: string;
  email: string;
}

interface Member {
  _id: string;
  classRoomId: ClassRoom;
  memberId: MemberId;
  __v: number;
}

const ClassroomTeam = () => {
  const { id } = useParams<{ id: string }>();
  const [members, setMembers] = useState<Member[]>([]);
  console.log("🚀 ~ ClassroomTeam ~ members:", members);

  useEffect(() => {
    if (id) {
      fetchMembers(id);
    }
  }, [id]);

  const fetchMembers = async (id: string) => {
    try {
      const response = await axiosInstance(
        `/classroom-members/by-classroom-id/${id}`
      );
      setMembers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className=" flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Classroom Members
          </h2>
          <Button>Add Member</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="py-3 px-6 text-left text-gray-600 font-medium">
                  Member Email
                </th>
                <th className="py-3 px-6 text-left text-gray-600 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {members &&
                members.map((member, index) => (
                  <tr
                    key={member._id}
                    className={`border-b border-gray-200 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-gray-100`}
                  >
                    <td className="py-3 px-6 text-gray-800">
                      {member.memberId.email}
                    </td>
                    <td className="py-3 px-6 text-gray-800">
                      <Button variant="destructive">Remove</Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClassroomTeam;
