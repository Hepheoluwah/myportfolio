import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitlize font-bold text-2xl sm:text-xl xs:text-lg">{type}&nbsp;</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-28">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-star justify-between ml-4 xs:ml-2">
  


<Details
            type="ALX Software Engineering Certification"
            time="2023-2024"
            place="Holberton School"
            info="
As a proud graduate of the ALX | Holberton Software Engineering Program, I underwent rigorous training in software development, covering key areas like programming, data structures, algorithms, and automation testing. This hands-on program shaped me into a skilled Full-Stack Developer, ready to tackle real-world problems and apply cutting-edge technologies to create scalable solutions. 
The experience provided me with both technical expertise and problem-solving skills, preparing me for a dynamic career in the fast-evolving tech world."
          />

<Details
            type="Responsive Web Design Certification"
            time="2022"
            place="Online Coursework FreeCodeCamp"
            info="Through FreeCodeCamp, I gained a strong foundation in responsive web design, mastering key technologies like HTML, CSS, Flexbox, CSS Grid, media queries, and JavaScript to create mobile-friendly, interactive, and visually appealing websites. This certification marked the beginning of my journey as a software developer, transforming my skills from a complete beginner to a confident, capable developer.  "
          />

<Details
            type="Bachelor Of Science In Computer Science"
            time="2015-2019"
            place="Ajayi Crowther Universty"
            info="Ajayi Crowther University (ACU) played a pivotal role in shaping my journey as a tech professional. I gained specialized knowledge in software development, data science, cybersecurity, artificial intelligence, machine learning, and cloud computing. The university's commitment to academic excellence, innovation, and ethical values, combined with hands-on projects and a rigorous curriculum, provided me with a strong foundation for a successful career in technology, equipping me with the skills to thrive in today's fast-evolving tech landscape."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
