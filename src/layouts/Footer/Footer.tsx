import { useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { footerlinks } from "../../constant/Constant";

import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
      <section className="md:px-28 px-5 md:py-20 py-14 bg-background text-text grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 border-t-2">
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

        <div className="">
          <h1 className="text-3xl pb-6 font-bold">Socials</h1>
          <div className="flex items-center gap-8">
            {socials.map((social) => (
              <a href={social.link} key={social.id} target="_blank">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

type SocialsType = {
  id: number;
  icon: JSX.Element;
  link: string;
};

const socials: SocialsType[] = [
  {
    id: 1,
    icon: <FaLinkedin className="text-3xl" />,
    link: "https://www.linkedin.com/in/oplano-james-mulbah/",
  },
  {
    id: 2,
    icon: <FaGithubSquare className="text-3xl" />,
    link: "https://github.com/mulbahoplanojames",
  },
  {
    id: 3,
    icon: <FaXTwitter className="text-3xl" />,
    link: "https://x.com/JamesOplan23726",
  },
  {
    id: 4,
    icon: <FaInstagram className="text-3xl" />,
    link: "https://www.instagram.com/oplanojames/",
  },
];
