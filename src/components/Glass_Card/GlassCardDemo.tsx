import { GlareCard } from "../ui/glare-card"; // Adjust the path according to your file structure

export function GlareCardDemo() {
  return (
    <GlareCard className="w-full h-fit bg-background text-text md:px-10 px-5 md:py-18 py-10 rounded-md">
      <code>
        const AboutMe = () =&gt; <br />
        {<code>const [passion, setPassion] = useState("coding")</code>} <br />
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
    </GlareCard>
  );
}
