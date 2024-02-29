import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8">
          <ResumeCard
            title=" BE in Information Technology"
            subTitle=" Gujarat Technological University (2019 - 2023)"
            result="8.6/10"
            des="• I recently completing my Bachelor's degree in Information Technology.
                  with a passion for building efficient and scalable systems."
          />
          <ResumeCard
            title="Higher Seconday School in Science"
            subTitle="SBBS Degree College (2017 - 2019)"
            result="7.1/10"
            des="• I focus on completing coursework, preparing for board exams, and exploring potential career paths."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="JPT High School (2016 - 2017)"
            result="6.9/10"
            des="• I strive to excel academically, engage in extracurricular activities, and make decisions about their future educational endeavors."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Web Developer"
            subTitle="9Brainz (July 2023 - Present)"
            result="Rajkot"
            // des="• 405-Live event management system that easiest and most convenient way to book tickets for your favourite shows ." 
            des="• Designed and developed dynamic and responsive websites using Reactjs, Worked with REST APIs to retrieve and display data from databases" 
            // desc="• Worked with REST APIs to retrieve and display data from databases." 
            
          />
          <ResumeCard
            title="MERN Stack Developer (Intern)"
            subTitle="TechnoMark Solutions LLP (Jan 2023 - June 2023)"
            result="Ahmedabad"
            des="• Create REST API /user interface by using standard Reactjs/Nodejs/Express & MongoDB practices."
          />
          <ResumeCard
            title="Web Developer"
            subTitle="LetsGrowMore - (Jun 2022 - July 2022)"
            result="remote"
            des="• Dedicated time to personal growth, attending regular training to broaden web development capabilities."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education