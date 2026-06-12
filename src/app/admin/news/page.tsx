export default function NewsPage() {
  return (
    <div className="page-container">
      <h1 className="section-title">
        News & Media
      </h1>

      <div
        style={{
          display: "grid",
          gap: "20px",
        }}
      >
        <div className="card">
          <h2>Speaker at National AYUSH Conference</h2>

          <p style={{ marginTop: "15px", color: "#666" }}>
            Addressed healthcare professionals on the future of
            integrative medicine in India.
          </p>
        </div>

        <div className="card">
          <h2>Healthcare Policy Roundtable Participation</h2>

          <p style={{ marginTop: "15px", color: "#666" }}>
            Contributed to discussions on public health policy
            and preventive healthcare frameworks.
          </p>
        </div>

        <div className="card">
          <h2>Featured in Healthcare Innovation Summit</h2>

          <p style={{ marginTop: "15px", color: "#666" }}>
            Recognized for contributions to holistic healthcare
            and AYUSH integration.
          </p>
        </div>
      </div>
    </div>
  );
}