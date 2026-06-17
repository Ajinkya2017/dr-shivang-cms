"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/admin/dashboard");
      router.refresh();
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f0f5f1" }}>
      <div style={{ background: "white", padding: "50px", borderRadius: "20px", boxShadow: "0 20px 60px rgba(8,59,44,0.1)", width: "100%", maxWidth: "450px" }}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{ color: "#083b2c", fontSize: "32px", fontFamily: "Georgia, serif", marginBottom: "10px" }}>CMS Login</h1>
          <p style={{ color: "#667085" }}>Secure portal for Dr. Shivang</p>
        </div>

        {error && (
          <div style={{ background: "#fee2e2", color: "#b91c1c", padding: "12px", borderRadius: "8px", marginBottom: "20px", textAlign: "center", fontSize: "14px" }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <label style={{ display: "block", marginBottom: "8px", color: "#374151", fontWeight: 500 }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #d1d5db", fontSize: "16px" }}
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "8px", color: "#374151", fontWeight: 500 }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "1px solid #d1d5db", fontSize: "16px" }}
            />
          </div>
          <button
            type="submit"
            style={{ background: "#083b2c", color: "white", padding: "16px", borderRadius: "10px", border: "none", fontSize: "16px", fontWeight: 600, cursor: "pointer", marginTop: "10px" }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}