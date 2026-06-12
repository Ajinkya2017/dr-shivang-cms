import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import News from "@/models/News";

export async function GET() {
  await connectDB();

  const news = await News.find().sort({
    createdAt: -1,
  });

  return NextResponse.json(news);
}

export async function POST(request: Request) {
  await connectDB();

  const body = await request.json();

  const news = await News.create({
    title: body.title,
    description: body.description,
  });

  return NextResponse.json(news);
}