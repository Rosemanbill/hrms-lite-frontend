import { useEffect, useState } from "react";
import API from "../services/api";

const AttendanceForm = () => {
  const [employees, setEmployees] = useState([]);
  const [data, setData] = useState({ employeeId: "", date: "", status: "Present" });

  useEffect(() => {
    API.get("/employees").then((res) => setEmployees(res.data));
  }, []);

  const submitAttendance = async (e) => {
    e.preventDefault();
    try {
      await API.post("/attendance", data);
      alert("Attendance marked");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <form onSubmit={submitAttendance}>
      <h2>Mark Attendance</h2>
      <select onChange={(e) => setData({ ...data, employeeId: e.target.value })}>
        <option>Select Employee</option>
        {employees.map((e) => (
          <option key={e._id} value={e._id}>
            {e.fullName}
          </option>
        ))}
      </select>

      <input type="date" onChange={(e) => setData({ ...data, date: e.target.value })} />

      <select onChange={(e) => setData({ ...data, status: e.target.value })}>
        <option>Present</option>
        <option>Absent</option>
      </select>

      <button>Submit</button>
    </form>
  );
};

export default AttendanceForm;
