import React from "react";

function About() {
  return (
    <div
      name="About"  // This is the scroll target
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="text-left">
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Jayesh Mehra, a passionate web developer with a keen eye for the MERN stack. As a second-year BTech CSE student at SRM University, I've actively participated in hackathons and continuously seek to refine my skills by working on impactful and visually stunning software solutions.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Education</h1>
        <span>BTech in Computer Science and Engineering, SRM University, 2027</span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Skills & Expertise</h1>
        <span>
          Proficient in: JavaScript, Python, C++
          <br />
          Experienced with: React.js, Node.js, MongoDB, Express.js, Tailwind CSS
          <br />
          Strong grasp of: Front-end Development, API Integration, and Web Performance Optimization
        </span>
        <br />
        <br />
      </div>
    </div>
  );
}

export default About;
