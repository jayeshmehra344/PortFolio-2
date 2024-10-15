import React from "react";

function About() {
  return (
    <div
      name="About" // This is the scroll target
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
          Proficient in: Java, React.js, Node.js, Express.js, MongoDB, JavaScript, Python, C++<br />
          Experienced with: SQL, HTML & CSS
        </span>
        <br />
        <br />

        <h1 className="text-green-600 font-semibold text-xl">Professional Experience</h1>
        <span>
          <strong>Full Stack Developer</strong> - <em>"Saarthe"</em> (2024)<br />
          Developed "Saarthe," a MERN stack-based web application that helps newcomers navigate cities with the help of local insights and recommendations. Implemented dynamic maps and user-generated content for personalized navigation. Integrated a backend system using Node.js and Express.js for real-time location data, with MongoDB for storing user reviews and local data.<br /><br />

          <strong>Hackathon</strong>, (2023)<br />
          Developed a digital transaction authentication system using Large Language Models (LLMs) to analyze user behavior and authenticate transactions based on behavioral biometrics. Implemented machine learning models to extract unique behavioral features, enhancing the security of digital transactions without requiring traditional authentication methods like passwords or OTPs.<br /><br />
        </span>

        <br />
        <br />

        {/* Horizontal Rule */}
        <hr className="my-8 border-gray-300" /> {/* Styled horizontal rule */}
      </div>
    </div>
  );
}

export default About;
