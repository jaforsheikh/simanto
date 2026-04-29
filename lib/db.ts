import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) return;

    const uri = process.env.MONGODB_URI;

    // ✅ important fix
    if (!uri) {
      console.warn("⚠️ MongoDB URI not found. Skipping DB connection.");
      return;
    }

    await mongoose.connect(uri);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log("❌ DB connection error:", error);
  }
};