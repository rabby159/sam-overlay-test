import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import StarBackground from "../Components/StarBackground";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen">
      <StarBackground />
      <div className="relative z-10">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
