import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import { motion } from "framer-motion";
// import DoggosApi from "../../public/images/projects/doggosApi.jpg";
import Adoptme from "../../public/images/projects/ADOPT ME LOGO 3.png";
import Edutrack from "../../public/images/projects/Edutrack.jpg"
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

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
      className="w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
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
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
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

const Project = ({ title, type, img, link, github, technologies }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={github}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
        <div className="mt-4 text-sm text-dark dark:text-light">
          <strong>Technologies Used:</strong> {technologies.join(", ")}
        </div>
      </div>
    </article>
  );
};

const projects = () => {
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
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout>
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="EduTrack!"
                img={Edutrack}
                summary="EduTrack is a comprehensive school management system designed to streamline class organization, student and faculty management, and administrative tasks. It enables seamless attendance tracking, performance assessment, and feedback delivery. With easy access to records, marks, and communication tools, EduTrack simplifies educational management for administrators, teachers, and students."
                link="https://edutrackconnect.netlify.app"
                github="https://github.com/Hepheoluwah/EduTrack"
                type="FeaturedProject"
                technologies={[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "ReactJS",
                  "Tailwind CSS",
                  "API Integration",
                  "Netlify"
                ]}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Adopt Me!"
                img={Adoptme}
                summary="The Adopt Me project is designed to facilitate pet adoption by providing a user-friendly interface for browsing and adopting pets. It aims to connect potential pet owners with animals available for adoption from various shelters or organizations."
                link="https://adopt-me-byifeoluwa.vercel.app/"
                github="https://github.com/Hepheoluwah/Adopt_me"
                type="FeaturedProject"
                technologies={[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "ReactJS",
                  "Tailwind CSS",
                  "API Integration",
                  "Vercel"
                ]}
              />
            </div>

            

            




            <div className="col-span-12 text-center mt-12 text-4xl font-extrabold text-primary dark:text-light tracking-wide">
              Stay tuned for more exciting projects coming soon!
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
