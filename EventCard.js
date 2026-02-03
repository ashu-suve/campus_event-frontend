import React from "react";
import { getEventStatus } from "../utils";


function EventCard({ event, registrations, onRegister, isAdmin, onDelete }) {
  const status = getEventStatus(event.date);
  const count = registrations.filter(r => r.eventId === event.id).length;

  return (
    <div className="event-card">
      <span className={`status ${status.toLowerCase()}`}>{status}</span>
      <span className="college-badge">🏫 {event.college}</span>

      <h3>{event.name}</h3>
      <p>📅 {event.date} ⏰ {event.time}</p>
      <p>📍 {event.venue}</p>

      <p className="count">👥 Registered: {count}</p>

      <button onClick={() => onRegister(event)}>Register</button>

      {isAdmin && (
        <button className="danger" onClick={() => onDelete(event.id)}>
          Delete
        </button>
      )}
    </div>
  );
}

export default EventCard;
