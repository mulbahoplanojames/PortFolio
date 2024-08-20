// Importing the Outlet component from react-router-dom.
// Outlet is a component that will render the child route's element.
import { Outlet } from "react-router-dom";

// Importing the Navbar component from the Navbar folder.
import Navbar from "./Navbar/Navbar";

// Importing the Footer component from the Footer folder.
import Footer from "./Footer/Footer";

// This Layout component is the main layout of the website.
// It contains the Navbar, the content (Outlet), and the Footer.
const Layout = () => {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr_auto] h-[100dvh] bg-background">
        {/* Rendering the Navbar component. */}
        <Navbar />

        {/* Rendering the content of the current route. */}
        {/* The Outlet component is used to render the child route's element. */}
        {/* The content is wrapped in a div with a background color of blue-40. */}
        <div className="bg-blue-40">{<Outlet />}</div>

        {/* Rendering the Footer component. */}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
