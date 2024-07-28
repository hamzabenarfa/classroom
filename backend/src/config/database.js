const mongoose = require("mongoose");

const connectDatabase = async () => {
  const uri = process.env.MONGODB_URI;
  
  if (!uri) {
    console.error("MONGODB_URI is not defined in .env file");
    process.exit(1);
  }
  
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 50000, // 50 seconds timeout
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};

module.exports = { connectDatabase };
