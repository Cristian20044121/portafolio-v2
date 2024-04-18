import React from "react";
import photo from "../../icon-profile.png";

import "./style.css";
import { motion } from "framer-motion"; //libreria motion
const Home = () => {
  /**
   * animacion libreria motion
   */
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duraction: 0.9 } },
  };
  return (
    <motion.div
      className="container-home body"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="lg:flex  md:flex  sm:block items-center justify-around w-11/12 mx-auto mt-28">
        <div className="w-3/4">
          <h1 className="title-first md:text-6xl lg:text-8xl text-4xl font-semibold text-cyan-500">
            FULL STACK <span class="title-home-span">ENGINEER</span>
          </h1>
          <p className="home-text lg:text-lg md:text-xl mt-10">
            I am a web development student with a passion for creating digital
            solutions. I have a strong command of various technologies and tools
            that enable me to design and develop innovative web applications. My
            skillset includes proficiency in as HTML, CSS, Bootstrap,JavaScript,
            Node Js, Express, Git and Github.I am a web development student with
            a passion for creating digital solutions. I have a strong command of
            various technologies and tools that enable me to design and develop
            innovative web applications. My skillset includes proficiency in as
            HTML, CSS, Bootstrap,JavaScript, Node Js, Express, Git and Github.
          </p>
          <br />

          <div className="home-sci lg:w-1/4 md:w-2/3  sm:w-2/6">
            <a
              href="https://github.com/Cristian20044121"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/cristian-caro-9b4040260/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=573005208105"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a
              href="https://drive.google.com/file/d/1TMWiswTmNWuj0ckyACWyWh-UbZzgVwKs/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              CV
            </a>
          </div>
        </div>
        <div className="w-4/5 text-center">
          <img
            src={photo}
            alt="profile"
            className="mx-auto image-profile cursor-pointer  transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
