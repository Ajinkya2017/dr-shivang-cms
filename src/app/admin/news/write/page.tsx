"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { CldUploadWidget, CloudinaryUploadWidgetResults } from "next-cloudinary";
import type ReactQuillType from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false }) as typeof ReactQuillType;

export default function WriteNewsPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newUpdate = { title, description, content, imageUrl };

    try {
      const response = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUpdate),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong while publishing");
      }

      alert("🎉 News update published successfully!");
      router.push("/admin/news");
      router.refresh();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Unknown error";
      alert(`⚠️ Error: ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUploadSuccess = (result: CloudinaryUploadWidgetResults) => {
    if (result.info && typeof result.info === "object" && "secure_url" in result.info) {
      setImageUrl(result.info.secure_url as string);
    }
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", paddingBottom: "50px" }}>
      <header style={{ marginBottom: "30px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 style={{ color: "#111827", fontSize: "32px", margin: "0 0 8px 0" }}>Post News Update</h1>
          <p style={{ color: "#6b7280", margin: 0 }}>Share announcements and latest updates with patients.</p>
        </div>
        <button
          onClick={() => router.back()}
          style={{ padding: "10px 20px", borderRadius: "8px", border: "1px solid #d1d5db", background: "white", cursor: "pointer", fontWeight: 600 }}
        >
          Cancel
        </button>
      </header>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div style={{ background: "white", padding: "30px", borderRadius: "16px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)", border: "1px solid #f3f4f6" }}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: 600, color: "#374151" }}>Headline</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Free Health Camp this Weekend"
              required
              style={{ width: "100%", padding: "14px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "16px" }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: 600, color: "#374151" }}>Short Summary</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="A brief summary..."
              required
              rows={3}
              style={{ width: "100%", padding: "14px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "16px", resize: "vertical" }}
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: 600, color: "#374151" }}>Featured Image (Optional)</label>
            {imageUrl ? (
              <div style={{ position: "relative", width: "100%", height: "250px", borderRadius: "12px", overflow: "hidden", border: "2px solid #e5e7eb" }}>
                <img src={imageUrl} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <button
                  type="button"
                  onClick={() => setImageUrl("")}
                  style={{ position: "absolute", top: "10px", right: "10px", background: "#ef4444", color: "white", border: "none", padding: "8px 16px", borderRadius: "6px", cursor: "pointer", fontWeight: 600 }}
                >
                  Remove Image
                </button>
              </div>
            ) : (
              <CldUploadWidget uploadPreset="ml_default" onSuccess={handleUploadSuccess}>
                {({ open }) => (
                  <button
                    type="button"
                    onClick={() => open()}
                    style={{ width: "100%", padding: "40px", background: "#f9fafb", border: "2px dashed #d1d5db", borderRadius: "12px", color: "#6b7280", cursor: "pointer", fontSize: "16px", fontWeight: 500 }}
                  >
                    + Click to Upload Image
                  </button>
                )}
              </CldUploadWidget>
            )}
          </div>
        </div>

        <div style={{ background: "white", padding: "30px", borderRadius: "16px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)", border: "1px solid #f3f4f6" }}>
          <label style={{ display: "block", marginBottom: "8px", fontWeight: 600, color: "#374151" }}>Full Details</label>
          <div style={{ height: "400px", marginBottom: "40px" }}>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              style={{ height: "100%" }}
              placeholder="Write the full update here..."
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{ background: "#083b2c", color: "white", padding: "18px", borderRadius: "12px", border: "none", fontSize: "18px", fontWeight: 700, cursor: isSubmitting ? "not-allowed" : "pointer", opacity: isSubmitting ? 0.7 : 1 }}
        >
          {isSubmitting ? "Publishing..." : "Publish Update"}
        </button>
      </form>
    </div>
  );
}