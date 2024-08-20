import { useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";

const Testimonial = () => {
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
      <section className="md:px-20 px-3 md:py-14 py-10 bg-gradient-to-r from-primary to-background text-center">
        <h1 className="text-3xl text-center pb-12 text-text capitalize">
          What Clients Say
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
          {testimonial.map((test) => (
            <div
              className="w-full h-fit bg-background text-text py-8 px-6 rounded-md text-left"
              key={test.id}
            >
              <p className="text-lg pb-3">{test.text}</p>
              <p className="text-right text-lg">{test.name}</p>
            </div>
          ))}
        </div>
        <Link
          to="/contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="py-3 lg:px-4 px-3 border-none mt-10  shadow-[10px 10px 10px -1px rgba(10,99,169,0.16), -10px,-10px,10px -1px rgba(255,255,255,0.70)] text-base rounded-3xl hover:opacity-50 bg-text text-primary font-semibold capitalize inline-block"
          onClick={() => {
            handleSetActive("/contact");
          }}
        >
          Start your Project today
        </Link>
      </section>
    </>
  );
};

export default Testimonial;

const testimonial = [
  {
    id: 1,
    text: " Oplano's expertise in React transformed our project. Hisdedication and skill set are unmatched!",
    name: "- Stephen., Data Scientist",
  },
  {
    id: 2,
    text: "Working with Oplano was a game-changer. His front-end skills brought our vision to life",
    name: "- Eric Pewee Flomo",
  },
  {
    id: 3,
    text: "Oplano's attention to detail and problem-solving abilities made our complex project a success.",
    name: "- Emily T., Senior Developer",
  },
];
