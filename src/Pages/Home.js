import About from "./About";
import VideoBackground from "../Components/VideoBackground";

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
      <section className="relative z-20 bg-gray-900 text-white py-20 px-4 mt-80">
        <About/>
      </section>

    </div>
  );
};

export default Home;