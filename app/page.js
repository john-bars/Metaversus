import Image from "next/image";
import {
  About,
  Explore,
  Feedback,
  Footer,
  GetStarted,
  Hero,
  Insights,
  Navbar,
  WhatsNew,
  World,
} from "@/sections";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0 " />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0 " />
        <Feedback />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
