import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { profile } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={profile}
        alt="profileimage"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Arman Ali</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Welcome to my profile! I am an enthusiastic and dedicated Full Stack developer.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7319977276</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">armanali.shaikh77@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href='https://www.linkedin.com/in/arman-ali-8383081ab' target='_blank'>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href='https://www.facebook.com/profile.php?id=100031325293941&mibextid=ZbWKwL' target='_blank'>
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a href=' https://twitter.com/Arman_Ali_01?s=09' target='_blank'>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft