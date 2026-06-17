export default function DashboardPage() {
  return (
    <div>
      <header style={{ marginBottom: "40px" }}>
        <h1 style={{ color: "#111827", fontSize: "32px", margin: "0 0 8px 0" }}>Welcome to your Dashboard</h1>
        <p style={{ color: "#6b7280", fontSize: "16px", margin: 0 }}>
          Manage your website content, publications, and news updates from here.
        </p>
      </header>

      {/* QUICK STATS WIDGETS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginBottom: "50px" }}>
        
        {/* Stat Card 1 */}
        <div style={{ background: "white", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)", border: "1px solid #f3f4f6" }}>
          <p style={{ color: "#6b7280", fontSize: "14px", fontWeight: 600, margin: "0 0 10px 0", textTransform: "uppercase" }}>Total Articles</p>
          <p style={{ color: "#083b2c", fontSize: "36px", fontWeight: 700, margin: 0 }}>4</p>
        </div>

        {/* Stat Card 2 */}
        <div style={{ background: "white", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)", border: "1px solid #f3f4f6" }}>
          <p style={{ color: "#6b7280", fontSize: "14px", fontWeight: 600, margin: "0 0 10px 0", textTransform: "uppercase" }}>News Updates</p>
          <p style={{ color: "#083b2c", fontSize: "36px", fontWeight: 700, margin: 0 }}>2</p>
        </div>

        {/* Stat Card 3 */}
        <div style={{ background: "white", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)", border: "1px solid #f3f4f6" }}>
          <p style={{ color: "#6b7280", fontSize: "14px", fontWeight: 600, margin: "0 0 10px 0", textTransform: "uppercase" }}>Quick Action</p>
          <a href="/admin/articles" style={{ display: "inline-block", background: "#c59b3b", color: "white", padding: "10px 20px", borderRadius: "8px", textDecoration: "none", fontWeight: 600, marginTop: "5px" }}>
            + Write New Article
          </a>
        </div>

      </div>
    </div>
  );
}