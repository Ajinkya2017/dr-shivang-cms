export default function ContactPage() {
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
            CONTACT & COLLABORATION
          </p>

          <h1
            style={{
              fontSize: "72px",
              color: "#0b3d2e",
              marginBottom: "20px",
            }}
          >
            Get In Touch
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
            For healthcare collaborations, research
            initiatives, conferences, speaking engagements and
            professional consultations.
          </p>
        </section>

        {/* CONTACT SECTION */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
          }}
        >
          {/* LEFT CARD */}
          <div
            style={{
              background: "white",
              padding: "50px",
              borderRadius: "30px",
              boxShadow:
                "0 20px 60px rgba(0,0,0,.08)",
            }}
          >
            <h2
              style={{
                color: "#14532d",
                fontSize: "42px",
                marginBottom: "30px",
              }}
            >
              Contact Information
            </h2>

            <div style={{ marginBottom: "30px" }}>
              <h3
                style={{
                  color: "#b68a2c",
                  marginBottom: "10px",
                }}
              >
                📧 Email
              </h3>

              <p
                style={{
                  color: "#4b5563",
                  fontSize: "18px",
                }}
              >
                contact@drshivang.com
              </p>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <h3
                style={{
                  color: "#b68a2c",
                  marginBottom: "10px",
                }}
              >
                📞 Phone
              </h3>

              <p
                style={{
                  color: "#4b5563",
                  fontSize: "18px",
                }}
              >
                +91 XXXXX XXXXX
              </p>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <h3
                style={{
                  color: "#b68a2c",
                  marginBottom: "10px",
                }}
              >
                📍 Location
              </h3>

              <p
                style={{
                  color: "#4b5563",
                  fontSize: "18px",
                }}
              >
                India
              </p>
            </div>

            <div>
              <h3
                style={{
                  color: "#b68a2c",
                  marginBottom: "10px",
                }}
              >
                🤝 Collaboration Areas
              </h3>

              <p
                style={{
                  color: "#4b5563",
                  lineHeight: 1.8,
                }}
              >
                Healthcare Innovation, AYUSH, Research,
                Conferences, Public Health and Professional
                Advisory Engagements.
              </p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            style={{
              background: "white",
              padding: "50px",
              borderRadius: "30px",
              boxShadow:
                "0 20px 60px rgba(0,0,0,.08)",
            }}
          >
            <h2
              style={{
                color: "#14532d",
                fontSize: "42px",
                marginBottom: "30px",
              }}
            >
              Send a Message
            </h2>

            <form>
              <input
                type="text"
                placeholder="Full Name"
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  marginBottom: "20px",
                  fontSize: "16px",
                }}
              />

              <input
                type="email"
                placeholder="Email Address"
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  marginBottom: "20px",
                  fontSize: "16px",
                }}
              />

              <input
                type="text"
                placeholder="Subject"
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  marginBottom: "20px",
                  fontSize: "16px",
                }}
              />

              <textarea
                placeholder="Your Message"
                rows={6}
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  marginBottom: "20px",
                  fontSize: "16px",
                  resize: "vertical",
                }}
              />

              <button
                type="submit"
                style={{
                  background: "#14532d",
                  color: "white",
                  border: "none",
                  padding: "16px 32px",
                  borderRadius: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Send Message
              </button>
            </form>
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
            Let's Work Together
          </h2>

          <p
            style={{
              fontSize: "20px",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Open to healthcare collaborations, research
            partnerships, conferences and professional
            engagements.
          </p>
        </section>
      </div>
    </main>
  );
}