import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import profilePic2 from "../../public/images/profile/Animefyme2.png";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";
import { BiMouse } from "react-icons/bi";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

// Custom hook to detect mobile devices
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

const About = () => {
  const isMobile = useIsMobile();
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    // If mobile, don't show the scroll indicator.
    if (isMobile) {
      setShowIndicator(false);
      return;
    }
    
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.body.offsetHeight - 50; // Adjust threshold as needed
      if (scrollPosition >= threshold) {
        setShowIndicator(false);
      } else {
        setShowIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once on mount to set the initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <>
      <Head>
        <title>Ifeoluwa | About Page</title>
        <meta
          name="description"
          content="Discover Ifeoluwa&apos;s expertise in full-stack development, software engineering, and web application design. Learn more about their journey, skills, and projects. Connect with a passionate developer focused on innovative solutions."
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 items-center">
            {/* Profile Image */}
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic2}
                alt="ifeoluwa"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
              />
            </div>
            {/* About Text */}
            <div className="col-span-3 flex flex-col justify-center xl:col-span-4 md:order-2 md:col-span-8 space-y-4">
              <h2 className="mb-4 text-xl font-bold uppercase text-dark dark:text-light">
                About Me
              </h2>
              <p className="font-medium">
                Hi, I&apos;m Ifeoluwa 👋, a passionate software engineer dedicated to
                transforming bold ideas into innovative digital experiences. I
                use modern web technologies to build efficient and impactful
                solutions.
              </p>
              <p className="font-medium">
                I&apos;m also exploring cloud computing and AI to enhance automation,
                scalability, and security—always looking for smarter ways to
                optimize systems.
              </p>
              <p className="font-medium">
                Ready to turn visionary ideas into reality?{" "}
                <a
                  href="mailto:your-email@example.com"
                  className="text-blue-500 hover:underline"
                >
                  Let’s connect!
                </a>
              </p>
            </div>
            {/* Stats Section */}
            <div className="col-span-2 flex flex-col justify-between items-center xl:col-span-8 xl:flex-row md:order-3 md:col-span-8 space-y-0 xl:space-y-2">
              <div className="flex flex-col items-center justify-center space-y-2">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark dark:text-light text-center">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark dark:text-light text-center">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark dark:text-light text-center">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
        {/* Only render ScrollDownIndicator on non-mobile devices */}
        {!isMobile && showIndicator && <ScrollDownIndicator />}
      </main>
    </>
  );
};

export default About;
