import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { motion } from "framer-motion"; //libreria motion

const Navbar = () => {
  /**
   * animacion libreria motion
   */
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duraction: 0.5 } },
  };
  return (
    <motion.div
      className="navbar flex justify-between items-center p-5 opacity-95"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className="text-white text-4xl hover:text-black transition duration-300 ease-in-out cursor-pointer
       link"
      >
        CRISTIAN
      </div>
      <div className="flex gap-5">
        <Link
          to="/"
          className=" ml-5 text-2xl text-white hover:text-black transition duration-300 ease-in-out cursor-pointer link"
        >
          Home
        </Link>
        <Link
          to={"/about"}
          className="ml-5 text-2xl text-white hover:text-black transition duration-300 ease-in-out cursor-pointer link"
        >
          About
        </Link>
        <Link
          to={"/education"}
          className="ml-5 text-2xl text-white hover:text-black transition duration-300 ease-in-out cursor-pointer link"
        >
          Education
        </Link>
        <Link
          to={"/projects"}
          className="ml-5 text-2xl text-white hover:text-black transition duration-300 ease-in-out cursor-pointer link"
        >
          Projects
        </Link>
        <Link
          to={"/certificates"}
          className="ml-5 text-2xl text-white hover:text-black transition duration-300 ease-in-out link"
        >
          Certificates
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
