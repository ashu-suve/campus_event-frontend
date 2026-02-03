import { registerStudent, fetchEvents } from "./api";

export default function StudentPanel({ events, setEvents }) {
  const handleRegister = async (event) => {
    const name = prompt("Enter Your Name");
    const email = prompt("Enter Your Email");
    const dept = prompt("Department");
    const studentCollege = prompt("Your College Name");
    const type = prompt("Participation Type (Intra/Inter)");

    if (!name || !email || !studentCollege || !type) return;

    const studentData = {
      event: event.name,
      eventDate: event.date,
      eventTime: event.time,
      name,
      email,
      dept,
      studentCollege,
      type
    };

    const res = await registerStudent(studentData);
    alert(res.message);

    // Refresh events to update registration count
    const updatedEvents = await fetchEvents();
    setEvents(updatedEvents);
  };

  return (
    <section className="events">
      {events.length === 0 && <p>No events available yet.</p>}
      {events.map(e => (
        <div className="event-card" key={e.id}>
          <span className="college-badge">{e.college}</span>
          <h3>{e.name}</h3>
          <p>📅 {e.date} ⏰ {e.time}</p>
          <p>📍 {e.venue}</p>
          <p>Registrations: {e.count}</p>
          <button onClick={() => handleRegister(e)}>Register</button>
        </div>
      ))}
    </section>
  );
}
