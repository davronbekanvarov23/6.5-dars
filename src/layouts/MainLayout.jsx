import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div>
      <Outlet />
      <Navbar />
    </div>
  );
}

export default MainLayout;
