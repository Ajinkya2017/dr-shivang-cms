"use client";

import React, { useState, useEffect } from "react";

export default function HomePage() {
  const publications = [
    {
      id: "1",
      title: "Holistic Healthcare Approaches in Modern India",
      desc: "Research publication focused on advancing sustainable healthcare and AYUSH integration.",
      icon: "📖",
      link: "/articles",
    },
    {
      id: "2",
      title: "Role of AYUSH in Preventive Healthcare",
      desc: "Research publication focused on advancing sustainable healthcare and AYUSH integration.",
      icon: "🛡️",
      link: "/articles",
    },
    {
      id: "3",
      title: "Integrating Traditional and Modern Medicine",
      desc: "Research publication focused on advancing sustainable healthcare and AYUSH integration.",
      icon: "🌿",
      link: "/articles",
    },
  ];

  // List of images from your public/images folder
  const sliderImages = [
    "/images/dr-shivang.jpg",
    "/images/dr-shivang-3.jpg",
    "/images/dr-shivang-4.jpg",
    "/images/dr-shivang-5.jpg",
    "/images/dr-shivang-7.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play the slideshow every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f0f5f1 0%, #ffffff 50%, #fdfcf8 100%)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: "40px 20px 60px", // Adjusted top padding to accommodate the new nav
      }}
    >
      {/* CSS For Hover Effects */}
      <style>{`
        .top-nav-link {
          position: relative;
          color: #083b2c;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        .top-nav-link:hover {
          background: rgba(8, 59, 44, 0.05);
          color: #115e45;
        }
        .read-more-btn {
          transition: background 0.2s ease;
        }
        .read-more-btn:hover {
          background: #115e45 !important;
        }
      `}</style>

      {/* BACKGROUND DECORATIONS */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          fontSize: "300px",
          opacity: 0.05,
          transform: "rotate(-30deg)",
          zIndex: 0,
        }}
      >
        🌿
      </div>

      <div style={{ maxWidth: "1300px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        
        {/* TOP RIGHT NAVIGATION */}
        <nav 
          style={{ 
            position: "absolute", 
            top: "0", 
            right: "0", 
            display: "flex", 
            gap: "10px",
            alignItems: "center",
            zIndex: 10 
          }}
        >
          <a href="/about" className="top-nav-link">About</a>
          <a href="/articles" className="top-nav-link">Articles</a>
          <a href="/news" className="top-nav-link">News</a>
          <a 
            href="/contact" 
            style={{
              background: "#083b2c",
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "16px",
              padding: "10px 24px",
              borderRadius: "12px",
              marginLeft: "10px",
              boxShadow: "0 4px 12px rgba(8,59,44,0.15)",
              transition: "transform 0.2s ease"
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            Contact
          </a>
        </nav>

        {/* HEADER SECTION */}
        <header style={{ textAlign: "center", marginBottom: "40px", paddingTop: "40px", position: "relative" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "60px", background: "#c59b3b" }} />
            <p style={{ color: "#c59b3b", letterSpacing: "3px", fontWeight: 700, fontSize: "14px", margin: 0 }}>
              HEALTHCARE • RESEARCH • AYUSH
            </p>
            <div style={{ height: "1px", width: "60px", background: "#c59b3b" }} />
          </div>

          <h1 style={{ fontSize: "64px", color: "#083b2c", margin: "0 0 20px 0", fontFamily: "Georgia, serif", fontWeight: 600 }}>
            Dr. Shivang Swaminarayan
          </h1>
          
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "25px" }}>
             <span style={{ color: "#c59b3b", fontSize: "24px" }}>❖</span>
          </div>

          <p style={{ color: "#555", fontSize: "18px", lineHeight: "1.6", maxWidth: "700px", margin: "0 auto" }}>
            Research-driven insights and thought leadership on holistic healthcare, <br/>
            AYUSH integration and sustainable well-being.
          </p>
        </header>

        {/* IMAGE SLIDESHOW SECTION */}
        <div 
          style={{ 
            position: "relative", 
            width: "100%", 
            height: "450px", 
            borderRadius: "24px", 
            overflow: "hidden", 
            marginBottom: "50px",
            boxShadow: "0 20px 40px rgba(8,59,44,0.1)",
            background: "#e2ece7"
          }}
        >
          {sliderImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Dr. Shivang ${idx + 1}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 20%",
                opacity: currentSlide === idx ? 1 : 0,
                transition: "opacity 1.2s ease-in-out",
              }}
            />
          ))}
          
          {/* Slideshow Dots */}
          <div style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "10px" }}>
            {sliderImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  border: "none",
                  background: currentSlide === idx ? "#c59b3b" : "rgba(255,255,255,0.6)",
                  cursor: "pointer",
                  transition: "background 0.3s ease",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* MAIN GRID LAYOUT */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px", alignItems: "start" }}>
          
          {/* LEFT COLUMN */}
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <PublicationCard publication={publications[0]} />
            <PublicationCard publication={publications[2]} />
          </div>

          {/* RIGHT COLUMN */}
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <PublicationCard publication={publications[1]} />

            {/* CTA SECTION */}
            <div
              style={{
                background: "linear-gradient(135deg, #083b2c 0%, #115e45 100%)",
                borderRadius: "20px",
                padding: "45px 30px",
                textAlign: "center",
                color: "white",
                boxShadow: "0 20px 40px rgba(8,59,44,0.2)",
                position: "relative",
                overflow: "hidden",
                marginTop: "10px",
              }}
            >
              <div style={{ position: "relative", zIndex: 2 }}>
                <h2 style={{ fontSize: "28px", margin: "0 0 15px 0", fontFamily: "Georgia, serif" }}>
                  Connect with Dr. Shivang
                </h2>
                <p style={{ color: "#d1e8df", marginBottom: "25px", fontSize: "15px", lineHeight: "1.6" }}>
                  Healthcare collaborations, research initiatives, conferences and professional engagements.
                </p>
                <a
                  href="/contact"
                  style={{
                    display: "inline-block",
                    background: "white",
                    color: "#083b2c",
                    textDecoration: "none",
                    padding: "12px 30px",
                    borderRadius: "8px",
                    fontWeight: 700,
                    fontSize: "15px",
                  }}
                >
                  Contact Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

// Reusable Component for the Publication Cards
function PublicationCard({ publication }: { publication: any }) {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, #ffffff, #f4fbf7)",
        borderRadius: "24px",
        padding: "40px",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 15px 35px rgba(8,59,44,0.06)",
        border: "1px solid rgba(8,59,44,0.08)",
        borderLeft: "6px solid #083b2c",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {/* Decorative Lotus Background */}
      <div
        style={{
          position: "absolute",
          bottom: "-40px",
          right: "-40px",
          fontSize: "180px",
          opacity: 0.04,
          zIndex: 0,
        }}
      >
        🪷
      </div>

      <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "flex-start", gap: "25px" }}>
        {/* Icon Badge */}
        <div
          style={{
            width: "65px",
            height: "65px",
            borderRadius: "50%",
            background: "#083b2c",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            flexShrink: 0,
            border: "3px solid #e2ece7",
          }}
        >
          {publication.icon}
        </div>

        {/* Text Content */}
        <div>
          <p style={{ color: "#c59b3b", fontWeight: 700, fontSize: "13px", letterSpacing: "1.5px", margin: "0 0 10px 0", textTransform: "uppercase" }}>
            PUBLICATION #{publication.id}
          </p>
          <h3 style={{ color: "#083b2c", fontSize: "28px", margin: "0 0 15px 0", fontFamily: "Georgia, serif", lineHeight: "1.3" }}>
            {publication.title}
          </h3>
          <p style={{ color: "#667085", fontSize: "15px", lineHeight: "1.7", margin: "0 0 25px 0", maxWidth: "90%" }}>
            {publication.desc}
          </p>
          
          <a
            href={publication.link}
            className="read-more-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#083b2c",
              color: "white",
              textDecoration: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            Read More <span style={{ fontSize: "18px" }}>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}