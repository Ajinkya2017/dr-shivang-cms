export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "100px",
        background:
          "linear-gradient(135deg,#14532d,#1f7a45)",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        <h2
          style={{
            marginBottom: "15px",
          }}
        >
          Dr. Shivang Swaminarayan
        </h2>

        <p
          style={{
            maxWidth: "700px",
            lineHeight: "1.8",
            opacity: 0.9,
          }}
        >
          Researcher, clinician, healthcare strategist and
          management professional contributing towards
          sustainable, holistic and affordable healthcare.
        </p>

        <hr
          style={{
            margin: "30px 0",
            opacity: 0.2,
          }}
        />

        <p>
          © 2026 Dr. Shivang Swaminarayan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}