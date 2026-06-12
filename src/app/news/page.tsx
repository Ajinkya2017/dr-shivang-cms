export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "Healthcare Leadership Conference 2025",
      description:
        "Participation in national healthcare leadership discussions focusing on sustainable and holistic healthcare models.",
    },
    {
      id: 2,
      title: "AYUSH Policy Initiative",
      description:
        "Contributed to discussions on strengthening AYUSH integration within modern healthcare frameworks.",
    },
    {
      id: 3,
      title: "Public Health Awareness Campaign",
      description:
        "Engaged in healthcare awareness initiatives promoting preventive and community healthcare.",
    },
    {
      id: 4,
      title: "Research Presentation",
      description:
        "Presented research findings related to healthcare innovation and evidence-based practices.",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#eef6f1 0%,#ffffff 50%,#f9f8f4 100%)",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {/* HERO */}
        <section
          style={{
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <p
            style={{
              color: "#b68a2c",
              fontWeight: 700,
              letterSpacing: "4px",
              marginBottom: "20px",
            }}
          >
            NEWS & MEDIA
          </p>

          <h1
            style={{
              fontSize: "72px",
              color: "#0b3d2e",
              marginBottom: "20px",
            }}
          >
            Latest News
          </h1>

          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "22px",
              color: "#4b5563",
              lineHeight: 1.8,
            }}
          >
            Updates, media appearances, conferences,
            healthcare initiatives and professional
            engagements.
          </p>
        </section>

        {/* NEWS GRID */}
        <section>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(500px,1fr))",
              gap: "30px",
            }}
          >
            {newsItems.map((item) => (
              <div
                key={item.id}
                style={{
                  background: "white",
                  borderRadius: "28px",
                  padding: "40px",
                  boxShadow:
                    "0 20px 60px rgba(0,0,0,.08)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <p
                  style={{
                    color: "#b68a2c",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    marginBottom: "15px",
                  }}
                >
                  NEWS UPDATE #{item.id}
                </p>

                <h2
                  style={{
                    color: "#14532d",
                    fontSize: "38px",
                    lineHeight: 1.3,
                    marginBottom: "20px",
                  }}
                >
                  {item.title}
                </h2>

                <div
                  style={{
                    width: "70px",
                    height: "4px",
                    background: "#b68a2c",
                    marginBottom: "20px",
                  }}
                />

                <p
                  style={{
                    color: "#4b5563",
                    fontSize: "18px",
                    lineHeight: 1.8,
                    marginBottom: "25px",
                  }}
                >
                  {item.description}
                </p>

                <button
                  style={{
                    background: "#14532d",
                    color: "white",
                    border: "none",
                    padding: "14px 28px",
                    borderRadius: "12px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Read More →
                </button>

                <div
                  style={{
                    position: "absolute",
                    right: "-10px",
                    bottom: "-20px",
                    fontSize: "120px",
                    opacity: 0.05,
                  }}
                >
                  📰
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            marginTop: "80px",
            background:
              "linear-gradient(135deg,#14532d,#1f7a45)",
            borderRadius: "30px",
            padding: "70px",
            textAlign: "center",
            color: "white",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              marginBottom: "20px",
            }}
          >
            Stay Connected
          </h2>

          <p
            style={{
              fontSize: "20px",
              marginBottom: "25px",
            }}
          >
            Follow the latest healthcare initiatives,
            conferences and research contributions.
          </p>

          <a
            href="/contact"
            style={{
              background: "#b68a2c",
              color: "white",
              padding: "16px 30px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Contact Now
          </a>
        </section>
      </div>
    </main>
  );
}