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
            subTitle="9Brainz (July 2023 - Present)"
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
          <ResumeCard
            title="Web Developer"
            subTitle="LetsGrowMore - (Jun 2022 - July 2022)"
            result="remote"
            des="• Dedicated time to personal growth, attending regular training to broaden web development capabilities ."
            desc="• Building Websites and applications by writing code(Html,Css,Javascript) ."
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
        {/* <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div> */}
        {/* <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div> */}
      </div>
    </motion.div>
  );
};

export default Experience;