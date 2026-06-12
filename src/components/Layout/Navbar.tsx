export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(20px)",
        background: "rgba(255,255,255,0.85)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "18px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2
            style={{
              color: "#14532d",
              fontWeight: 800,
            }}
          >
            Dr. Shivang Swaminarayan
          </h2>

          <p
            style={{
              fontSize: "13px",
              color: "#666",
            }}
          >
            Homoeopathy • AYUSH • Healthcare Innovation
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/articles">Articles</a>
          <a href="/news">News</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}