"use client";

import React, { useState, useEffect } from "react";

// We accept latestArticles, but we will use the hardcoded exact ones to match your design!
export default function HomePage({ latestArticles }: { latestArticles?: any[] }) {
  
  // EXACT TEXT AND ICONS FROM YOUR SCREENSHOT
  const publications = [
    {
      id: "1",
      title: "Joins Board of Advisors at Gau Vishwa Vidyapeetham",
      description: "Featured in Pashudhan Praharee: Dr. Shivang Swaminarayan appointed to the prestigious Board of Advisors.",
      icon: "📰",
      link: "/articles"
    },
    {
      id: "2",
      title: "Holistic Healthcare Approaches in Modern India",
      description: "Research publication focused on advancing sustainable healthcare and AYUSH integration.",
      icon: "📖",
      link: "/articles"
    },
    {
      id: "3",
      title: "Role of AYUSH in Preventive Healthcare",
      description: "Research publication focused on advancing sustainable healthcare and AYUSH integration.",
      icon: "🛡️",
      link: "/articles"
    },
    {
      id: "4",
      title: "Integrating Traditional and Modern Medicine",
      description: "Research publication focused on advancing sustainable healthcare and AYUSH integration.",
      icon: "🌿",
      link: "/articles"
    }
  ];

  const sliderImages = [
    "/images/dr-shivang.jpg",
    "/images/dr-shivang-3.jpg",
    "/images/dr-shivang-4.jpg",
    "/images/dr-shivang-5.jpg",
    "/images/dr-shivang-7.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  return (
    <main style={{ minHeight: "100vh", background: "#fafcfb", position: "relative", overflow: "hidden", fontFamily: "system-ui, -apple-system, sans-serif", padding: "40px 20px 80px 20px" }}>
      <style>{`
        .read-more-btn { transition: background 0.2s ease; }
        .read-more-btn:hover { background: #115e45 !important; }
        .nav-link { transition: color 0.2s ease; }
        .nav-link:hover { color: #115e45 !important; }
      `}</style>

      {/* Faint leaf watermark */}
      <div style={{ position: "absolute", top: "-50px", left: "-50px", fontSize: "400px", opacity: 0.03, transform: "rotate(-20deg)", zIndex: 0, pointerEvents: "none" }}>🌿</div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        
        {/* TOP NAVBAR */}
        <nav style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "35px", marginBottom: "60px" }}>
          <a href="/about" className="nav-link" style={{ textDecoration: "none", color: "#083b2c", fontWeight: 600, fontSize: "15px" }}>About</a>
          <a href="/articles" className="nav-link" style={{ textDecoration: "none", color: "#083b2c", fontWeight: 600, fontSize: "15px" }}>Articles</a>
          <a href="/news" className="nav-link" style={{ textDecoration: "none", color: "#083b2c", fontWeight: 600, fontSize: "15px" }}>News</a>
          <a href="/contact" style={{ background: "#083b2c", color: "white", padding: "10px 24px", borderRadius: "8px", textDecoration: "none", fontWeight: 600, fontSize: "15px", boxShadow: "0 4px 6px rgba(8,59,44,0.1)" }}>Contact</a>
        </nav>

        {/* HEADER SECTION */}
        <header style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "60px", background: "#c59b3b" }} />
            <p style={{ color: "#c59b3b", letterSpacing: "3px", fontWeight: 700, fontSize: "13px", margin: 0 }}>HEALTHCARE • RESEARCH • AYUSH</p>
            <div style={{ height: "1px", width: "60px", background: "#c59b3b" }} />
          </div>
          <h1 style={{ fontSize: "56px", color: "#083b2c", margin: "0 0 20px 0", fontFamily: "Georgia, serif", fontWeight: 700 }}>Dr. Shivang Swaminarayan</h1>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "25px" }}><span style={{ color: "#c59b3b", fontSize: "20px" }}>❖</span></div>
          <p style={{ color: "#555", fontSize: "18px", lineHeight: "1.6", maxWidth: "700px", margin: "0 auto" }}>Research-driven insights and thought leadership on holistic healthcare, <br/>AYUSH integration and sustainable well-being.</p>
        </header>

        {/* IMAGE SLIDESHOW */}
        <div style={{ position: "relative", width: "100%", height: "450px", borderRadius: "24px", overflow: "hidden", marginBottom: "60px", boxShadow: "0 20px 40px rgba(8,59,44,0.1)", background: "#e2ece7" }}>
          {sliderImages.map((src, idx) => (
            <img key={idx} src={src} alt={`Dr. Shivang ${idx + 1}`} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", opacity: currentSlide === idx ? 1 : 0, transition: "opacity 1.2s ease-in-out" }} />
          ))}
          <div style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "10px" }}>
            {sliderImages.map((_, idx) => (
              <button key={idx} onClick={() => setCurrentSlide(idx)} aria-label={`Go to slide ${idx + 1}`} style={{ width: "12px", height: "12px", borderRadius: "50%", border: "none", cursor: "pointer", background: currentSlide === idx ? "#c59b3b" : "rgba(255,255,255,0.6)", transition: "background 0.3s ease", boxShadow: "0 2px 5px rgba(0,0,0,0.2)" }} />
            ))}
          </div>
        </div>

        {/* 2x2 PUBLICATION GRID (Hardcoded to guarantee it shows up) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))", gap: "30px", marginBottom: "50px" }}>
          {publications.map((pub, idx) => (
            <PublicationCard key={pub.id} pub={pub} num={idx + 1} />
          ))}
        </div>

        {/* CTA BANNER */}
        <div style={{ background: "#083b2c", borderRadius: "20px", padding: "50px 30px", textAlign: "center", color: "white", boxShadow: "0 20px 40px rgba(8,59,44,0.15)", maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", margin: "0 0 15px 0", fontFamily: "Georgia, serif" }}>Connect with Dr. Shivang</h2>
          <p style={{ color: "#d1e8df", marginBottom: "30px", fontSize: "16px", lineHeight: "1.6" }}>Healthcare collaborations, research initiatives, conferences and professional engagements.</p>
          <a href="/contact" style={{ display: "inline-block", background: "white", color: "#083b2c", textDecoration: "none", padding: "14px 36px", borderRadius: "8px", fontWeight: 700, fontSize: "16px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>Contact Now</a>
        </div>

      </div>
    </main>
  );
}

// Exactly matches the card styling in the screenshot
function PublicationCard({ pub, num }: { pub: any, num: number }) {
  return (
    <div style={{ background: "white", borderRadius: "20px", padding: "40px", position: "relative", overflow: "hidden", boxShadow: "0 10px 30px rgba(8,59,44,0.04)", border: "1px solid rgba(8,59,44,0.08)", borderLeft: "8px solid #083b2c", display: "flex", flexDirection: "column", gap: "20px", height: "100%" }}>
      {/* Faint floral background pattern */}
      <div style={{ position: "absolute", bottom: "-30px", right: "-30px", fontSize: "200px", opacity: 0.02, zIndex: 0, pointerEvents: "none" }}>🪷</div>
      
      <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "flex-start", gap: "25px", flexGrow: 1 }}>
        <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#083b2c", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", flexShrink: 0, border: "3px solid #e2ece7" }}>{pub.icon}</div>
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <p style={{ color: "#c59b3b", fontWeight: 700, fontSize: "12px", letterSpacing: "1.5px", margin: "0 0 10px 0", textTransform: "uppercase" }}>PUBLICATION #{num}</p>
          <h3 style={{ color: "#083b2c", fontSize: "24px", margin: "0 0 15px 0", fontFamily: "Georgia, serif", lineHeight: "1.4" }}>{pub.title}</h3>
          <p style={{ color: "#667085", fontSize: "14px", lineHeight: "1.7", margin: "0 0 25px 0", flexGrow: 1 }}>{pub.description}</p>
          <div style={{ marginTop: "auto" }}>
            <a href={pub.link} className="read-more-btn" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#083b2c", color: "white", textDecoration: "none", padding: "10px 20px", borderRadius: "6px", fontWeight: 600, fontSize: "13px" }}>Read More <span style={{ fontSize: "16px" }}>→</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}