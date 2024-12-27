function Experience() {
    return (
      <div id="experience">
        <section className="relative z-20 bg-slate-800 text-white pt-20 px-4">
          <div className="mx-auto max-w-5xl p-5 rounded-3xl">
            <h2 className="text-4xl font-semibold mb-6">Experience</h2>
  
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold">Technical Director/Full Stack Developer</h3>
                <p className="text-lg font-medium text-slate-300"><a href='https://htfpurdue.org'>Hack the Future Purdue</a> -{">"} September 2023 - Current</p>
                <ul className="list-disc ml-5 mt-3">
                  <li>Manage cloud hosting of web-based projects made for various non-profit groups</li>
                  <li>Worked with my team to build a calendar/scheduling website for our local YWCA organization</li>
                  <li>Connected our React project to a MongoDB/Express back-end to allow for storage of scheduling data</li>
                  <li>Organized and hosted multiple workshops to teach 60+ new members both front and back end web development skills</li>
                </ul>
              </div>
  
              <div>
                <h3 className="text-2xl font-bold">Computer Vision and Controls Developer</h3>
                <p className="text-lg font-medium text-slate-300"><a href='https://purduearc.com/'>Autonomous Robotics Club</a> -{">"} September 2024 - Current</p>
                <ul className="list-disc ml-5 mt-3">
                  <li>Working as part of the software subteam of the robotic dog/drone project</li>
                  <li>Working on development of a LiDAR-based vision/object-detection system</li>
                  <li>Developing path-planning algorithms to allow our robot to utilize the vision system</li>
                  <li>Implementing a ROS-based framework to incorporate all the controls and sensors of our robot</li>
                </ul>
              </div>
  
              <div>
                <h3 className="text-2xl font-bold">Programming Lead/Team Captain</h3>
                <p className="text-lg font-medium text-slate-300"><a href='https://kingtec2169.com/'>KING TeC Robotics</a> -{">"} September 2019 - August 2023</p>
                <ul className="list-disc ml-5 mt-3">
                  <li>Directed a software team of 2-4 members to fully program a completely new robot every year</li>
                  <li>Implemented a more modern code structure to allow support for the kinematics of a new multi-directional drivetrain,
                  resulting in greatly improved driver control</li>
                  <li>Worked on a computer vision system using OpenCV and Python to identify various colored targets and determine their
                  orientation. This system was also able to identify AprilTags and use them to estimate the robot’s position</li>
                  <li>Created an efficient odometer system to track the robot’s movement, allowing for successful autonomous robot control</li>
                </ul>
              </div>
  
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Experience;
  