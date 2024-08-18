import { servicesData } from "../../constant/Constant";

const MyServices = () => {
  return (
    <>
      <div
        className="w-full bg-gradient-to-r from-primary to-background md:px-24 px-4 md:py-16 py-12 "
        id="/services"
      >
        <h1 className="md:text-4xl text-3xl text-text pb-8 md:pb-14 text-center">
          My Services
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-y-7">
          {servicesData.map((service) => (
            <div className="w-full h-fit bg-[#274351] py-5 px-4 rounded-md text-text">
              <div className="w-[24%] h-16 mb-7 overflow-hidden ">
                <img
                  src={service.icon}
                  alt="web development"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xl pb-4">{service.title}</p>
              <p className="text-md">{service.description}</p>
            </div>
          ))}
          {/* <div className="w-full h-fit bg-blue-400 py-5 px-4 rounded-md">
            <div className="w-[35%] h-28 bg-red-300 mb-5 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="web development"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xl pb-4">Web development</p>
            <p className="text-md">
              Web development Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Aut beatae nesciunt esse, perferendis error suscipit.
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MyServices;
