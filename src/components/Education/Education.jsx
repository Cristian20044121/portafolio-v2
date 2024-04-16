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
      className="body-education"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto mt-20 w-2/3 text-center">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:col-span-2 xl:col-auto mx-auto">
          EDUCATION
        </h1>
        <br />
        <p className="text-lg leading-8 text-white w-6/12 mx-auto">
          This section represents my educational journey, where I have
          cultivated and expanded my knowledge over time. Through various study
          programs, I have explored a wide range of technologies and
          disciplines.
        </p>
        <div className="mt-28 grid grid-rows-4 grid-flow-col flex-wrap">
          <div class="parent">
            <div class="div1  bg-white bg-opacity-50 p-1 md:p-8 md:ml-12 md:w-6/12 lg:w-50 md:shadow-lg cursor-pointer animation">
              <h2 className="text-4xl font-bold italic">2022</h2> <br />
              <p className="font-semibold text-2xl text-gray-700 mb-3">
                DISEÑO WEB CON ADOBE DREAMWEAVER
              </p>
              <AnimationScroll />
            </div>
            <div class="div2 bg-white bg-opacity-50 p-1 md:p-8 md:ml-12 md:w-6/12 lg:w-50 md:shadow-lg cursor-pointer animation">
              {" "}
              <h2 className="text-4xl font-bold italic">2022</h2> <br />
              <p className="font-semibold text-2xl text-gray-700 mb-3">
                CURSO PROFESIONAL DE JAVASCRIPT
              </p>
              <AnimationScroll />
            </div>
            <div class="div3 bg-white bg-opacity-50 p-1 md:p-8 md:ml-12 md:w-6/12 lg:w-50 md:shadow-lg cursor-pointer animation">
              {" "}
              <h2 className="text-4xl font-bold italic">2023</h2> <br />
              <p className="font-semibold text-2xl text-gray-700 mb-3">
                VARIABLES Y ESTRUCTURAS DE CONTROL EN LA PROGRAMACION ORIENTADA
                A OBJETOS: JAVA
              </p>{" "}
              <AnimationScroll />
            </div>
            <div class="div4 bg-white bg-opacity-50 p-1 md:p-8 md:ml-12 md:w-6/12 lg:w-50 md:shadow-lg cursor-pointer animation">
              {" "}
              <h2 className="text-4xl font-bold italic">2023</h2> <br />
              <p className="font-semibold text-2xl text-gray-700 mb-3">
                ANALISIS PARA EL DESARROLLO MOVIL CON APP INVENTOR{" "}
              </p>
              <AnimationScroll />
            </div>
            <div class="div5 bg-white bg-opacity-50 p-1 md:p-8 md:ml-12 md:w-6/12 lg:w-50 md:shadow-lg cursor-pointer animation">
              {" "}
              <h2 className="text-4xl font-bold italic">2022-2023</h2> <br />
              <p className="font-semibold text-2xl text-gray-700 mb-3">
                Educación IT - Bootcamp Full Stack Engineer
              </p>
              <AnimationScroll />
            </div>
            <div class="div6 bg-white bg-opacity-50 p-1 md:p-8 md:ml-12 md:w-6/12 lg:w-50 md:shadow-lg cursor-pointer animation">
              {" "}
              <h2 className="text-4xl font-bold italic">2023</h2> <br />
              <p className="font-semibold text-2xl text-gray-700 mb-3">
                CONCEPTOS DE PYTHON PARA BACKEND - BOOTCAMP BACKEND CON PYTHON
              </p>
              <AnimationScroll />
            </div>
            <div class="div7 bg-white bg-opacity-50 p-1 md:p-8 md:ml-12 md:w-6/12 lg:w-50 md:shadow-lg cursor-pointer animation">
              {" "}
              <h2 className="text-4xl font-bold italic">2023</h2> <br />
              <p className="font-semibold text-2xl text-gray-700 mb-3">
                IMPLEMENTACION DE BASES DE DATOS NOSQL
              </p>
              <AnimationScroll />
            </div>
            <div class="div8 bg-white bg-opacity-50 p-1 md:p-8 md:ml-12 md:w-6/12 lg:w-50 md:shadow-lg cursor-pointer animation">
              {" "}
              <h2 className="text-4xl font-bold italic">2023-2024</h2> <br />
              <p className="font-semibold text-2xl text-gray-700 mb-3">
                TÉCNICO EN PROGRAMACIÓN DE APLICACIONES Y SERVICIOS PARA LA NUBE
              </p>
              <AnimationScroll />
            </div>
            <div class="div9 bg-white bg-opacity-50 p-1 md:p-8 md:ml-12 md:w-6/12 lg:w-50 md:shadow-lg cursor-pointer animation">
              {" "}
              <h2 className="text-4xl font-bold italic">2023</h2> <br />
              <p className="font-semibold text-2xl text-gray-700 mb-3">
                CONSTRUCCION DE BASES DE DATOS CON MYSQL
              </p>
              <AnimationScroll />
            </div>
            <div class="div10 bg-white bg-opacity-50 p-1 md:p-8 md:ml-12 md:w-6/12 lg:w-50 md:shadow-lg cursor-pointer animation">
              {" "}
              <h2 className="text-4xl font-bold italic">2023</h2> <br />
              <p className="font-semibold text-2xl text-gray-700 mb-3">
                APLICACION DEL MARCO DE TRABAJO SCRUM PARA PROYECTOS DE
                DESARROLLO DE SOFTWARE
              </p>{" "}
              <AnimationScroll />
            </div>
            <div class="div11 bg-white bg-opacity-50 p-1 md:p-8 md:ml-12 md:w-6/12 lg:w-50 md:shadow-lg cursor-pointer animation">
              {" "}
              <h2 className="text-4xl font-bold italic">2023</h2> <br />
              <p className="font-semibold text-2xl text-gray-700 mb-3">
                CURSO CSS
              </p>{" "}
              <AnimationScroll />
            </div>
            <div class="div12 bg-white bg-opacity-50 p-1 md:p-8 md:ml-12 md:w-6/12 lg:w-50 md:shadow-lg cursor-pointer animation">
              {" "}
              <h2 className="text-4xl font-bold italic">2023</h2> <br />
              <p className="font-semibold text-2xl text-gray-700 mb-3">
                Introducción a UX
              </p>
              <AnimationScroll />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
