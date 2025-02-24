import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { BiMouse } from "react-icons/bi"; // Import mouse icon

import Adoptme from "../../public/images/projects/ADOPT ME LOGO 3.png";
import Edutrack from "../../public/images/projects/Edutrack.png";
import Burgerstore from "../../public/images/projects/Burgerstore.png";
import Coffeshop from "../../public/images/projects/coffeshop.png";
import interiordesign from "../../public/images/projects/interiordesign.png";
import TransitionEffect from "@/components/TransitionEffect";
import Ticz from "../../public/images/projects/ticz.png";
import ColorQuest from "../../public/images/projects/colorquest.png";
import ProfileCard from "../../public/images/projects/profilecard.png";
import AitextProcessor from "../../public/images/projects/aitextprocessor.png";
import MyWebsite from "../../public/images/projects/mywebsite.png";

// Framer Motion Image
const FramerImage = motion(Image);

// Custom hook to detect mobile devices (viewport width less than 768px)
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return isMobile;
};

// AnimatedNumbers component for stats
const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  technologies,
}) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] 
        bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between p-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
        <div className="mt-4 text-sm text-dark dark:text-light">
          <strong>Technologies Used:</strong> {technologies.join(", ")}
        </div>
      </div>
    </article>
  );
};

const ScrollDownIndicator = () => {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center z-50">
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <BiMouse size={30} className="text-dark dark:text-light" />
      </motion.div>
      <p className="mt-2 text-sm text-dark dark:text-light">Scroll Down</p>
    </div>
  );
};

