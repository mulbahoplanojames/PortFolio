import { exprtise } from "../../constant/Constant";

const AboutMe = () => {
  return (
    <>
      <section
        className="bg-primary md:px-20 px-2 md:py-12 py-8 grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-14 w-full place-items-center"
        id="/about"
      >
        <div className="w-full ">
          <div className="w-full">
            <h1 className="md:text-4xl text-3xl text-text md:pb-4 pb-2">
              About Me
            </h1>
            <p className="text-text pb-6">
              As a passionate Front-end React Developer, I bring ideas to life
              through clean, efficient code. With a keen eye for design and a
              love for problem-solving, I create responsive and user-friendly
              web experiences that leave a lasting impression.
            </p>
            <p className="text-text pb-8 ">My Expertise Includes:</p>
          </div>
          <div className="w-full flex items-center gap-4 flex-wrap">
            {exprtise.map((exp) => (
              <button className="text-primary bg-text py-2 px-6 rounded-full">
                {exp.name}
              </button>
            ))}
          </div>
        </div>
        {/*//? contet two  */}
        <div className="w-full bg-background text-text md:px-10 px-5 md:py-18 py-10 rounded-md">
          <code>
            const AboutMe = () =&gt; <br />
            {<code>const [passion, setPassion] = useState("coding")</code>}{" "}
            <br />
            <br />
            <br />
            <code>
              useEffect(() =&gt; <br /> setPassion("creating amazing web
              experiences") <br /> , []) <br />
              <br />
              <br />
              return(
              <br />
              <br />
              Hello, I am Oplano James Mulbah, <br />
              <br />I passionate about Front-end React <br />
              <br /> );
            </code>
          </code>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
