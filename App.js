// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { useState, useEffect } from "react";
import Login from "./Login";
import Header from "./Header";
import AdminPanel from "./AdminPanel";
import StudentPanel from "./StudentPanel";
import { fetchEvents, fetchRegistrations } from "./api";
import "./style.css";

export default function App() {
  const [role, setRole] = useState(localStorage.getItem("role") || "");
  const [events, setEvents] = useState([]);
  const [registrations, setRegistrations] = useState([]);

  // Fetch events & registrations from backend
  useEffect(() => {
    if (role) {
      fetchEvents().then(setEvents);
      fetchRegistrations().then(setRegistrations);
    }
  }, [role]);

  const logout = () => {
    localStorage.removeItem("role");
    setRole("");
  };

  return (
    <>
      {!role && <Login setRole={setRole} />}
      {role && (
        <>
          <Header role={role} logout={logout} />
          {role === "admin" && (
            <AdminPanel
              events={events}
              setEvents={setEvents}
              registrations={registrations}
              setRegistrations={setRegistrations}
            />
          )}
          {role === "student" && (
            <StudentPanel
              events={events}
              setEvents={setEvents}
              registrations={registrations}
              setRegistrations={setRegistrations}
            />
          )}
        </>
      )}
    </>
  );
}
