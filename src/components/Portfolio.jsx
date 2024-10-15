import React from "react";

function PortFolio() {
  const projects = [
    {
      id: 1,
      name: "QR Code Generator",
      description: "A simple app that generates QR codes for URLs and text inputs.",
      sourceCode: "https://github.com/jayeshmehra344/QR-code-generator",
      siteLink: "https://jayeshmehra344.github.io/QR-code-generator/",
    },
    {
      id: 2,
      name: "Weather App",
      description: "A weather forecasting app that provides real-time data using OpenWeather API.",
      sourceCode: "https://github.com/jayeshmehra344/Weather-App",
      siteLink: "https://jayeshmehra344.github.io/Weather-App/",
    },
    {
      id: 3,
      name: "Portfolio",
      description: "A personal portfolio showcasing skills, projects, and experience as a web developer.",
      sourceCode: "https://github.com/jayeshmehra344/potfoli-o",
      siteLink: "https://jayeshmehra344.github.io/potfoli-o/",
    },
    {
      id: 4,
      name: "Time Vault",
      description: "An application to track time and store important moments and tasks securely.",
      sourceCode: "https://github.com/jayeshmehra344/Time-Vault",
      siteLink: "https://jayeshmehra344.github.io/Time-Vault/",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div className="text-left">
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold text-green-600 mb-5">
          Featured Projects
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {projects.map(({ id, name, description, sourceCode, siteLink }) => (
            <div
              key={id}
              className="md:w-[300px] md:h-auto border-[2px] rounded-lg shadow-lg p-5 hover:scale-105 transition duration-300 ease-in-out"
            >
              <h2 className="text-xl font-bold text-green-600 mb-3">{name}</h2>
              <p className="text-gray-700 mb-4">{description}</p>
              <div className="space-x-4">
                <a
                  href={siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Visit Site
                </a>
                <a
                  href={sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Horizontal Rule */}
        <hr className="my-8 border-gray-300" /> {/* Styled horizontal rule */}
      </div>
    </div>
  );
}

export default PortFolio;
