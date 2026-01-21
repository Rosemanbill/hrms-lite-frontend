import { useEffect, useState } from "react";
import API from "../services/api";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    API.get("/employees").then((res) => setEmployees(res.data));
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
        <ul>
          {employees.map((e) => (
            <li key={e._id}>
              {e.fullName} ({e.department})
              <button onClick={() => deleteEmployee(e._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
