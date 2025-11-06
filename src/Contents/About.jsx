import React, { useState } from 'react';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="About" className="w-10/12 mx-auto">
      <h1 className="text-3xl text-center font-bold pb-8">About Me</h1>
      <article className="text-gray-400">
        <p>
          I’m a young developer from Chittagong, Bangladesh. Passionate about crafting seamless, user-friendly
          experiences through thoughtful design and efficient code. I thrive at the intersection of frontend and
          backend development, ensuring applications are both aesthetically pleasing and smooth in performance.
        </p>

       
        <div
          className={`sm:block ${showMore ? 'block' : 'hidden'}`}
        >
          <p className="mt-4">
            Currently, I’m focused on growing my skills in React and Node.js. Through self-learning and personal
            projects, I’ve gained hands-on experience building responsive web applications with modern JavaScript
            frameworks. I love solving complex problems with elegant, user-focused solutions while maintaining
            high code quality.
          </p>

          <p className="mt-4">
            Development is my creative outlet. It allows me to express my ideas and bring them to life. Outside of
            coding, I enjoy exploring new technologies, learning online, photography, and long cycle rides every
            weekend.
          </p>

          <p className="mt-4">
            I’m always open to impactful collaborations and new challenges.
          </p>
        </div>

        <div className="sm:hidden mt-4">
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-[#e0f0e4]
     hover:underline focus:outline-none"
          >
            {showMore ? 'See less' : 'See more'}
          </button>
        </div>
      </article>
    </div>
  );
};

export default About;
