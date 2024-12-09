import { servicesData } from "../../constant/Constant";

const MyServices: React.FC = () => {
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
          {/* Mapping over the servicesData array and rendering a div element for each service */}
          {servicesData.map((service) => (
            <div
              className="w-full h-fit bg-[#274351] py-5 px-4 rounded-md text-text"
              key={service.id}
            >
              <div className="w-[24%] h-16 mb-7 overflow-hidden ">
                <img
                  src={service.icon}
                  srcSet={`${service.icon} 2x`}
                  loading="lazy"
                  alt="web development"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xl pb-4">{service.title}</p>
              <p className="text-md">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyServices;
