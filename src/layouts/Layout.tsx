import Navbar from "./Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr_auto] h-[100dvh] bg-background">
        <div className="bg-red-300">
          <Navbar />
        </div>
        <div className="bg-blue-40">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
          doloribus! lorem200
        </div>
        <div className="bg-green-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, et.
        </div>
      </div>
    </>
  );
};

export default Layout;
