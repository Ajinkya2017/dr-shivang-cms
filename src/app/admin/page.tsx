export default function NewsAdminPage() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "50px",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          color: "#14532d",
          marginBottom: "30px",
        }}
      >
        News Management
      </h1>

      <div
        style={{
          background: "#f8fafc",
          padding: "30px",
          borderRadius: "12px",
          marginBottom: "40px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Add News</h2>

        <input
          type="text"
          placeholder="News Title"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
          }}
        />

        <textarea
          rows={6}
          placeholder="News Description"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
          }}
        />

        <button
          style={{
            background: "#14532d",
            color: "white",
            padding: "12px 24px",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Save News
        </button>
      </div>

      <h2 style={{ marginBottom: "20px" }}>Existing News</h2>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          marginBottom: "15px",
          borderRadius: "10px",
        }}
      >
        <h3>Speaker at National AYUSH Conference</h3>

        <button style={{ marginRight: "10px", padding: "8px 16px" }}>
          Edit
        </button>

        <button style={{ padding: "8px 16px" }}>
          Delete
        </button>
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h3>Healthcare Policy Roundtable Participation</h3>

        <button style={{ marginRight: "10px", padding: "8px 16px" }}>
          Edit
        </button>

        <button style={{ padding: "8px 16px" }}>
          Delete
        </button>
      </div>
    </div>
  );
}