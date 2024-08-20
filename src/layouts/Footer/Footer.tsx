import { useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { footerlinks } from "../../constant/Constant";

const Footer = () => {
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    const handleBegin = (to: string, element: HTMLElement) => {
      console.log("begin", to, element);
    };
    Events.scrollEvent.register("begin", handleBegin);

    // Registering the 'end' event and logging it to the console when triggered.
    const handleEnd = (to: string, element: HTMLElement) => {
      console.log("end", to, element);
    };
    Events.scrollEvent.register("end", handleEnd);

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // Function to handle the activation of a link.
  const handleSetActive = (to: string) => {
    console.log(to);
  };

  return (
    <>
      <section className="md:px-28 px-5 md:py-20 py-14 bg-background text-text grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        <div className="w-full h-fit">
          <h1 className="text-3xl pb-3 font-bold">Contact Me</h1>
          <p className="pb-3 text-lg">(+250) 791 - 676 -207</p>
          <p className="pb-3 text-lg">mulbahjamesoplano@gmail.com</p>
          <p className="pb-3 text-lg">Gisozo, Kigali, Rwanda</p>
        </div>

        <div className="w-full h-fit">
          <h1 className="text-3xl pb-3 font-bold">Services</h1>

          {footerlinks.map((link) => (
            <Link
              to={link.path}
              key={link.label}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="pb-3 text-lg block"
              onClick={() => {
                handleSetActive("/");
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Footer;
