export default function DashboardPage() {
  return (
    <div className="page-container">
      <h1 className="section-title">
        Admin Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
        }}
      >
        <a
          href="/admin/articles"
          className="card"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <h2>Articles</h2>

          <p>
            Create, edit and manage publications.
          </p>
        </a>

        <a
          href="/admin/news"
          className="card"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <h2>News</h2>

          <p>
            Manage announcements and updates.
          </p>
        </a>

        <a
          href="/"
          className="card"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <h2>Website</h2>

          <p>
            Return to public website.
          </p>
        </a>
      </div>
    </div>
  );
}