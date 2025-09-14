import React, { useState, useRef, useEffect } from 'react';

const PortfolioComponent = () => {
  const [projects] = useState([
    {
      id: 1,
      title: '3D product animation',
      description: '3d slider animation.',
      videoSrc: '/videos/3dProduct.mp4', 
      githubLink: 'https://github.com/MD-ALAMIN-HOSSEN/Js-DOM-manipulation/tree/main/3d%20product%20animation',
    },
    {
      id: 2,
      title: '3d slider animation',
      description: '3d slider animation.',
      videoSrc: '/videos/3dSlider.mp4', 
      githubLink: 'https://github.com/MD-ALAMIN-HOSSEN/Js-DOM-manipulation/tree/main/3d%20slider%20animation',
    },
    {
      id: 3,
      title: 'Cursor Effects',
      description: 'Custom cursor with CSS.',
      videoSrc: '/videos/cursorEffect.mp4', 
      githubLink: 'https://github.com/MD-ALAMIN-HOSSEN/Js-DOM-manipulation/tree/main/cursor%20effect',
    },
    {
      id: 4,
      title: 'Friend unfriend feature',
      description: 'Friend unfriend remove feature with DOM manipulation of button and label with JavaScript..',
      videoSrc: '/videos/buttons.mp4', 
      githubLink: 'https://github.com/MD-ALAMIN-HOSSEN/Js-DOM-manipulation/tree/main/button%20manipulation',
    },
    {
      id: 5,
      title: 'Instagram like feature',
      description: 'Like effect on card photo with CSS, JavaScript.',
      videoSrc: '/videos/like.mp4', 
      githubLink: 'https://github.com/MD-ALAMIN-HOSSEN/Js-DOM-manipulation/tree/main/instagram%20like%20feature',
    },
  ]);

  const [skills] = useState([
    'HTML', 'CSS', 'Tailwind CSS', 'React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'
  ]);


  const videoRefs = useRef([]);
  videoRefs.current = [];

  useEffect(() => {
    videoRefs.current.forEach(video => {
      if (video) {
        video.play().catch(error => {
          console.error("Video autoplay failed:", error);
        });
      }
    });
  }, [projects]); // Re-run effect

  const addToRefs = (el) => {
    if (el && !videoRefs.current.includes(el)) {
      videoRefs.current.push(el);
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="container mx-auto p-8 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 py-16">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
          <img
            src="/photo/profile.jpg" 
            alt="user Photo"
            className="w-full h-full object-cover rounded-full border-4 border-gray-700"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2">
            Hi, I'm <span className="text-blue-400">Your Name</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400">
            A Web Developer specializing in the MERN Stack.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="/path/to/your/cv.pdf" // CV file
              download
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container mx-auto p-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-6 py-3 bg-gray-800 text-blue-400 text-lg font-medium rounded-full shadow-md transition duration-300 transform hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto p-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden p-6 border border-gray-700 transition duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* video */}
              <div className="w-full mb-4 rounded-xl overflow-hidden shadow-md h-64">
                <video 
                  src={project.videoSrc}
                  ref={addToRefs} 
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <h3 className="text-2xl font-bold text-blue-300 mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              {/* GitHub Link Button */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-4 px-4 py-2 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-600 transition duration-300"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default PortfolioComponent;
