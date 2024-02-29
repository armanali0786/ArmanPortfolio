import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-4xl font-bold">Career Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="CodeKaze June'23 - India's Biggest Hiring Challenge "
            subTitle="All India rank 4197 and college rank 1"
            result="Success"
            des="Coding Ninjas presents CodeKaze in association with Naukri ( Info-Edge) which is the largest and one of its kind pan-India hiring challenge for all Tech enthusiasts across the country. This is the flagship event of Coding Ninjas, where you can compete with coders across the country, get access to amazing jobs/internships with MNC companies."
          />
          <ResumeCard
            title="Online Coding Platform"
            subTitle="250+ problem solved on gfg and Leetcode."
            result="Success"
            des="LeetCode & GeeksforGeeks is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews."
          />
          <ResumeCard
            title="Codechef Coding Contest"
            subTitle="July Codechef Starter 2021 contest (38 rank ) globally."
            result="Success"
            des="CodeChef conducts 8 or 9 rated coding competitions every month with participation from programmers all across the globe. Each of these rated coding competitions has a different duration and a different style of ranking."
          />
        </div>
      </div>
      {/* <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achievement;