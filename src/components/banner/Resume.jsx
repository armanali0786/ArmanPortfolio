import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaNode , FaJava} from "react-icons/fa";
import { SiMongodb,  } from "react-icons/si";
import './Media.css'
const Media = () => {
  return (
    <div className="MediaIcon flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between" >
        <div className=''>
          <div className="flex gap-4" >
            <a href='https://drive.google.com/file/d/1kXESDCaiGcuS9y2dZlA3PvWrU4uUdYQs/view?usp=sharing' target='_blank'>
           <button class="btn-donate">
               Download Resume
            </button>
            </a>
          </div>
        </div>
        
      </div>
  )
}

export default Media