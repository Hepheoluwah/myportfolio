import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiNextdotjs,
  SiBootstrap,
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiSqlite,
  SiPython,
  SiGraphql,
  SiRedux,
  SiFramer,
  SiPostman,
  SiTypescript
} from "react-icons/si";

// Custom hook to detect mobile devices
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

// Single Skill component
const Skill = ({ name, icon: Icon, x, y, color }) => {
  return (
    <motion.div
      className="absolute cursor-pointer"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      <div className="group relative flex items-center justify-center">
        <Icon size={40} color={color} />
        <span className="absolute bottom-full mb-2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
          {name}
        </span>
      </div>
    </motion.div>
  );
};

// Skill positions for desktop
const skillsDesktop = [
  { name: "HTML", icon: SiHtml5, x: "-1vw", y: "-11vw", color: "#E34F26" },
  { name: "CSS", icon: SiCss3, x: "-15vw", y: "-8vw", color: "#1572B6" },
  { name: "GraphQL", icon: SiGraphql, x: "0vw", y: "-20vw", color: "#E10098" },
  { name: "JavaScript", icon: SiJavascript, x: "12vw", y: "-9vw", color: "#F7DF1E" },
  { name: "NodeJS", icon: SiNodedotjs, x: "2vw", y: "11vw", color: "#339933" },
  { name: "NextJS", icon: SiNextdotjs, x: "-18vw", y: "12vw", color: "#000000" },
  { name: "Bootstrap", icon: SiBootstrap, x: "28vw", y: "-5vw", color: "#7952B3" },
  { name: "ReactJS", icon: SiReact, x: "17vw", y: "2vw", color: "#61DAFB" },
  { name: "MongoDB", icon: SiMongodb, x: "15vw", y: "15vw", color: "#47A248" },
  { name: "Tailwind CSS", icon: SiTailwindcss, x: "-17vw", y: "2vw", color: "#38B2AC" },
  { name: "SQL", icon: SiSqlite, x: "-20vw", y: "-15vw", color: "#4479A1" },
  { name: "Python", icon: SiPython, x: "-30vw", y: "-7vw", color: "#3776AB" },
  { name: "TypeScript", icon: SiTypescript, x: "18vw", y: "-15vw", color: "#3178C6" },
  { name: "Redux", icon: SiRedux, x: "30vw", y: "5vw", color: "#764ABC" },
  { name: "Framer Motion", icon: SiFramer, x: "-30vw", y: "5vw", color: "#0055FF" },
  { name: "API Integration", icon: SiPostman, x: "1vw", y: "19vw", color: "#FF6C37" }
];

// Skill positions for mobile
const skillsMobile = [
  { name: "HTML", icon: SiHtml5, x: "-17vw", y: "2vw", color: "#E34F26" },
  { name: "CSS", icon: SiCss3, x: "-1vw", y: "-11vw", color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, x: "17vw", y: "1vw", color: "#F7DF1E" },
  { name: "NodeJS", icon: SiNodedotjs, x: "2vw", y: "30vw", color: "#339933" },
  { name: "NextJS", icon: SiNextdotjs, x: "-22vw", y: "20vw", color: "#000000" },
  { name: "Framer Motion", icon: SiFramer, x: "30vw", y: "-10vw", color: "#61DAFB" },
  { name: "Bootstrap", icon: SiBootstrap, x: "22vw", y: "-26vw", color: "#7952B3" },
  { name: "ReactJS", icon: SiReact, x: "0vw", y: "-30vw", color: "#61DAFB" },
  { name: "Mongo DB", icon: SiMongodb, x: "22vw", y: "25vw", color: "#47A248" },
  { name: "Tailwind CSS", icon: SiTailwindcss, x: "1vw", y: "15vw", color: "#38B2AC" },
  { name: "SQL", icon: SiSqlite, x: "-22vw", y: "-25vw", color: "#4479A1" },
  { name: "Python", icon: SiPython, x: "-35vw", y: "-2vw", color: "#3776AB" },
  { name: "API Integration", icon: SiPostman, x: "32vw", y: "8vw", color: "#FF6C37" }
];

const Skills = () => {
  const isMobile = useIsMobile();
  // Choose the appropriate skill data based on screen size
  const skillsData = isMobile ? skillsMobile : skillsDesktop;

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full 
          bg-circularLight dark:bg-circularDark 
          lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
          lg:bg-circularLightLg lg:dark:bg-circularDarkLg
          md:bg-circularLightMd md:dark:bg-circularDarkMd
          sm:bg-circularLightLg sm:dark:bg-circularDarkSm"
      >
        {/* Center logo */}
        <motion.div
          className="flex items-center justify-center font-bold text-5xl"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        {/* Render each Skill */}
        {skillsData.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </div>   
    </>
  );
};

export default Skills;
