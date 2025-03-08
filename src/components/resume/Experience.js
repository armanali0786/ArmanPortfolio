import React from "react";
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard";
const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         <ResumeCard
            title="Web Developer"
            subTitle="Cipher Craft Pvt Ltd. - (Sep 2024 - Present)"
            result="Rajkot"
            des="• Developed dynamic and responsive websites using Reactjs,Three.js, Nodejs, showcasing expertise in creating visually appealing and user-friendly interfaces."
            desc="• Optimized application performance and efficiency by identifying and resolving technical issues and bugs."
          />
         <ResumeCard
            title="Web Developer"
            subTitle="9Brainz (July 2023 - July 2024)"
            result="Rajkot"
            des="• Create REST API /user interface by using standard Reactjs/Nodejs/Express & MongoDB practices ." 
            desc="• A basic  react app 405-Live event management system that allows users to book tickets for a wide range of shows, from live performances and dance shows to DJ nights and comedy gigs. With a seamless user interface, online payment system, and detailed event listings, 405-Live is the easiest and most convenient way to book tickets for your favourite shows.." 
          />
          <ResumeCard
            title="MERN Stack Developer (Intern)"
            subTitle="TechnoMark Solutions LLP (Jan 2023 - June 2023)"
            result="Ahmedabad"
            des="• Create REST API /user interface by using standard Reactjs/Nodejs/Express & MongoDB practices ." 
            desc="• A basic MERN stack dashboard project that displays user signup data with a Line Chart and Pie Chart representing signup counts by month. It also includes a data table showing detaileduser information ." 
          />
         
          {/* <ResumeCard
            title="Web Developer"
            subTitle="The Spark Foundation - (oct 2022 - nov 2022)"
            result="remote"
            des="• Design easy user interfaces and great user experiences for the digital platforms of small companies ."
             desc="• Building secure and user-friendly platform that allows customers to perform essential financial transactions ."
          /> */}
        </div>
      </div>
      <div>
      </div>
    </motion.div>
  );
};

export default Experience;