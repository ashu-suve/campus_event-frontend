import { useState } from "react";
import {
  addEvent,
  deleteEvent,
  fetchEvents,
  fetchRegistrations
} from "./api";

export default function AdminPanel({
  events,
  setEvents,
  registrations,
  setRegistrations
}) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [college, setCollege] = useState("");

  // ---------------- ADD EVENT ----------------
  const handleAddEvent = async () => {
    if (!name || !date || !time || !venue || !college) {
      alert("Fill all fields");
      return;
    }

    const newEvent = { name, date, time, venue, college };

    const res = await addEvent(newEvent);

    // ✅ SAFE alert (no crash)
    alert(res?.message || "Server not responding");

    setName("");
    setDate("");
    setTime("");
    setVenue("");
    setCollege("");

    // refresh events safely
    const updatedEvents = await fetchEvents();
    setEvents(updatedEvents);
  };

  // ---------------- DELETE EVENT ----------------
  const handleDeleteEvent = async (id) => {
    const res = await deleteEvent(id);
    alert(res?.message || "Delete failed");

    const updatedEvents = await fetchEvents();
    setEvents(updatedEvents);
  };

  // ---------------- FETCH REGISTRATIONS ----------------
  const handleFetchRegistrations = async () => {
    const regs = await fetchRegistrations();
    setRegistrations(regs);
  };

  return (
    <section className="admin">
      <h2>Admin Panel</h2>

      {/* ---------- ADD EVENT FORM ---------- */}
      <div className="admin-form">
        <input
          placeholder="Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Event Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          placeholder="Event Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          placeholder="Event Venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        />
        <input
          placeholder="Hosting College"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
        />

        <button onClick={handleAddEvent}>Add Event</button>
        <button onClick={handleFetchRegistrations}>
          Refresh Registrations
        </button>
      </div>

      {/* ---------- EVENTS LIST ---------- */}
      <div className="events">
        {events.map((e) => (
          <div className="event-card" key={e.id}>
            <span className="college-badge">{e.college}</span>
            <h3>{e.name}</h3>

            {/* ✅ backend field names */}
            <p>📅 {e.event_date} ⏰ {e.event_time}</p>
            <p>📍 {e.venue}</p>
            <p>Registrations: {e.count}</p>

            <button
              className="danger"
              onClick={() => handleDeleteEvent(e.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* ---------- REGISTRATIONS TABLE ---------- */}
      <h3>All Registrations</h3>

      <table>
        <thead>
          <tr>
            <th>Event</th>
            <th>Name</th>
            <th>Email</th>
            <th>College</th>
            <th>Department</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((r) => (
            <tr key={r.id}>
              <td>{r.event_name}</td>
              <td>{r.student_name}</td>
              <td>{r.email}</td>
              <td>{r.student_college}</td>
              <td>{r.department}</td>
              <td>{r.type}</td>
              <td>{r.registration_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
