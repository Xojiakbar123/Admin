import React, { useState } from "react";

export default function Dashboard() {
  const [form, setForm] = useState({ name: "", surname: "", age: "" });
  const [records, setRecords] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.surname || !form.age) return;

    if (editIndex !== null) {
      const updated = [...records];
      updated[editIndex] = form;
      setRecords(updated);
      setEditIndex(null);
    } else {
      setRecords([...records, form]);
    }

    setForm({ name: "", surname: "", age: "" });
  };

  const handleEdit = (index) => {
    setForm(records[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = records.filter((_, i) => i !== index);
    setRecords(updated);
    if (editIndex === index) {
      setForm({ name: "", surname: "", age: "" });
      setEditIndex(null);
    }
  };

  return (
    <div>
      <h2>Dashboard – User Management</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={form.surname}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <button type="submit">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.length === 0 ? (
            <tr>
              <td colSpan="5" align="center">No data yet</td>
            </tr>
          ) : (
            records.map((rec, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{rec.name}</td>
                <td>{rec.surname}</td>
                <td>{rec.age}</td>
                <td>
                  <button onClick={() => handleEdit(i)}>Edit</button>
                  <button onClick={() => handleDelete(i)} style={{ marginLeft: "8px" }}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
