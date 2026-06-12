export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          background: "#14532d",
          color: "white",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 400px",
            gap: "50px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#facc15",
                letterSpacing: "2px",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              HOMOEOPATHY • AYUSH • HEALTHCARE INNOVATION
            </p>

            <h1
              style={{
                fontSize: "60px",
                marginBottom: "20px",
              }}
            >
              Dr. Shivang Swaminarayan
            </h1>

            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.8",
                marginBottom: "30px",
              }}
            >
              Researcher, thinker, influencer, trained clinician and
              management professional actively contributing for more than
              three decades towards sustainable, holistic and affordable
              healthcare solutions.
            </p>

            <div style={{ display: "flex", gap: "15px" }}>
              <a
                href="/about"
                style={{
                  background: "#facc15",
                  color: "black",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                About Me
              </a>

              <a
                href="/contact"
                style={{
                  border: "1px solid white",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                Contact
              </a>
            </div>
          </div>

          <div
            style={{
              height: "450px",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <img
              src="/images/dr-shivang.jpg"
              alt="Dr Shivang Swaminarayan"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "60px 20px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
            textAlign: "center",
          }}
        >
          <div>
            <h2 style={{ fontSize: "48px", color: "#166534" }}>30+</h2>
            <p>Years Experience</p>
          </div>

          <div>
            <h2 style={{ fontSize: "48px", color: "#166534" }}>100+</h2>
            <p>Research Contributions</p>
          </div>

          <div>
            <h2 style={{ fontSize: "48px", color: "#166534" }}>50+</h2>
            <p>Healthcare Initiatives</p>
          </div>

          <div>
            <h2 style={{ fontSize: "48px", color: "#166534" }}>10+</h2>
            <p>Leadership Roles</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        style={{
          background: "#f8fafc",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              color: "#14532d",
              marginBottom: "30px",
            }}
          >
            About Dr. Shivang Swaminarayan
          </h2>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.9",
              marginBottom: "40px",
            }}
          >
            Dr. Shivang Swaminarayan is an avid researcher, thinker,
            influencer, trained clinician and management professional
            actively contributing for more than three decades towards
            sustainable, holistic and affordable health solutions,
            products and approaches for improving value proposition
            to stakeholders and consumers.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
            }}
          >
            <div>
              <h3
                style={{
                  color: "#14532d",
                  marginBottom: "15px",
                }}
              >
                Current Positions
              </h3>

              <ul>
                <li>• Co-Chairman – Homeopathy (AYUSH Industry), CII</li>
                <li>• Hon'ry Physician to Governor of Gujarat</li>
                <li>• National Executive Committee Member – Arogya Bharti</li>
                <li>• Secretary – Pharmaceutical Wing, HMAI</li>
                <li>• Secretary – AHML</li>
                <li>• Mentor & Advisor to Startups</li>
              </ul>
            </div>

            <div>
              <h3
                style={{
                  color: "#14532d",
                  marginBottom: "15px",
                }}
              >
                Former Positions
              </h3>

              <ul>
                <li>• Member – Central Council for Research in Homoeopathy</li>
                <li>• Chairperson – IDMA Gujarat</li>
                <li>• General Secretary – HMAI Gujarat</li>
                <li>• Hon'ry Physician – Civil Hospital Ahmedabad</li>
                <li>• Knowledge Coordinator – Gujarat State Council</li>
                <li>• Vice Chancellor Nominee – Sardar Patel University</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              color: "#14532d",
              fontSize: "42px",
              marginBottom: "40px",
            }}
          >
            Professional Recognition
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5,1fr)",
              gap: "20px",
            }}
          >
            {[
              "Co-Chairman – CII",
              "Governor's Hon'ry Physician",
              "Arogya Bharti NEC Member",
              "CCRH Member",
              "Startup Mentor",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "20px",
                  background: "#f3f4f6",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section
        style={{
          background: "#f8fafc",
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              color: "#14532d",
              fontSize: "42px",
              marginBottom: "40px",
            }}
          >
            Publications & Articles
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "20px",
            }}
          >
            <div style={{ border: "1px solid #ddd", padding: "20px" }}>
              Holistic Healthcare Approaches in Modern India
            </div>

            <div style={{ border: "1px solid #ddd", padding: "20px" }}>
              Role of AYUSH in Preventive Healthcare
            </div>

            <div style={{ border: "1px solid #ddd", padding: "20px" }}>
              Integrating Traditional and Modern Medicine
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              color: "#14532d",
              fontSize: "42px",
              marginBottom: "40px",
            }}
          >
            News & Media
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "20px",
            }}
          >
            <div style={{ border: "1px solid #ddd", padding: "20px" }}>
              Speaker at National AYUSH Conference
            </div>

            <div style={{ border: "1px solid #ddd", padding: "20px" }}>
              Healthcare Policy Roundtable Participation
            </div>

            <div style={{ border: "1px solid #ddd", padding: "20px" }}>
              Featured in Healthcare Innovation Summit
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section
        style={{
          background: "#14532d",
          color: "white",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h2 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Connect with Dr. Shivang Swaminarayan
        </h2>

        <p
          style={{
            fontSize: "20px",
            marginBottom: "30px",
          }}
        >
          Available for healthcare collaborations, research initiatives,
          policy discussions and professional engagements.
        </p>

        <a
          href="/contact"
          style={{
            background: "#facc15",
            color: "black",
            padding: "14px 30px",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Contact Now
        </a>
      </section>
      {/* PROFESSIONAL RECOGNITION */}
<section
  style={{
    padding: "80px 20px",
    background: "#ffffff",
  }}
>
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    <h2
      style={{
        fontSize: "42px",
        color: "#14532d",
        marginBottom: "30px",
      }}
    >
      Professional Recognition
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        gap: "20px",
      }}
    >
      {[
        "Co-Chairman – CII",
        "Governor's Hon'ry Physician",
        "Arogya Bharti NEC Member",
        "CCRH Member",
        "Startup Mentor",
      ].map((item, index) => (
        <div
          key={index}
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  </div>
</section>

{/* PUBLICATIONS */}
<section
  style={{
    padding: "80px 20px",
    background: "#f8fafc",
  }}
>
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    <h2
      style={{
        fontSize: "42px",
        color: "#14532d",
        marginBottom: "30px",
      }}
    >
      Publications & Articles
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "20px",
      }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        Holistic Healthcare Approaches in Modern India
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        Role of AYUSH in Preventive Healthcare
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        Integrating Traditional and Modern Medicine
      </div>
    </div>
  </div>
</section>

{/* NEWS */}
<section
  style={{
    padding: "80px 20px",
    background: "#ffffff",
  }}
>
  <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
    <h2
      style={{
        fontSize: "42px",
        color: "#14532d",
        marginBottom: "30px",
      }}
    >
      News & Media
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "20px",
      }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        Speaker at National AYUSH Conference
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        Healthcare Policy Roundtable Participation
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        Featured in Healthcare Innovation Summit
      </div>
    </div>
  </div>
</section>

{/* CONTACT CTA */}
<section
  style={{
    background: "#14532d",
    color: "white",
    textAlign: "center",
    padding: "80px 20px",
  }}
>
  <h2
    style={{
      fontSize: "42px",
      marginBottom: "20px",
    }}
  >
    Connect with Dr. Shivang Swaminarayan
  </h2>

  <p
    style={{
      fontSize: "20px",
      marginBottom: "30px",
    }}
  >
    Available for healthcare collaborations, research initiatives,
    policy discussions and professional engagements.
  </p>

  <a
    href="/contact"
    style={{
      background: "#facc15",
      color: "black",
      padding: "14px 28px",
      borderRadius: "8px",
      textDecoration: "none",
    }}
  >
    Contact Now
  </a>
</section>
    </>
  );
}