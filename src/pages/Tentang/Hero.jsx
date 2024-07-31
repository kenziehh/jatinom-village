import React, { useRef, useEffect, useState } from "react";
import wave from "../../../public/assets/images/wave.svg";

const Hero = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [strokeWidth, setStrokeWidth] = useState("2px");

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = window.scrollY;
        containerRef.current.style.backgroundPositionY = `-${
          scrollPosition * 0.5
        }px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateStrokeWidth = () => {
      if (window.innerWidth < 640) {
        setStrokeWidth("1px"); // Small screens
      } else if (window.innerWidth < 768) {
        setStrokeWidth("2px"); // Medium screens
      } else if (window.innerWidth < 1024) {
        setStrokeWidth("3px"); // Large screens
      } else {
        setStrokeWidth("4px"); // Extra-large screens
      }
    };

    // Initial stroke width setup
    updateStrokeWidth();

    // Update stroke width on window resize
    window.addEventListener("resize", updateStrokeWidth);

    // Clean up event listener
    return () => window.removeEventListener("resize", updateStrokeWidth);
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div
        className='flex flex-col relative justify-center items-center gap-5 w-full min-h-screen bg-[url("/assets/images/SunsetFieldCropTint.svg")] bg-fixed bg-cover bg-no-repeat'
        ref={containerRef}
      >
        <div
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black border-2 sm:border-3 md:border-4 lg:border-5 border-white px-4 sm:px-6 md:px-8 lg:px-10 py-1 sm:py-2 md:py-3 lg:py-4 transition-all duration-500 ease-in-out"
          style={{
            WebkitTextStrokeWidth: strokeWidth,
            WebkitTextStrokeColor: "white",
            color: isHovered ? "white" : "transparent",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="text-center tracking-widest">DESA</div>
          <div className="text-center tracking-widest">JATINOM</div>
        </div>

        <svg
          width="200"
          height="82"
          viewBox="0 0 1440 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full h-[10vh] -bottom-[1vh]"
          preserveAspectRatio="none"
        >
          <path
            d="M276 53.5C144.633 61.431 0 0.500004 0 0.500004V82H1440V4.00001C1440 4.00001 1403.6 16.5539 1360.91 32C1251 71.7711 1175.84 -1.93639 1055.21 0.500004C960.014 2.42258 877.734 39.9693 782.524 40.5C685.032 41.0434 614.34 0.455696 516.846 0.500004C419.542 0.544225 373.127 47.6362 276 53.5Z"
            fill="#022C25"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
