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
          <strong>Full Stack Developer</strong> - <em>"CoinSight"</em> (2024)<br />
          Developed "CoinSight," a React-based cryptocurrency tracking application that provides real-time market data using the CoinGecko API. Integrated an SQL database for efficient data storage and retrieval. Designed an intuitive user interface for seamless navigation and enhanced user experience.<br /><br />

          <strong>Nova</strong>, (2023)<br />
          Developed "Nova," a virtual assistant using Python with PyQt5, Groq, and Cohere. Implemented a sleek and interactive GUI for user-friendly interactions. Integrated AI-powered natural language processing to assist with tasks, answer queries, and provide intelligent responses. Leveraged Groq and Cohere for enhanced conversational capabilities, making Nova an efficient and responsive assistant.<br /><br />
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
