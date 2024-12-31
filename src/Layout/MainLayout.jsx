import { Outlet } from "react-router-dom";
import Navbar from "../Pages/shared/Navbar";
import Footer from "../Pages/shared/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-208px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
