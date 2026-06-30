import { NextRequest, NextResponse } from "next/server";
import mongoose, { Schema, models, model } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(MONGODB_URI);
}

const NewsSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, default: "" },
  },
  { timestamps: true }
);

const News = models.News || model("News", NewsSchema);

export async function GET() {
  try {
    await connectDB();
    const news = await News.find().sort({ createdAt: -1 });
    return NextResponse.json(news);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch news" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const { title, description, content, imageUrl } = await request.json();

    if (!title || !description || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const news = await News.create({ title, description, content, imageUrl });
    return NextResponse.json(news, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save news" }, { status: 500 });
  }
}