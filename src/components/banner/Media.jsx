import React from 'react'
import { FaGithub , FaTwitter, FaLinkedinIn, FaReact, FaNode , FaPhp } from "react-icons/fa";
import { SiMongodb,  } from "react-icons/si";
import './Media.css'
const Media = () => {
  return (
    <div className="MediaIcon flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div className=''>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <a href='https://www.linkedin.com/in/arman-ali-8383081ab' target='_blank'>
           <span className="bannerIcon">
              <FaLinkedinIn className='icons'/>
            </span>
           </a>
            <a href='https://github.com/armanali0786' target='_blank'>
            <span className="bannerIcon">
              <FaGithub  />
            </span>
            </a>
           <a href=' https://twitter.com/Arman_Ali_01?s=09' target='_blank'>
           <span className="bannerIcon">
              <FaTwitter />
            </span>
           </a>
          </div>
        </div>
        <div>
          <h2 className="SocialText text-base uppercase font-titleFont mb-4 ">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaNode/>
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaPhp  />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media