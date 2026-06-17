"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Trash2, ExternalLink } from "lucide-react";

export default function ArticlesManagementPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch articles from the database when the page loads
  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await fetch("/api/articles");
      const data = await res.json();
      setArticles(data);
    } catch (error) {
      console.error("Failed to load articles:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // The completed delete function with the live network request
  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this article? This cannot be undone.")) return;

    try {
      const response = await fetch(`/api/articles/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to delete the article");
      }

      // If successfully deleted from MongoDB, remove it from the visual screen state instantly
      setArticles((prev) => prev.filter((article) => article._id !== id));
      alert("🗑️ Article successfully removed!");
    } catch (error: any) {
      alert(`⚠️ Error: ${error.message}`);
    }
  };

  return (
    <div>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
        <div>
          <h1 style={{ color: "#111827", fontSize: "32px", margin: "0 0 8px 0" }}>Articles & Publications</h1>
          <p style={{ color: "#6b7280", margin: 0 }}>Manage your published research and healthcare insights.</p>
        </div>
        {/* UPDATED LINK HERE */}
        <Link 
          href="/admin/create" 
          style={{ display: "flex", alignItems: "center", gap: "8px", background: "#083b2c", color: "white", padding: "12px 24px", borderRadius: "8px", textDecoration: "none", fontWeight: 600 }}
        >
          <Plus size={20} />
          Write New Article
        </Link>
      </header>

      <div style={{ background: "white", borderRadius: "16px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)", border: "1px solid #f3f4f6", overflow: "hidden" }}>
        {isLoading ? (
          <div style={{ padding: "40px", textAlign: "center", color: "#6b7280" }}>Loading articles...</div>
        ) : articles.length === 0 ? (
          <div style={{ padding: "60px 20px", textAlign: "center", color: "#6b7280" }}>
            <p style={{ fontSize: "18px", marginBottom: "16px" }}>No articles published yet.</p>
            {/* UPDATED LINK HERE */}
            <Link href="/admin/create" style={{ color: "#c59b3b", textDecoration: "none", fontWeight: 600 }}>
              Click here to write your first article &rarr;
            </Link>
          </div>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
                <th style={{ padding: "16px 24px", color: "#374151", fontWeight: 600, fontSize: "14px" }}>Article Title</th>
                <th style={{ padding: "16px 24px", color: "#374151", fontWeight: 600, fontSize: "14px" }}>Published Date</th>
                <th style={{ padding: "16px 24px", color: "#374151", fontWeight: 600, fontSize: "14px", textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article._id} style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "16px 24px" }}>
                    <p style={{ margin: "0 0 4px 0", fontWeight: 600, color: "#111827" }}>{article.title}</p>
                    <p style={{ margin: 0, fontSize: "13px", color: "#6b7280", maxWidth: "400px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {article.description}
                    </p>
                  </td>
                  <td style={{ padding: "16px 24px", color: "#6b7280", fontSize: "14px" }}>
                    {new Date(article.createdAt).toLocaleDateString()}
                  </td>
                  <td style={{ padding: "16px 24px", textAlign: "right" }}>
                    <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
                      <button style={{ background: "transparent", border: "none", color: "#6b7280", cursor: "pointer" }} title="View on Live Site">
                        <ExternalLink size={18} />
                      </button>
                      <button onClick={() => handleDelete(article._id)} style={{ background: "transparent", border: "none", color: "#ef4444", cursor: "pointer" }} title="Delete Article">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}