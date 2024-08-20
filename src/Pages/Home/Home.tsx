import AboutMe from "../../components/About_Me/AboutMe";
import Blog from "../../components/Blog/Blog";
import Connect from "../../components/Connect_With_Me/Connect";
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
      <Blog />
      <Connect />
    </>
  );
};

export default Home;
