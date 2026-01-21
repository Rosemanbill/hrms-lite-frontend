import { useEffect, useState } from "react";
import API from "../services/api";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [presentCount, setPresentCount] = useState({});

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await API.get("/employees");
      setEmployees(res.data);

      res.data.forEach(async (emp) => {
        const countRes = await API.get(
          `/attendance/present-count/${emp._id}`
        );
        setPresentCount((prev) => ({
          ...prev,
          [emp._id]: countRes.data.presentDays,
        }));
      });
    };

    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    if (!window.confirm("Delete employee?")) return;
    await API.delete(`/employees/${id}`);
    setEmployees(employees.filter((e) => e._id !== id));
  };

  return (
    <div>
      <h2>Employees</h2>

      {employees.length === 0 ? (
        <p>No employees found</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Present Days</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e) => (
              <tr key={e._id}>
                <td>{e.fullName}</td>
                <td>{e.department}</td>
                <td>{presentCount[e._id] ?? "Loading..."}</td>
                <td>
                  <button onClick={() => deleteEmployee(e._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeList;
