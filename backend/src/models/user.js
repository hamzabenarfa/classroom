const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: { 
      type: String, 
      enum: ['student', 'admin', 'teacher'], 
      default: 'student' 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User",userSchema)