const classRoom = require("../models/classroom");

const createClassroom = async (req, res) => {
  const userId = req.user.id;
  const role = req.user.role;
  const { name } = req.body;
  try {
    if (role !== "teacher") {
      return res
        .status(401)
        .json({ message: "You are not authorized to create a classroom" });
    }
    
    const existingClassroom = await classRoom.findOne({ name , ownerId: userId });
    if (existingClassroom) {
      return res
        .status(400)
        .json({ message: "Classroom with this name already exists" });
    }

    const joinKey = Math.random().toString(36).substring(2, 8).toUpperCase();

    const newClassRoom = new classRoom({
      ownerId: userId,
      name,
      joinKey,
    });
    const savedClassRoom = await newClassRoom.save();
    return res.status(201).json({ message: "Classroom created", savedClassRoom });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getMyClassrooms = async (req, res) => {
  const userId = req.user.id;
  const role = req.user.role;
  try {
    if (role !== "teacher") {
      return res
        .status(401)
        .json({ message: "You are not authorized to view classrooms" });
    }
    const classrooms = await classRoom.find({ ownerId: userId });
    return res.status(200).json(classrooms);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {createClassroom,getMyClassrooms};
