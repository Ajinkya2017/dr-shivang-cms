import { connectDB } from "@/lib/mongodb";
import Article from "@/models/Article";
import Link from "next/link";

// Force fresh data so it never caches an old version of the article
export const dynamic = "force-dynamic";

// Next.js update: params is now a Promise!
export default async function ArticleReadingPage({ params }: { params: Promise<{ id: string }> }) {
  // 1. Await the params FIRST to satisfy Next.js's strict speed rules
  const resolvedParams = await params;

  // 2. Connect to MongoDB
  await connectDB();
  
  try {
    // 3. Search for the exact article using the awaited ID
    const article = await Article.findById(resolvedParams.id).lean();

    // 4. If the ID doesn't exist, show the error
    if (!article) {
      return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <h1 style={{ color: "#0b3d2e", fontSize: "40px", marginBottom: "20px" }}>Article Not Found</h1>
          <Link href="/articles" style={{ color: "#c59b3b", fontWeight: 700, textDecoration: "none" }}>← Return to Articles</Link>
        </div>
      );
    }

    // 5. If it DOES exist, render the beautiful reading experience!
    return (
      <main style={{ minHeight: "100vh", background: "#fcfbf8", padding: "100px 20px" }}>
        <article style={{ maxWidth: "800px", margin: "0 auto", background: "white", padding: "60px", borderRadius: "24px", boxShadow: "0 20px 60px rgba(0,0,0,.05)" }}>
          
          <Link href="/articles" style={{ color: "#c59b3b", fontWeight: 700, textDecoration: "none", display: "inline-block", marginBottom: "40px" }}>
            ← Back to All Publications
          </Link>

          <header style={{ marginBottom: "50px" }}>
            <p style={{ color: "#14532d", fontWeight: 600, letterSpacing: "2px", marginBottom: "16px", textTransform: "uppercase" }}>
              {new Date(article.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <h1 style={{ fontSize: "48px", color: "#0b3d2e", lineHeight: 1.2, marginBottom: "24px", fontWeight: 800 }}>
              {article.title}
            </h1>
            <p style={{ fontSize: "22px", color: "#667085", lineHeight: 1.6, fontStyle: "italic" }}>
              {article.description}
            </p>
          </header>

          {article.imageUrl && (
            <div style={{ width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "50px", background: "#f3f4f6" }}>
              <img src={article.imageUrl} alt={article.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          )}

          {/* This dangerouslySetInnerHTML is required to render the rich text (bold, italics, lists) we saved from React Quill! */}
          <div 
            className="article-content"
            style={{ fontSize: "18px", lineHeight: 1.8, color: "#374151" }}
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />

        </article>
      </main>
    );
  } catch (error) {
    // If the ID format is completely invalid, it falls back here safely
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ color: "#0b3d2e", fontSize: "40px", marginBottom: "20px" }}>Invalid Article Link</h1>
        <Link href="/articles" style={{ color: "#c59b3b", fontWeight: 700, textDecoration: "none" }}>← Return to Articles</Link>
      </div>
    );
  }
}