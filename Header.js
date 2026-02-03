export default function Header({ role, logout }) {
  const toggleDark = () => document.body.classList.toggle("dark");

  return (
    <header>
      <h1>🎓 Campus Event Management</h1>
      <div>
        {role === "admin" && <button onClick={() => alert("Use the Export button in Admin Panel")}>📊 Export Excel</button>}
        <button onClick={toggleDark}>🌙</button>
        <button onClick={logout}>Logout</button>
      </div>
    </header>
  );
}
