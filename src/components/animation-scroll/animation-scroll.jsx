import React, { useEffect } from "react";

const AnimationScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".animation");

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return <div>{/* Your component JSX goes here */}</div>;
};

export default AnimationScroll;
