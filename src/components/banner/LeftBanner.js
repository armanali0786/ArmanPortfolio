import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import './LeftBanner.css'
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder", "MERN Stack Developer", "Web Developer"],
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
          As an aspiring Software Developer, I have a strong
          passion for building efficient and scalable systems. I am skilled in
          programming languages like Nodejs, Reactjs, Nextjs, JavaScript, Core Java
          and have a good understanding of data structures and algorithms.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}

export default LeftBanner