const Projects = () => {
  const isMobile = useIsMobile();
  const [technologyFilter, setTechnologyFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("");
  const [showIndicator, setShowIndicator] = useState(true);

  // All project data with additional "difficulty" and updated "type" fields
  const projectsData = [
    {
      id: 1,
      title: "EduTrack!",
      img: Edutrack,
      summary:
        "Streamlining school management with easy attendance, performance tracking, and admin tasks",
      link: "https://edutrackconnect.netlify.app",
      github: "https://github.com/Hepheoluwah/EduTrack",
      type: "Full-stack",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind",
        "API Integration",
        "MongoDB Integration",
        "Netlify",
        "Render"
      ],
      difficulty: "Intermediate",
    },
    {
      id: 2,
      title: "Adopt Me!",
      img: Adoptme,
      summary:
        "A user-friendly platform connecting potential pet owners with adoptable pets",
      link: "https://adopt-me-byifeoluwa.vercel.app/",
      github: "https://github.com/Hepheoluwah/Adopt_me",
      type: "Front-end",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind",
        "API Integration",
        "Vercel",
      ],
      difficulty: "Intermediate",
    },
    {
      id: 3,
      title: "Ticket Generator",
      img: Ticz,
      summary:
        "Easily create and download tickets for your conference events.",
      link: "https://conferenceticketgenerator.vercel.app/",
      github:
        "https://github.com/Hepheoluwah/HNG/tree/main/conference-ticket-generator",
      type: "Front-end",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
      difficulty: "Intermediate",
    },
    {
      id: 4,
      title: "Color Quest Game",
      img: ColorQuest,
      summary:
        "A fun and interactive game to test your color-matching skills.",
      link: "https://colorquest-sage.vercel.app/",
      github:
        "https://github.com/Hepheoluwah/HNG/tree/main/Color%20Genius",
      type: "Front-end",
      technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
      difficulty: "Beginner",
    },
    {
      id: 5,
      title: "Interior Design Website.",
      img: interiordesign,
      summary:
        "Inspiring interior designs website tailored to client style and needs",
      link: "https://interior-tcj.netlify.app/",
      github: "https://github.com/Hepheoluwah/interior-web",
      type: "Front-end",
      technologies: ["React", "Tailwind", "Framer-motion", "Netlify"],
      difficulty: "Intermediate",
    },
    {
      id: 6,
      title: "AI for Text Processing",
      img: AitextProcessor,
      summary: "Detect, translate, and summarize text with ease",
      link: "https://ai-text-processing-umber.vercel.app/",
      github:
        "https://github.com/Hepheoluwah/HNG/tree/main/ai-text-processing",
      type: "Front-end",
      technologies: [
        "JavaScript",
        "React",
        "Tailwind",
        "API Integration",
        "Chrome API",
        "Vercel"
      ],
      difficulty: "Intermediate",
    },
    {
      id: 7,
      title: "Profile Card",
      img: ProfileCard,
      summary:
        "A simple and stylish way to display user information at a glance.",
      link: "https://0xifeoluwa.vercel.app/",
      github:
        "https://github.com/Hepheoluwah/HNG/tree/main/Profile%20Card",
      type: "Front-end",
      technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
      difficulty: "Beginner",
    },
    {
      id: 8,
      title: "Coffee shop Website.",
      img: Coffeshop,
      summary:
        "Browse our menu, order online, find nearby locations, and stay updated on special offers and events.",
      link: "https://coders-coffee.netlify.app/",
      github: "https://github.com/Hepheoluwah/coffee-cafe",
      type: "Front-end",
      technologies: ["React", "Tailwind", "Framer-motion", "Netlify"],
      difficulty: "Beginner",
    },
    {
      id: 9,
      title: "Burger Store",
      img: Burgerstore,
      summary:
        "Lightweight landing page built without a framework, enabling users to browse the menu and book reservations.",
      link: "https://quizzical-swartz-cda92c.netlify.app/",
      github: "https://github.com/Hepheoluwah/burgerstore",
      type: "Front-end",
      technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
      difficulty: "Beginner",
    },
    {
      id: 10,
      title: "My Personal Website",
      img: MyWebsite,
      summary:
        "a dynamic portfolio that showcases a collection of innovative projects, reflecting my journey and expertise in web development.",
      link: "https://ifeoluwa-dev.vercel.app/",
      github: "https://github.com/Hepheoluwah/myportfolio",
      type: "Front-end",
      technologies: ["NextJS", "Tailwind", "Framer-motion", "Vercel"],
      difficulty: "Intermediate",
    },
  ];

  // Compute unique filter options
  const uniqueTechnologies = [
    ...new Set(projectsData.flatMap((project) => project.technologies)),
  ];
  const uniqueTypes = [...new Set(projectsData.map((project) => project.type))];
  const uniqueDifficulties = [
    ...new Set(projectsData.map((project) => project.difficulty)),
  ];

  // Filter projects based on selected filters
  const filteredProjects = projectsData.filter((project) => {
    const matchesTechnology = technologyFilter
      ? project.technologies.includes(technologyFilter)
      : true;
    const matchesType = typeFilter ? project.type === typeFilter : true;
    const matchesDifficulty = difficultyFilter
      ? project.difficulty === difficultyFilter
      : true;
    return matchesTechnology && matchesType && matchesDifficulty;
  });

  // Scroll detection to toggle scroll indicator
  useEffect(() => {
    if (isMobile) {
      setShowIndicator(false);
      return;
    }
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 50;
      if (scrollPosition >= threshold) {
        setShowIndicator(false);
      } else {
        setShowIndicator(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <>
      <Head>
        <title>Ifeoluwa.dev | Projects Page</title>
        <meta
          name="description"
          content="Browse through Ifeoluwa's portfolio of innovative projects, showcasing expertise in full-stack development, web applications, and cutting-edge technologies. Discover real-world solutions built with passion and precision."
        />
      </Head>

      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light px-2 sm:px-4 md:px-8">
        <Layout>
          <AnimatedText
            text="Bringing Visions to Reality!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          {/* Filter Controls Section */}
          <div className="mb-8">
            <p className="text-sm text-dark dark:text-light mb-2">
              Use the dropdowns below to filter projects by technology, type, or difficulty. You can also click on a tag to quickly see matching projects.
            </p>

            {/* Responsive Dropdowns using Grid */}
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 mb-4">
              <select
                value={technologyFilter}
                onChange={(e) => setTechnologyFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                <option value="">All Technologies</option>
                {uniqueTechnologies.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>

              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                <option value="">All Types</option>
                {uniqueTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              >
                <option value="">All Difficulties</option>
                {uniqueDifficulties.map((diff) => (
                  <option key={diff} value={diff}>
                    {diff}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-2">
  {uniqueTechnologies.map((tech) => (
    <span
      key={tech}
      onClick={() =>
        setTechnologyFilter(technologyFilter === tech ? "" : tech)
      }
      className={`cursor-pointer px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm transition-colors duration-300 ${
        technologyFilter === tech
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
      }`}
    >
      {tech}
    </span>
  ))}
</div>

            {/* Tag Cloud for Technologies
            <div className="flex flex-wrap gap-4 sm:gap-2">
              {uniqueTechnologies.map((tech) => (
                <span
                  key={tech}
                  onClick={() => setTechnologyFilter(tech)}
                  className={`cursor-pointer px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm transition-colors duration-300 ${
                    technologyFilter === tech
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div> */}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:gap-12 grid-cols-1">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div key={project.id}>
                  <FeaturedProject
                    title={project.title}
                    img={project.img}
                    summary={project.summary}
                    link={project.link}
                    github={project.github}
                    type={project.type}
                    technologies={project.technologies}
                  />
                </div>
              ))
            ) : (
              <div className="text-center">
                No projects match the selected filters.
              </div>
            )}
            <div className="text-center mt-12 text-4xl font-extrabold text-gray-900 dark:text-light tracking-wide">
              Stay tuned for more exciting projects coming soon!
            </div>
          </div>
        </Layout>
        {/* Only render the ScrollDownIndicator on non-mobile devices */}
        {!isMobile && showIndicator && <ScrollDownIndicator />}
      </main>
    </>
  );
};

export default Projects;
