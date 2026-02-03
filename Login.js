const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

export default function Login({ setRole }) {
  const login = () => {
    const roleSelect = document.getElementById("roleSelect").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (roleSelect === "admin" && username === ADMIN_USER && password === ADMIN_PASS) {
      localStorage.setItem("role", "admin");
      setRole("admin");
    } else if (roleSelect === "student") {
      localStorage.setItem("role", "student");
      setRole("student");
    } else {
      alert("Invalid login or role!");
    }
  };

  return (
    <div className="login">
      <h2>🔐 Login</h2>
      <select id="roleSelect">
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="student">Student</option>
      </select>
      <input id="username" placeholder="Username" />
      <input id="password" type="password" placeholder="Password" />
      <button onClick={login}>Login</button>
    </div>
  );
}
