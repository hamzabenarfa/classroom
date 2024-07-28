const mongoose = require("mongoose");

const classRoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  joinKey: {
    type: String,
    default:""
  },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

classRoomSchema.index({name:1,ownerId:1}, { unique: true });

module.exports = mongoose.model("classRoom", classRoomSchema);
