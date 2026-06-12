import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Article from "@/models/Article";

export async function GET() {
  await connectDB();

  const articles = await Article.find().sort({
    createdAt: -1,
  });

  return NextResponse.json(articles);
}

export async function POST(request: Request) {
  await connectDB();

  const body = await request.json();

  const article = await Article.create({
    title: body.title,
    category: body.category,
    content: body.content,
  });

  return NextResponse.json(article);
}