import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
    <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:'spring'}}
      >
        <h3 className="capitlize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-28">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-star justify-between ml-4 xs:ml-2">
          <Details
            position="Tools Automation Engineer"
            company="Huawei"
            time="2021-2024"
            address="Lagos State, Nigeria"
            work="As a Tools Automation Engineer at Huawei Technologies, I collaborated with cross-functional teams to analyze automation requirements and implement integrated solutions, enhancing operational efficiency and reducing costs. I identified opportunities for automation across various departments and processes, driving continuous improvement initiatives and streamlining workflows to support the company's long-term goals."
          />

          <Details
            position="Software Developer"
            company="GGMSS"
            time="2019-2021"
            address="Kogi State, Nigeria."
            work="

At GGMSS, I developed and optimized responsive web applications using ReactJS, TypeScript, Tailwind CSS, and Redux, following ES6 best practices. I enhanced existing tools by integrating new APIs, improving data retrieval speed. Additionally, I assisted in testing and debugging secure communication protocols, ensuring industry-standard compliance. Through peer code reviews, I helped reduce production errors. I also integrated RESTful APIs, implemented CI/CD pipelines, and collaborated with designers on Figma for seamless design integration."
          />

          <Details
            position="IT Operations Intern"
            company="Federal Radio Corporation of Nigeria"
            time="2018"
            address="Oyo state, Nigeria"
            work="
As an IT Operations Intern, I focus on network monitoring, quickly identifying and resolving issues with broadcasting equipment and communication systems. I handle software maintenance, write and debug code, and implement new features. Additionally, I optimize network devices and provide technical support to staff, ensuring smooth network and software functionality."
          />

        </ul>
      </div>
    </div>
  );
};

export default Experience;
