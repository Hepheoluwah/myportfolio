import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import HiddenDanceofInternet from "../../public/images/articles/ArticleImage1.png";
import webperformance from "../../public/images/articles/webperformance.png";
import AgileTeam from "../../public/images/articles/agileteam.png";
import cors from "../../public/images/articles/cors.png";
import git from "../../public/images/articles/git.png";
import DOM from "../../public/images/articles/DOM.png";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import web from "../../public/images/articles/webdev.png";


const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light 
    first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span
        className="text-primary dark:text-primaryDark font-semibold pl-4 sm:pl-0 xs:text-sm sm:self-start"
        style={{ fontSize: "18px" }}
      >
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark dark:bg-dark dark:border-light rounded-2xl">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark"
        rounded-br-3xl
      />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          quality={100}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalixe text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg ">
          {" "}
          {title}{" "}
        </h2>
      </Link>
      <p className="text-sm mb-2"> {summary} </p>
      <span className="text-primary dark:text-primaryDark font font-semibold">
        {" "}
        {time}{" "}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Ifeoluwa.dev | Articles Page</title>
        <meta
          name="description"
          content="Explore insightful articles on full-stack development, web technologies, software engineering, and industry trends. Stay updated with expert tips, tutorials, and guides by Ifeoluwa, a passionate developer dedicated to sharing knowledge."
        />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light ">
        <Layout classsName="pt-16">
          <AnimatedText
            text="Words Can Change The World! "
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="The Hidden Dance of the Internet: How You Get to Google with a Simple Click🤳🏾"
              summary="Have you ever stopped to think about what really goes on behind the scenes when you type 'https://www.google.com' into your browser and press Enter? It feels like a blink of an eye before you're whisked away to the Google homepage, but the journey is far more intricate than it seems. Let's peel back the curtain and take a closer look at the magic behind your internet adventure."
              time="3 min read"
              link="https://www.linkedin.com/pulse/hidden-dance-internet-how-you-get-google-simple-click-adeniran-oqqzf/?trackingId=3P%2BnnldSQ0O6t3e49Aptyg%3D%3D"
              img={HiddenDanceofInternet}
            />
            <FeaturedArticle
              title="The Building Blocks of the Web: How HTML, CSS, and JavaScript Bring Websites to Life"
              summary="Imagine you’re looking at the human body. The skeleton provides structure and support, the skin adds color and protection, and the brain brings everything to life with thoughts, emotions, and actions. Similarly, when you visit a website, you’re not just seeing a random collection of text and images. Instead, you’re experiencing a meticulously crafted digital space made possible by three essential tools: HTML, CSS, and JavaScript."
              time="4 min read"
              link="https://medium.com/@deniranifeoluwa/the-building-blocks-of-the-web-how-html-css-and-javascript-bring-websites-to-life-15274e4822a7"
              img={web}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16">
            All Articles
          </h2>
          <ul>
          <Article
              title="Meet the Agile Squad: Understanding Key Roles in Software Development"
              date="February 21st, 2025"
              link="https://medium.com/@deniranifeoluwa/meet-the-agile-squad-understanding-key-roles-in-software-development-957a58ae9bad"
              img={AgileTeam}
            />
            <Article
              title="The Hidden Dance of the Internet: How You Get to Google with a Simple Click"
              date="January 3rd, 2024"
              link="https://www.linkedin.com/pulse/hidden-dance-internet-how-you-get-google-simple-click-adeniran-oqqzf/?trackingId=3P%2BnnldSQ0O6t3e49Aptyg%3D%3D"
              img={HiddenDanceofInternet}
            />

            <Article
              title="The Building Blocks of the Web: How HTML, CSS, and JavaScript Bring Websites to Life"
              date="January 20th, 2024"
              link="https://medium.com/@deniranifeoluwa/the-building-blocks-of-the-web-how-html-css-and-javascript-bring-websites-to-life-15274e4822a7"
              img={web}
            />

            <Article
              title="Version Control with Git: A Developer's Guide"
              date="February 3rd, 2024"
              link="https://medium.com/@deniranifeoluwa/version-control-with-git-a-developers-guide-4c077690fe38"
              img={git}
            />

            <Article
              title="Web Performance Optimization: Unlocking the Speed Your Users Deserve"
              date="March 13th, 2024"
              link="https://medium.com/@deniranifeoluwa/web-performance-optimization-unlocking-the-speed-your-users-deserve-3723b4950641"
              img={webperformance}
            />

            <Article
              title="Understanding the Document Object Model (DOM): The Backbone of Web Pages"
              date="April 23rd, 2024"
              link="https://medium.com/@deniranifeoluwa/understanding-the-document-object-model-dom-the-backbone-of-web-pages-7dcbb4115a22"
              img={DOM}
            />

            <Article
              title="Understanding CORS: A Simplified Guide for Developers"
              date="May 20th, 2024"
              link="https://medium.com/@deniranifeoluwa/understanding-cors-a-simplified-guide-for-developers-370aa8a4ed64"
              img={cors}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
