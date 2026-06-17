import { connectDB } from "@/lib/mongodb";
import Article from "@/models/Article";
import HomePage from "../components/home/HomePage";

export default async function PublicHomePage() {
  // Connect to the database
  await connectDB();

  // Fetch the 3 most recent articles you wrote in the Admin Portal
  const latestArticles = await Article.find({}).sort({ createdAt: -1 }).limit(3).lean();

  // Convert the MongoDB _id to a simple string so the Client component can read it
  const formattedArticles = latestArticles.map((article: any) => ({
    ...article,
    _id: article._id.toString(),
  }));

  // Pass the real database articles down to your custom layout!
  return <HomePage latestArticles={formattedArticles} />;
}