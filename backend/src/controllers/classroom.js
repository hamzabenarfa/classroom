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
    
    const joinKey = Math.random().toString(36).substring(2, 8).toUpperCase();

    const newClassRoom = new classRoom({
      ownerId: userId,
      name,
      joinKey,
    });
    const savedClassRoom = await newClassRoom.save();
    return res.status(201).json(savedClassRoom);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = createClassroom;
