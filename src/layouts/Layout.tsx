import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr_auto] h-[100dvh] bg-background">
        <Navbar />
        <div className="bg-blue-40">{<Outlet />}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
