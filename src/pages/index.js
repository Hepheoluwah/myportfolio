import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import HireMe from "@/components/HireMe";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import profilePic2 from "../../public/images/profile/myself2.png";
import profilePic3 from "../../public/images/profile/github-profile.jpg";
import AnimatedText from "@/components/AnimatedText";
import { LinkIcon } from "../components/Icons";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ifeoluwa Adeniran | Home</title>
        <meta
          name="description"
          content="Welcome to Ifeoluwa's personal website showcasing expertise in full-stack development, software engineering, and innovative web solutions. Explore projects, read insightful articles, and connect with a passionate developer dedicated to delivering exceptional results."
        />
      </Head>

      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout classsName="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w1/2 md:w-full">
              <Image
                src={profilePic2}
                alt="ifeoluwa"
                // add "ml-16" for big screen
                className="w-full h-autolg:hidden md:inline-block md:w-full  " // Adjust the margin-left to move the image further to the right
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw lg:ml-16"
                quality={100} // Increase image quality to maximum
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Ifeoluwa Adeniran CV.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg 
                font-semibold hover:bg-light hover:text-dark border border-solid border-transparent 
                hover:border-dark group dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"

                  // download={true}
                >
                  Resume
                  <LinkIcon className="w-6 ml-1 " />
                </Link>

                <Link
                  href="mailto:deniranifeoluwa@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="ifeoluwa.dev" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
