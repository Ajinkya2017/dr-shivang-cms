export default function ArticlesPage() {
  return (
    <div className="page-container">
      <h1 className="section-title">
        Articles & Publications
      </h1>

      <div
        style={{
          display: "grid",
          gap: "20px",
        }}
      >
        <div className="card">
          <h2>Holistic Healthcare Approaches in Modern India</h2>

          <p
            style={{
              marginTop: "15px",
              color: "#666",
            }}
          >
            Exploring sustainable healthcare models integrating
            traditional and modern medical approaches.
          </p>
        </div>

        <div className="card">
          <h2>Role of AYUSH in Preventive Healthcare</h2>

          <p
            style={{
              marginTop: "15px",
              color: "#666",
            }}
          >
            Understanding the impact of preventive care through
            AYUSH-based interventions.
          </p>
        </div>

        <div className="card">
          <h2>Integrating Traditional and Modern Medicine</h2>

          <p
            style={{
              marginTop: "15px",
              color: "#666",
            }}
          >
            Building a collaborative healthcare ecosystem for
            better patient outcomes.
          </p>
        </div>
      </div>
    </div>
  );
}