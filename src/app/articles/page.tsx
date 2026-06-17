"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ArticlesPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // This forces the browser to fetch the fresh data the second the page opens
  useEffect(() => {
    const fetchLiveArticles = async () => {
      try {
        const res = await fetch("/api/articles", { cache: "no-store" });
        const data = await res.json();
        setArticles(data);
      } catch (error) {
        console.error("Failed to load articles:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLiveArticles();
  }, []);

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg,#eef6f1 0%,#ffffff 50%,#f9f8f4 100%)", padding: "100px 20px" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <p style={{ color: "#b68a2c", fontWeight: 700, letterSpacing: "4px", marginBottom: "20px" }}>
            KNOWLEDGE & INSIGHTS
          </p>

          <h1 style={{ fontSize: "72px", color: "#0b3d2e", marginBottom: "20px", fontWeight: 800 }}>
            Articles & Publications
          </h1>

          <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "22px", lineHeight: 1.8, color: "#4b5563" }}>
            Research-driven insights and thought leadership on holistic healthcare, AYUSH integration and sustainable well-being.
          </p>
        </div>

        {/* We show a loading message for half a second while the browser grabs the data */}
        {isLoading ? (
          <div style={{ textAlign: "center", color: "#667085", fontSize: "18px" }}>
             Loading latest publications...
          </div>
        ) : articles.length === 0 ? (
           <div style={{ textAlign: "center", color: "#667085", fontSize: "18px" }}>
             No articles published yet. Check back soon!
           </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(500px,1fr))", gap: "30px" }}>
            {articles.map((article: any, index: number) => (
              <div key={article._id} style={{ background: "white", borderRadius: "28px", padding: "40px", boxShadow: "0 20px 60px rgba(0,0,0,.08)", borderLeft: "6px solid #14532d", position: "relative", overflow: "hidden" }}>
                
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(135deg,#14532d,#0f766e)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "36px", marginBottom: "25px" }}>
                  {index % 3 === 0 ? "📖" : index % 3 === 1 ? "🛡️" : "🌿"}
                </div>

                <p style={{ color: "#b68a2c", fontWeight: 700, letterSpacing: "2px", marginBottom: "12px", textTransform: "uppercase" }}>
                  {new Date(article.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>

                <h2 style={{ color: "#0b3d2e", fontSize: "40px", lineHeight: 1.2, marginBottom: "20px" }}>
                  {article.title}
                </h2>

                <div style={{ width: "60px", height: "3px", background: "#b68a2c", marginBottom: "20px" }} />

                <p style={{ color: "#4b5563", fontSize: "18px", lineHeight: 1.8, marginBottom: "30px" }}>
                  {article.description}
                </p>

                <Link 
                  href={`/articles/${article._id}`} 
                  style={{ 
                    display: "inline-block", 
                    textDecoration: "none",  
                    background: "#14532d", 
                    color: "white", 
                    border: "none", 
                    padding: "14px 28px", 
                    borderRadius: "12px", 
                    fontWeight: 600, 
                    cursor: "pointer" 
                  }}
                >
                  Read More →
                </Link>

                <div style={{ position: "absolute", right: "-20px", bottom: "-20px", fontSize: "140px", opacity: 0.06, pointerEvents: "none" }}>
                  🌿
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}