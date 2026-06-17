"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import "react-quill-new/dist/quill.snow.css"; 

const ReactQuill = dynamic(() => import("react-quill-new"), { 
  ssr: false,
  loading: () => <p style={{ color: "#667085" }}>Loading editor...</p>,
});

export default function CreateArticlePage() {
  const router = useRouter();
  const [status, setStatus] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Uploading image to Cloudinary...");
    
    try {
      const formData = new FormData(e.currentTarget);
      let finalImageUrl = "";

      // 1. If Dr. Shivang picked a photo, upload it directly to Cloudinary first
      if (selectedImage) {
        const cloudinaryData = new FormData();
        cloudinaryData.append("file", selectedImage);
        cloudinaryData.append(
          "upload_preset", 
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || ""
        );

        const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
        const cloudinaryResponse = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: "POST",
            body: cloudinaryData,
          }
        );

        if (!cloudinaryResponse.ok) {
          throw new Error("Image upload failed. Check Cloudinary settings.");
        }

        const cloudinaryResult = await cloudinaryResponse.json();
        finalImageUrl = cloudinaryResult.secure_url; // This is our secure web link!
      }

      setStatus("Saving article data to MongoDB...");

      // 2. Build the article packet using the live Cloudinary URL link
      const newArticle = {
        title: formData.get("title"),
        description: formData.get("description"),
        imageUrl: finalImageUrl, 
        content: content, 
      };

      // 3. Send to MongoDB Bridge
      const response = await fetch("/api/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newArticle),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("✅ Article published successfully!");
        router.refresh(); 
        setTimeout(() => {
          router.push("/admin/articles");
        }, 1500);
      } else {
        setStatus(`❌ Failed to publish: ${data.error || "Please check connection."}`);
        setIsSubmitting(false);
      }
    } catch (error: any) {
      console.error("Publishing Error:", error);
      setStatus(`❌ Error: ${error.message || "Failed to process request."}`);
      setIsSubmitting(false);
    }
  };

  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", padding: "60px 20px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <div>
            <h1 style={{ fontSize: "32px", color: "#083b2c", margin: "0 0 8px 0" }}>Create New Article</h1>
            <p style={{ color: "#667085", margin: 0 }}>This will instantly publish to the Knowledge & Insights page.</p>
          </div>
          <button onClick={() => router.back()} style={{ background: "none", border: "none", color: "#c59b3b", fontSize: "16px", fontWeight: 600, cursor: "pointer" }}>
            ← Back to Dashboard
          </button>
        </header>

        <form 
          onSubmit={handleSubmit}
          style={{ background: "white", padding: "40px", borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}
        >
          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", fontWeight: 700, color: "#374151", marginBottom: "10px" }}>Article Title</label>
            <input 
              type="text" 
              name="title"
              required
              placeholder="e.g., Holistic Healthcare Approaches in Modern India"
              style={{ width: "100%", padding: "16px", borderRadius: "12px", border: "1px solid #d1d5db", fontSize: "16px" }}
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", fontWeight: 700, color: "#374151", marginBottom: "10px" }}>Short Description</label>
            <input 
              type="text" 
              name="description"
              required
              maxLength={120}
              placeholder="A quick 1-2 sentence summary..."
              style={{ width: "100%", padding: "16px", borderRadius: "12px", border: "1px solid #d1d5db", fontSize: "16px" }}
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", fontWeight: 700, color: "#374151", marginBottom: "10px" }}>Cover Image (Optional)</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={handleFileChange}
              style={{ width: "100%", padding: "14px", borderRadius: "12px", border: "1px solid #d1d5db", fontSize: "16px", background: "#f9fafb" }}
            />
          </div>

          <div style={{ marginBottom: "35px" }}>
            <label style={{ display: "block", fontWeight: 700, color: "#374151", marginBottom: "10px" }}>Full Article Text</label>
            <div style={{ background: "white", borderRadius: "12px", overflow: "hidden", border: "1px solid #d1d5db" }}>
              <ReactQuill 
                theme="snow" 
                value={content} 
                onChange={setContent} 
                style={{ height: "300px", border: "none" }}
              />
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "50px" }}>
            <button 
              type="submit" 
              disabled={isSubmitting}
              style={{ background: isSubmitting ? "#9ca3af" : "#083b2c", color: "white", border: "none", padding: "16px 40px", borderRadius: "12px", fontSize: "18px", fontWeight: 700, cursor: isSubmitting ? "not-allowed" : "pointer", transition: "background 0.2s" }}
            >
              {isSubmitting ? "Processing..." : "Publish Article"}
            </button>
            {status && (
              <span style={{ color: status.includes("✅") ? "#15803d" : "#ef4444", fontWeight: 600 }}>
                {status}
              </span>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}