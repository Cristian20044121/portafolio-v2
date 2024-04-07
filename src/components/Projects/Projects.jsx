import React, { useRef } from "react";
import "./style.css";

const Projects = () => {
  const sliderRef = useRef(null);

  function activate(e) {
    const items = sliderRef.current.querySelectorAll(".item");
    if (e.target.matches(".next")) {
      sliderRef.current.append(items[0]);
    }
    if (e.target.matches(".prev")) {
      sliderRef.current.prepend(items[items.length - 1]);
    }
  }
  return (
    <>
      <main>
        <ul ref={sliderRef} className="slider">
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg')",
            }}
          >
            <div className="content  bg-black bg-opacity-50 p-4">
              <h2 className="title font-bold text-2xl">Lossless Youths</h2>
              <p className="description text-xl italic">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button className="button-read ">Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage: "url('https://i.redd.it/tc0aqpv92pn21.jpg')",
            }}
          >
            <div className="content  bg-black bg-opacity-50 p-3">
              <h2 className="title">Estrange Bond</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button className="button-read ">Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://wharferj.files.wordpress.com/2015/11/bio_north.jpg')",
            }}
          >
            <div className="content  bg-black bg-opacity-50 p-3">
              <h2 className="title">Lorem </h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button className="button-read ">Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://cristian20044121.github.io/portafolio-cristian/img/projects/proyecto4.PNG')",
            }}
          >
            <div className="content bg-black bg-opacity-50 p-3">
              <h2 className="title">Card-codigo-qr</h2>
              <p className="description">
                Tarjeta código QR, ejericio propuesto desde la página
                Frontend-mentor donde allí se encuentran multiples ejercicios
                front-en.
              </p>
              <button className="button-read">Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg')",
            }}
          >
            <div className="content  bg-black bg-opacity-50 p-3">
              <h2 className="title">Urban Decay</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button className="button-read">Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://cristian20044121.github.io/portafolio-cristian/img/projects/proyecto17.PNG')",
            }}
          >
            <div className="content  bg-black bg-opacity-95 md:p-10">
              <h2 className="title text-xl font-semibold text-cyan-500">
                The Migration
              </h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button className="button-read">Read More</button>
            </div>
          </li>
        </ul>
        <nav className="nav flex gap-10" onClick={activate}>
          {/* <button className="btn prev">Prev</button> */}
          <i class="bx bx-left-arrow-alt btn prev"></i>
          <i class="bx bx-right-arrow-alt btn next"></i>
        </nav>
      </main>
    </>
  );
};

export default Projects;
