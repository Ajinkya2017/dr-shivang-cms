export default function AdminLoginPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          width: "400px",
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 0 20px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
          }}
        />

        <a
          href="/admin/dashboard"
          style={{
            display: "block",
            textAlign: "center",
            background: "#14532d",
            color: "white",
            padding: "12px",
            textDecoration: "none",
            borderRadius: "8px",
          }}
        >
          Login
        </a>
      </div>
    </div>
  );
}