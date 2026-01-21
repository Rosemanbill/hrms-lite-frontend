import { useState } from "react";
import API from "../services/api";

const EmployeeForm = () => {
  const [form, setForm] = useState({
    employeeId: "",
    fullName: "",
    email: "",
    department: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/employees", form);
      alert("Employee added successfully");
      setForm({ employeeId: "", fullName: "", email: "", department: "" });
      window.location.reload();
    } catch (err) {
      alert(err.response?.data?.message || "Error adding employee");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <input placeholder="Employee ID" onChange={(e) => setForm({ ...form, employeeId: e.target.value })} />
      <input placeholder="Full Name" onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Department" onChange={(e) => setForm({ ...form, department: e.target.value })} />
      <button>Add</button>
    </form>
  );
};

export default EmployeeForm;
