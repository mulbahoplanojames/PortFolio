// Importing the useEffect hook from the React library
import { useEffect } from "react";

// Importing the Link component from the react-scroll library
import { Link, Events, scrollSpy } from "react-scroll";

const Testimonial = () => {
  useEffect(() => {
    // Defining the handleBegin function that will be registered as an event handler
    // for the 'begin' event
    const handleBegin = (to: string, element: HTMLElement) => {
      // Logging the 'to' and 'element' parameters to the console when the 'begin' event is triggered
      console.log("begin", to, element);
    };
    // Registering the handleBegin function as an event handler for the 'begin' event
    // using the Events.scrollEvent.register method
    Events.scrollEvent.register("begin", handleBegin);

    // Defining the handleEnd function that will be registered as an event handler
    // for the 'end' event
    const handleEnd = (to: string, element: HTMLElement) => {
      // Logging the 'to' and 'element' parameters to the console when the 'end' event is triggered
      console.log("end", to, element);
    };
    // Registering the handleEnd function as an event handler for the 'end' event
    // using the Events.scrollEvent.register method
    Events.scrollEvent.register("end", handleEnd);

    // Updating the scrollSpy when the component mounts
    // scrollSpy.update() is called to update the scroll spy
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts
    // The cleanup function removes the 'begin' and 'end' events from the Events.scrollEvent
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // Defining the handleSetActive function that will be called when a link is activated
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
        {/* Rendering the Link component for the contact page */}
        <Link
          to="/contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="py-3 lg:px-4 px-3 border-none mt-10  shadow-[10px 10px 10px -1px rgba(10,99,169,0.16), -10px,-10px,10px -1px rgba(255,255,255,0.70)] text-base rounded-3xl hover:opacity-50 bg-text text-primary font-semibold capitalize inline-block"
          onClick={() => {
            // Calling the handleSetActive function when the link is activated
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

// Defining the testimonial array of objects
const testimonial = [
  {
    id: 1,
    text: "Oplano's expertise in React transformed our project. His dedication and skill set are unmatched!",
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
