export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
        background: "#090909",
        color: "#f2f2f2",
        textAlign: "center",
      }}
    >
      <div>
        <p style={{ margin: "0 0 12px", opacity: 0.7 }}>404</p>
        <h1 style={{ margin: "0 0 12px" }}>Página no encontrada</h1>
        <p style={{ margin: 0, opacity: 0.75 }}>
          The page you are looking for does not exist.
        </p>
      </div>
    </main>
  );
}
