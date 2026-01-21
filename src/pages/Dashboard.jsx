import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import AttendanceForm from "../components/AttendanceForm";

const Dashboard = () => {
  return (
    <div style={{ padding: "30px", maxWidth: "1200px", margin: "auto" }}>
      <h1>HRMS Lite</h1>

      <EmployeeForm />
      <EmployeeList />
      <AttendanceForm />
    </div>
  );
};

export default Dashboard;
