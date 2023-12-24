import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import userImg from "../assets/userpic.png";

const Dashboard = () => {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main */}
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Serach for data, users, docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
