import React, { useState } from "react";

function RegisterModal({ event, close, addRegistration }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    dept: "",
    college: "",
    type: ""
  });

  const submit = e => {
    e.preventDefault();
    addRegistration({
      ...form,
      eventId: event.id,
      eventName: event.name,
      date: event.date,
      time: event.time
    });
    close();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{event.name}</h3>
        <p>{event.college}</p>

        <form onSubmit={submit}>
          <input required placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
          <input required type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
          <input required placeholder="Department" onChange={e => setForm({ ...form, dept: e.target.value })} />
          <input required placeholder="College" onChange={e => setForm({ ...form, college: e.target.value })} />
          <select required onChange={e => setForm({ ...form, type: e.target.value })}>
            <option value="">Participation Type</option>
            <option>Intra College</option>
            <option>Inter College</option>
          </select>

          <button type="submit">Submit</button>
          <button type="button" onClick={close}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
