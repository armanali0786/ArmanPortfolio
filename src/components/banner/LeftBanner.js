import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import Resume from './Resume';
import './LeftBanner.css'
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "MERN Stack Developer", "Web Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="LeftBannerText text-6xl font-bold text-white">
          Hi, I'm <span className="spinText text-designColor capitalize">Arman Ali</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
          className="spinneText"
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          {/* I am an enthusiastic and dedicated backend software developer, 
        recently completing my Bachelor's degree in Information Technology.  */}
          As a Software Developer with 2+ years of experience in frontend and backend technologies, I have a strong passion for building efficient and scalable systems. 
          I am proficient in technologies like Node.js, React.js, Next.js, JavaScript, and Core Java, with a solid understanding of data structures and algorithms
          {/* Innovative Software Developer with extensive experience in designing, developing, and deploying robust 
          software solutions. Skilled in both front-end and back-end development, utilizing a diverse range of 
          programming languages and frameworks and having 2+ years of experience in both. Proven ability to solve 
          complex problems and deliver high-quality, scalable applications. Detail-oriented, collaborative, and 
          committed to continuous learning and adaptation to emerging technologies.  */}
        </p>
      </div>
      {/* Media */}
      <Media />
      <Resume />
    </div>
  );
}

export default LeftBanner