import AboutMe from "../../components/About_Me/AboutMe";
import { Hero } from "../../components/Hero/Hero";
import MyServices from "../../components/My_Services/MyServices";
import Portfolio from "../../components/Portfolio/Portfolio";
import { GlobeDemo } from "../../components/World/World";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <MyServices />
      <GlobeDemo />
      <Portfolio />
    </>
  );
};

export default Home;
