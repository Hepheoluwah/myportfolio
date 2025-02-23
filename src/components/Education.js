import React, { useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { createPortal } from "react-dom";
import LiIcon from "./LiIcon";
// import AlxCert from "../../public/images/certs/alxcert.png"
// import FreeCodeCamp from "../../public/images/certs/freecodecamp.png"
const AlxCert = "/images/certs/alxcert.png";
const FreeCodeCamp = "/images/certs/freecodecamp.png";

import AitextProcessor from "../../public/images/projects/aitextprocessor.png";
// Modal component rendered via a portal.
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-dark p-6 rounded-lg relative w-11/12 max-w-3xl"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-700 dark:text-gray-300"
        >
          &times;
        </button>
        {children}
      </motion.div>
    </div>,
    document.body
  );
};

const Details = ({ type, time, place, info, certLink }) => {
  const ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}&nbsp;
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
        {certLink && (
          <>
            <button
              onClick={openModal}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition sm:hidden"
            >
              View Certificate
            </button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <img
                src={certLink}
                alt="Certificate"
                className="w-full h-auto max-h-[500px] object-contain"
              />
            </Modal>
          </>
        )}
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

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="ALX Software Engineering Certification"
            time="2023-2024"
            place="Holberton School"
            info="Gained hands-on training in programming, data structures, algorithms, and automation testing. Now equipped to solve real-world problems as a Full-Stack Developer."
            certLink={AlxCert}
          />

          <Details
            type="Responsive Web Design Certification"
            time="2022"
            place="FreeCodeCamp"
            info="Built a strong foundation in HTML, CSS, JavaScript, and responsive design. Kickstarted my journey as a developer."
            certLink={FreeCodeCamp}
          />

          <Details
            type="Bachelor Of Science In Computer Science"
            time="2015-2019"
            place="Ajayi Crowther University"
            info="Ajayi Crowther University played a pivotal role in shaping my journey as a tech professional. I gained specialized knowledge in software development, data science, cybersecurity, artificial intelligence, machine learning, and cloud computing. The university&apos;s commitment to academic excellence, innovation, and ethical values, combined with hands-on projects and a rigorous curriculum, provided me with a strong foundation for a successful career in technology."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
