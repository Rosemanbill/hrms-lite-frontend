import { useEffect, useState } from "react";
import API from "../services/api";

const AttendanceList = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    API.get("/employees").then((res) => setEmployees(res.data));
  }, []);

  const fetchAttendance = async (employeeId) => {
    setSelectedEmployee(employeeId);
    const res = await API.get(`/attendance/${employeeId}`);
    setAttendance(res.data);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Attendance Records</h2>

      <select onChange={(e) => fetchAttendance(e.target.value)}>
        <option value="">Select Employee</option>
        {employees.map((e) => (
          <option key={e._id} value={e._id}>
            {e.fullName}
          </option>
        ))}
      </select>

      {attendance.length === 0 && selectedEmployee && (
        <p>No attendance records found</p>
      )}

      {attendance.length > 0 && (
        <table border="1" cellPadding="8" style={{ marginTop: "15px" }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((a) => (
              <tr key={a._id}>
                <td>{a.date}</td>
                <td>{a.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AttendanceList;
