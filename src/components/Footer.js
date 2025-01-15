import React from 'react';
import Layout from './Layout';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import the useRouter hook

const Footer = ({ showLinks = true }) => {
  const router = useRouter(); // Get the current router object
  const currentPath = router.pathname; // Get the current pathname

  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium text-lg 
      dark:text-light dark:border-light sm:text-base"
    >
      {showLinks && (
        <Layout classsName="py-8 flex items-center justify-center lg:flex-col lg:py-6">
          <nav className="flex flex-wrap justify-center lg:justify-center lg:flex-col lg:items-center space-x-16 md:space-x-0 lg:space-y-6">
           
            {currentPath !== "/" && (
              <Link href="/" className="underline underline-offset-2">
                Home
              </Link>
            )}
            {currentPath !== "/about" && (
              <Link href="/about" className="underline underline-offset-2">
                About
              </Link>
            )}
            {currentPath !== "/projects" && (
              <Link href="/projects" className="underline underline-offset-2">
                Projects
              </Link>
            )}
            {currentPath !== "/articles" && (
              <Link href="/articles" className="underline underline-offset-2">
                Articles
              </Link>
            )}
          </nav>
        </Layout>
      )}

      <Layout classsName="py-6 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Developed and designed with{' '}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
        </div>
        by&nbsp;
        <Link href="/" className="underline underline-offset-2">
          Ifeoluwa Adeniran
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
