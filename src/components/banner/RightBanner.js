import React from 'react'
import { bannerImg } from "../../assets/index";
import { myimage } from '../../assets/index';
import './RightBanner.css'
const RightBanner = () => {
  return (
    <div className=" w-full lgl:w-1/2 flex justify-center items-center relative pt-5 ">
      <img
        className=" RightBannerImg  w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10 "
        src={myimage}
        alt="myimage"
      />
      <div className=" mainLeftBar absolute bottom-0 w-[350px] h-[300px] lgl:w-[400px] lgl:h-[400px] rounded-2xl bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner