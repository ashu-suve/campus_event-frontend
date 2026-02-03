const API_URL = "http://localhost:5000/api";



// ---------------- EVENTS ----------------

export const fetchEvents = async () => {
  try {
    const res = await fetch(`${API_URL}/events`);
    if (!res.ok) throw new Error("Failed to fetch events");
    return await res.json();
  } catch (err) {
    console.error("❌ fetchEvents error:", err);
    return [];
  }
};

export const addEvent = async (event) => {
  try {
    const res = await fetch(`${API_URL}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    });

    if (!res.ok) throw new Error("Failed to add event");

    return await res.json();
  } catch (err) {
    console.error("❌ addEvent error:", err);
    return { message: "Backend not reachable" };
  }
};

export const deleteEvent = async (id) => {
  try {
    const res = await fetch(`${API_URL}/events/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Failed to delete event");

    return await res.json();
  } catch (err) {
    console.error("❌ deleteEvent error:", err);
    return { message: "Delete failed" };
  }
};

// ---------------- REGISTRATIONS ----------------

export const registerStudent = async (studentData) => {
  try {
    const res = await fetch(`${API_URL}/registrations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    });

    if (!res.ok) throw new Error("Failed to register");

    return await res.json();
  } catch (err) {
    console.error("❌ registerStudent error:", err);
    return { message: "Registration failed" };
  }
};

export const fetchRegistrations = async () => {
  try {
    const res = await fetch(`${API_URL}/registrations`);
    if (!res.ok) throw new Error("Failed to fetch registrations");
    return await res.json();
  } catch (err) {
    console.error("❌ fetchRegistrations error:", err);
    return [];
  }
};
