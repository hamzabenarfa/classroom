const classRoomMembers = require("../models/classroom-members");
const classRoom = require("../models/classroom");
const user = require("../models/user");

const addMember = async (req, res) => {
  const userId = req.user.id;
  const role = req.user.role;
  const classroomId = req.params.classroomId;
  const studentId = req.params.studentId;
  try {
    if (role !== "teacher") {
      return res.status(401).json({ message: "You are not a teacher" });
    }

    const myClassroom = await classRoom.findOne({
      _id: classroomId,
      ownerId: userId,
    });

    if (!myClassroom) {
      return res.status(401).json({ message: "Not your classroom" });
    }

    const userExist = await user.findOne({
      _id: studentId,
      role: "student",
    });

    if (!userExist) {
      return res.status(404).json({ message: "Student not found" });
    }

    const memberExist = await classRoomMembers.findOne({
      classRoomId: classroomId,
      memberId: studentId,
    });

    if (memberExist) {
      return res.status(409).json({ message: "Student already in classroom" });
    }

    const newMember = new classRoomMembers({
      classRoomId: classroomId,
      memberId: studentId,
    });

    const savedMember = await newMember.save();

    return res.status(201).json(savedMember);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const joinClassroom = async (req, res) => {
  const userId = req.user.id;
  const role = req.user.role;
  const joinKey = req.params.joinKey;

  try {
    if (role !== "student") {
      return res.status(401).json({ message: "You are not a student" });
    }

    const classroom = await classRoom.findOne({ joinKey });

    if (!classroom) {
      return res.status(404).json({ message: "JoinKey Invalid" });
    }

    const memberExist = await classRoomMembers.findOne({
      classRoomId: classroom._id,
      memberId: userId,
    });

    if (memberExist) {
      return res.status(409).json({ message: "You are already in classroom" });
    }

    const newMember = new classRoomMembers({
      classRoomId: classroom._id,
      memberId: userId,
    });

    const savedMember = await newMember.save();

    return res.status(201).json(savedMember);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getClassroomMembersById = async (req, res) => {
  const id = req.params.classRoomId;
  try {
    const members = await classRoomMembers
      .find({ classRoomId: id })
      .populate({ path: "memberId", select: " email _id" })
      .populate({ path: "classRoomId", select: "name _id" });
    if (members.length === 0) {
      return res.status(404).json({ message: "No members yet" });
    }
    return res.status(200).json(members);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = { addMember, joinClassroom, getClassroomMembersById };
