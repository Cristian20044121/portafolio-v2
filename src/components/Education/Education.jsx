import React from "react";
import { motion } from "framer-motion"; //libreria motion
import AnimationScroll from "../animation-scroll/animation-scroll";
import "./style.css";

const Education = () => {
  /**
   * animacion libreria motion
   */
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duraction: 0.9 } },
  };
  return (
    <motion.div
      className="body-education p-10"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="lg:mx-auto md:mx-auto sm:mr-20 mt-2 w-2/3 text-center">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:col-span-2 xl:col-auto mx-auto">
          EDUCATION
        </h1>
        <br />
        <p className="text-lg leading-8 text-white   mx-auto">
          This section represents my educational journey, where I have
          cultivated and expanded my knowledge over time. Through various study
          programs, I have explored a wide range of technologies and
          disciplines.
        </p>
        <div className="mt-20 grid grid-rows-4 grid-flow-col flex-wrap">
          <div class="parent">
            <div class="div1  bg-white bg-opacity-50 p-1 md:p-8 md:ml-12 md:w-5/6 lg:w-50 md:shadow-lg cursor-pointer animation">
              <h2 className="text-4xl font-bold italic">2022</h2> <br />
              <p className="font-semibold text-2xl text-gray-700 mb-3">
                DISEÑO WEB CON ADOBE DREAMWEAVER
              </p>
              <a
                className="button-read-education p-1 mt-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1BCPttnUaqC-l5iKyuegAcxYt1mJTZsty/view?usp=sharing"
              >
                Read More
              </a>
              <AnimationScroll />
            </div>
            <div class="div2 bg-white bg-opacity-50 p-1 md:p-8 md:ml-12 md:w-5/6 lg:w-50 md:shadow-lg cursor-pointer animation">
              {" "}
              <h2 className="text-4xl font-bold italic">2022</h2> <br />
              <p className="font-semibold text-2xl text-gray-700 mb-3">
                CURSO PROFESIONAL DE JAVASCRIPT
              </p>
              <a
                className="button-read-education p-1 mt-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1OVq_nCjSY7RXwsaaGElezwv4RXi38K8Z/view?usp=sharing"
              >
                Read More
              </a>
              <AnimationScroll />
            </div>

            <div class="div5 bg-white bg-opacity-50 p-1 md:p-8 md:ml-12 md:w-5/6 lg:w-50 md:shadow-lg cursor-pointer animation">
              {" "}
              <h2 className="text-4xl font-bold italic">2022-2023</h2> <br />
              <p className="font-semibold text-2xl text-gray-700 mb-3">
                Educación IT - Bootcamp Full Stack Engineer
              </p>
              <a
                className="button-read-education p-1 mt-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1wQ4iEMrGaXDttp9WlWdEakkDCZdOacAg/view?usp=sharing"
              >
                Read More
              </a>
              <AnimationScroll />
            </div>
            <div class="div6 bg-white bg-opacity-50 p-1 md:p-8 md:ml-12 md:w-5/6 lg:w-50 md:shadow-lg cursor-pointer animation">
              {" "}
              <h2 className="text-4xl font-bold italic">2023</h2> <br />
              <p className="font-semibold text-2xl text-gray-700 mb-3">
                CONCEPTOS DE PYTHON PARA BACKEND - BOOTCAMP BACKEND CON PYTHON
              </p>
              <a
                className="button-read-education p-1 mt-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1C_4bmDq-6yNAHIdxDEk20f56mQgNWxBg/view?usp=sharing"
              >
                Read More
              </a>
              <AnimationScroll />
            </div>
            <div class="div7 bg-white bg-opacity-50 p-1 md:p-8 md:ml-12 md:w-5/6 lg:w-50 md:shadow-lg cursor-pointer animation">
              {" "}
              <h2 className="text-4xl font-bold italic">2023</h2> <br />
              <p className="font-semibold text-2xl text-gray-700 mb-3">
                IMPLEMENTACION DE BASES DE DATOS NOSQL
              </p>
              <a
                className="button-read-education p-1 mt-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/12isH4ki2rq6YlLsZY9EheyLsz0V5C88o/view?usp=sharing"
              >
                Read More
              </a>
              <AnimationScroll />
            </div>
            <div class="div8 bg-white bg-opacity-50 p-1 md:p-8 md:ml-12 md:w-5/6 lg:w-50 md:shadow-lg cursor-pointer animation">
              {" "}
              <h2 className="text-4xl font-bold italic">2023-2024</h2> <br />
              <p className="font-semibold text-2xl text-gray-700 mb-3">
                TÉCNICO EN PROGRAMACIÓN DE APLICACIONES Y SERVICIOS PARA LA NUBE
              </p>
              <button className="button-read-education p-1 mt-2 rounded">
                Read More
              </button>
              <AnimationScroll />
            </div>
            <div class="div9 bg-white bg-opacity-50 p-1 md:p-8 md:ml-12 md:w-5/6 lg:w-50 md:shadow-lg cursor-pointer animation">
              {" "}
              <h2 className="text-4xl font-bold italic">2023</h2> <br />
              <p className="font-semibold text-2xl text-gray-700 mb-3">
                CONSTRUCCION DE BASES DE DATOS CON MYSQL
              </p>
              <a
                className="button-read-education p-1 mt-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
                href="hhttps://drive.google.com/file/d/17hrC_UtaGKNR_oKD5Lrp1KJnpzQNiw93/view?usp=sharing"
              >
                Read More
              </a>
              <AnimationScroll />
            </div>
            <div class="div10 bg-white bg-opacity-50 p-1 md:p-8 md:ml-12 md:w-5/6 lg:w-50 md:shadow-lg cursor-pointer animation">
              {" "}
              <h2 className="text-4xl font-bold italic">2023</h2> <br />
              <p className="font-semibold text-2xl text-gray-700 mb-3">
                APLICACION DEL MARCO DE TRABAJO SCRUM PARA PROYECTOS DE
                DESARROLLO DE SOFTWARE
              </p>{" "}
              <a
                className="button-read-education p-1 mt-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1Vd1j4OP4H5vF4QFGXzReqZ3Q6e7VdHeL/view?usp=sharing"
              >
                Read More
              </a>
              <AnimationScroll />
            </div>
            <div class="div11 bg-white bg-opacity-50 p-1 md:p-8 md:ml-12 md:w-5/6 lg:w-50 md:shadow-lg cursor-pointer animation">
              {" "}
              <h2 className="text-4xl font-bold italic">2023</h2> <br />
              <p className="font-semibold text-2xl text-gray-700 mb-3">
                CURSO CSS
              </p>{" "}
              <a
                className="button-read-education p-1 mt-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/15ytyOUHHc7S2eg4vLz7l0sYFgI6YNPBH/view?usp=sharing"
              >
                Read More
              </a>
              <AnimationScroll />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
