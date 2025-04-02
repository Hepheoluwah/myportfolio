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
            work="As a Tools Automation Engineer at Huawei Technologies, I worked closely with cross-functional teams to understand automation needs and implement integrated solutions. This helped improve operational efficiency and cut costs. I focused on identifying automation opportunities across different departments, driving continuous improvement, and streamlining workflows to align with the company&apos;s long-term objectives."
          />

          <Details
            position="Software Developer"
            company="GGMSS"
            time="2019-2021"
            address="Kogi State, Nigeria."
            work="At GGMSS, I developed and optimized responsive web applications using ReactJS, TypeScript, Tailwind CSS, and Redux, following ES6 best practices. I worked on improving existing tools by integrating new APIs, which boosted data retrieval speed. I also played a key role in testing and debugging secure communication protocols to ensure compliance with industry standards. Through peer code reviews, I helped minimize production errors. Additionally, I integrated RESTful APIs, and collaborated with designers on Figma to ensure smooth design implementation"
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
