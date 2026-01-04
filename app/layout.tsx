
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: "20px", background: "#eee" }}>
          <a href="/">Home</a> |{" "}
          <a href="/login">Login</a> |{" "}
          <a href="/dashboard">Dashboard</a> |{" "}
          <a href="/students">Students</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
