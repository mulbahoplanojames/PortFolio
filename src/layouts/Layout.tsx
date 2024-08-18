import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr_auto] h-[100dvh] bg-background">
        <Navbar />
        <div className="bg-blue-40">{<Outlet />}</div>
        <div className="bg-green-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, et.
        </div>
      </div>
    </>
  );
};

export default Layout;
