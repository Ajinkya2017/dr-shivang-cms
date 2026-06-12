import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

export async function connectDB() {
  try {
    console.log("MONGO URI EXISTS:", !!MONGODB_URI);

    await mongoose.connect(MONGODB_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MONGO ERROR:", error);
    throw error;
  }
}