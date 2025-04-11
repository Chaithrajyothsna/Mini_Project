// components/Appointments.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    visitType: 'Virtual',
    confirmed: false,
  });

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const res = await axios.get('/api/appointments');
    setAppointments(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/appointments/${id}`);
    fetchAppointments();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/appointments', formData);
    setFormData({ name: '', date: '', time: '', visitType: 'Virtual', confirmed: false });
    fetchAppointments();
  };

  return (
    <div className="container">
      <h2>My Appointments</h2>

      <ul className="list-group">
        {appointments.map((appt) => (
          <li key={appt._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{appt.name}</strong> | {appt.date} at {appt.time} ({appt.visitType})
            </div>
            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(appt._id)}>
              Cancel
            </button>
          </li>
        ))}
      </ul>

      <hr />

      <h4>Book New Appointment</h4>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          className="form-control my-2"
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />
        <input
          className="form-control my-2"
          type="time"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          required
        />
        <select
          className="form-control my-2"
          value={formData.visitType}
          onChange={(e) => setFormData({ ...formData, visitType: e.target.value })}
        >
          <option>Virtual</option>
          <option>In-person</option>
        </select>
        <button className="btn btn-primary">Add Appointment</button>
      </form>
    </div>
  );
};

export default Appointments;
