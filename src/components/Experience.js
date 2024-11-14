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
    <div className="my-64">
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
            address="Remote"
            work="As a Tools Automation Engineer at Huawei Technologies (2021–2024), My role involved collaborating with cross-functional teams to analyze automation requirements and implement integrated solutions aimed at improving efficiency and reducing operational costs. Also
            Identify opportunities for automation across various departments and processes to drive continuous improvement initiatives."
          />

          <Details
            position="Software Developer"
            company="GGMSS"
            time="2019-2020"
            address="Kogi State, Nigeria."
            work="I collaborate closely with designers and backend developers to build functional, responsive interfaces. My approach emphasizes clean, efficient, and maintainable code. I implement interactive features to meet project requirements and actively engage in code reviews to uphold best practices, contributing to the overall success of projects"
          />

          <Details
            position="IT Operations Intern"
            company="Federal Radio Corporation of Nigeria"
            time="2018"
            address="Oyo state, Nigeria"
            work="As an IT Operations Intern, I specialize in routine network monitoring, leveraging tools to promptly identify and resolve issues with broadcasting equipment and communication systems. My responsibilities include writing and debugging code for software maintenance, implementing new features, and updating existing software as required. Additionally, I excel in configuring and optimizing network devices, offering technical support to radio station staff and colleagues encountering network or software-related challenges. I actively contribute to the resolution of technical problems and inquiries, ensuring smooth network and software functionality."
          />

        </ul>
      </div>
    </div>
  );
};

export default Experience;
