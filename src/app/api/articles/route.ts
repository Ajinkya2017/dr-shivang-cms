import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Article from "@/models/Article";

// Next.js 15 Strict Mode: params is a Promise
export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    // 1. Wait for the ID to arrive from the URL
    const resolvedParams = await params;
    
    // 2. Connect to MongoDB
    await connectDB();

    // 3. Find the article by its ID and permanently delete it
    const deletedArticle = await Article.findByIdAndDelete(resolvedParams.id);

    if (!deletedArticle) {
      return NextResponse.json({ error: "Article not found in database" }, { status: 404 });
    }

    // 4. Send the success signal back to the dashboard!
    return NextResponse.json({ message: "Article deleted successfully" }, { status: 200 });
    
  } catch (error: any) {
    console.error("Database Delete Error:", error);
    return NextResponse.json(
      { error: "Failed to delete article", details: error.message },
      { status: 500 }
    );
  }
}