import About from "./About";
import VideoBackground from "../Components/VideoBackground";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="relative mb-240">
      <VideoBackground />

      <div className="relative z-10 text-white flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold">Ryan Erickson</h1>
        <div className="mt-4 text-xl">
          Software Engineer
        </div>
      </div>

      {/* About Me Section */}
      
      <section id="about" className="relative z-20 text-transparent px-4 mt-80">
      </section>
      {/*
      <section className="relative z-20 text-white">
        <Contact/>
      </section>
      */}
    </div>
  );
};

export default Home;