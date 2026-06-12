export default function AboutPage() {
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
            display: "grid",
            gridTemplateColumns: "1fr 500px",
            gap: "60px",
            alignItems: "center",
            marginBottom: "100px",
          }}
        >
          <div>
            <p
              style={{
                color: "#b68a2c",
                fontWeight: 700,
                letterSpacing: "4px",
                marginBottom: "20px",
              }}
            >
              ABOUT DR. SHIVANG
            </p>

            <h1
              style={{
                fontSize: "72px",
                color: "#0b3d2e",
                lineHeight: 1.1,
                marginBottom: "25px",
              }}
            >
              Leadership,
              <br />
              Research &
              <br />
              Healthcare Vision
            </h1>

            <p
              style={{
                fontSize: "22px",
                color: "#4b5563",
                lineHeight: 1.8,
              }}
            >
              A clinician, researcher and management
              professional dedicated to advancing sustainable,
              holistic and affordable healthcare through
              innovation, education and leadership.
            </p>
          </div>

          <div>
            <img
              src="/images/dr-shivang-3.jpg"
              alt="Dr Shivang"
              style={{
                width: "100%",
                borderRadius: "30px",
                boxShadow:
                  "0 20px 60px rgba(0,0,0,.15)",
              }}
            />
          </div>
        </section>

        {/* BIOGRAPHY */}
        <section
          style={{
            background: "white",
            borderRadius: "30px",
            padding: "60px",
            marginBottom: "50px",
            boxShadow:
              "0 20px 60px rgba(0,0,0,.08)",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              color: "#14532d",
              marginBottom: "25px",
            }}
          >
            Professional Biography
          </h2>

          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.9,
              color: "#4b5563",
            }}
          >
            Dr. Shivang Swaminarayan is an avid researcher,
            thinker, influencer, trained clinician and
            management professional actively contributing
            towards sustainable, holistic and affordable
            healthcare solutions. His work spans research,
            healthcare leadership, AYUSH integration, policy
            development and public health initiatives.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section
          style={{
            marginBottom: "50px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "56px",
              color: "#0b3d2e",
              marginBottom: "40px",
            }}
          >
            Professional Highlights
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(280px,1fr))",
              gap: "25px",
            }}
          >
            {[
              "30+ Years Healthcare Experience",
              "100+ Research Contributions",
              "Healthcare Leadership Initiatives",
              "AYUSH & Holistic Healthcare Advocacy",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "28px",
                  padding: "35px",
                  boxShadow:
                    "0 20px 60px rgba(0,0,0,.08)",
                }}
              >
                <h3
                  style={{
                    color: "#14532d",
                    fontSize: "28px",
                    lineHeight: 1.4,
                  }}
                >
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* VISION */}
        <section
          style={{
            background: "white",
            borderRadius: "30px",
            padding: "60px",
            boxShadow:
              "0 20px 60px rgba(0,0,0,.08)",
          }}
        >
          <h2
            style={{
              color: "#14532d",
              fontSize: "48px",
              marginBottom: "25px",
            }}
          >
            Vision & Mission
          </h2>

          <p
            style={{
              color: "#4b5563",
              fontSize: "20px",
              lineHeight: 1.9,
            }}
          >
            To promote accessible, sustainable and
            patient-centric healthcare by integrating
            scientific research, clinical excellence and
            traditional healthcare wisdom. The mission is to
            contribute towards healthier communities through
            innovation, education and collaborative
            healthcare initiatives.
          </p>
        </section>
      </div>
    </main>
  );
}