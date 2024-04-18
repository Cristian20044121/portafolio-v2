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
        className="text-white lg:text-4xl md:text-3xl sm:text-2xl hover:text-black transition duration-300 ease-in-out cursor-pointer
       link"
      >
        CRISTIAN
      </div>
      <div className="flex gap-5">
        <Link
          to="/"
          className=" ml-5 lg:text-2xl md:text-2xl sm:text-xl text-white hover:text-black transition duration-300 ease-in-out cursor-pointer link"
        >
          Home
        </Link>

        <Link
          to={"/education"}
          className="ml-5 lg:text-2xl md:text-2xl sm:text-xl text-white hover:text-black transition duration-300 ease-in-out cursor-pointer link"
        >
          Education
        </Link>
        <Link
          to={"/projects"}
          className="ml-5 lg:text-2xl md:text-2xl sm:text-xl text-white hover:text-black transition duration-300 ease-in-out cursor-pointer link"
        >
          Projects
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
