export default function ArticlesPage() {
const articles = [
{
id: 1,
title: "Holistic Healthcare Approaches in Modern India",
description:
"Research publication focused on advancing sustainable healthcare and AYUSH integration.",
icon: "📖",
},
{
id: 2,
title: "Role of AYUSH in Preventive Healthcare",
description:
"Research publication focused on advancing sustainable healthcare and AYUSH integration.",
icon: "🛡️",
},
{
id: 3,
title: "Integrating Traditional and Modern Medicine",
description:
"Research publication focused on advancing sustainable healthcare and AYUSH integration.",
icon: "🌿",
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
<div
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
KNOWLEDGE & INSIGHTS </p>

```
      <h1
        style={{
          fontSize: "72px",
          color: "#0b3d2e",
          marginBottom: "20px",
          fontWeight: 800,
        }}
      >
        Articles & Publications
      </h1>

      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: "22px",
          lineHeight: 1.8,
          color: "#4b5563",
        }}
      >
        Research-driven insights and thought leadership on
        holistic healthcare, AYUSH integration and
        sustainable well-being.
      </p>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(500px,1fr))",
        gap: "30px",
      }}
    >
      {articles.map((article) => (
        <div
          key={article.id}
          style={{
            background: "white",
            borderRadius: "28px",
            padding: "40px",
            boxShadow:
              "0 20px 60px rgba(0,0,0,.08)",
            borderLeft: "6px solid #14532d",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg,#14532d,#0f766e)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              marginBottom: "25px",
            }}
          >
            {article.icon}
          </div>

          <p
            style={{
              color: "#b68a2c",
              fontWeight: 700,
              letterSpacing: "2px",
              marginBottom: "12px",
            }}
          >
            PUBLICATION #{article.id}
          </p>

          <h2
            style={{
              color: "#0b3d2e",
              fontSize: "40px",
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            {article.title}
          </h2>

          <div
            style={{
              width: "60px",
              height: "3px",
              background: "#b68a2c",
              marginBottom: "20px",
            }}
          />

          <p
            style={{
              color: "#4b5563",
              fontSize: "18px",
              lineHeight: 1.8,
              marginBottom: "30px",
            }}
          >
            {article.description}
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
              right: "-20px",
              bottom: "-20px",
              fontSize: "140px",
              opacity: 0.06,
            }}
          >
            🌿
          </div>
        </div>
      ))}
    </div>
  </div>
</main>

);
}
