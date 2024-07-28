const mongoose = require("mongoose");

const classRoomMembersSchema = new mongoose.Schema({
  classRoomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "classRoom",
  },
  memberId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("classRoomMembers", classRoomMembersSchema);
