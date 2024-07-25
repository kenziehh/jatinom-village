import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";

const Data = () => {
  const numberRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: startCounting ? n : 0,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return (
      <animated.div>
        {number.to((n) => n.toFixed(0))}
      </animated.div>
    );
  }

  useEffect(() => {
    const handleScroll = () => {
      if (numberRef.current) {
        const scrollPosition = window.scrollY;
        numberRef.current.style.backgroundPositionY = `-${
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounting(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => {
      if (numberRef.current) {
        observer.unobserve(numberRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 lg:gap-20 bg-dark-green text-white px-6 md:px-12 lg:px-24 py-10 md:py-16 lg:py-20">
      <div className="flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 text-center md:text-left w-full">
        <div className="font-black text-3xl md:text-4xl lg:text-5xl mb-4">
          DATA KEPENDUDUKAN
        </div>
        <div className="flex flex-col font-semibold text-lg text-dark-green bg-white rounded-2xl px-6 py-4 gap-3">
          <div>Desa Jatinom dibagi lagi menjadi tiga dusun, yaitu:</div>
          <div className="flex flex-col justify-center items-center font-bold text-xl md:text-2xl lg:text-3xl">
            Jatisari, Jatinom, Nglaos
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                duration: 2.0,
                damping: 10,
                stiffness: 100,
              },
            }}
            className="flex flex-col justify-center items-center"
            ref={numberRef}
          >
            <div className="flex flex-row text-5xl md:text-6xl lg:text-7xl font-black">
              <Number n={6000} />+
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl">Penduduk</div>
            <div className="text-base md:text-lg lg:text-xl">dan semakin bertumbuh...</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                duration: 2.0,
                damping: 10,
                stiffness: 100,
              },
            }}
            className="flex flex-col justify-center items-center"
            ref={numberRef}
          >
            <div className="flex flex-row text-5xl md:text-6xl lg:text-7xl font-black">
              <Number n={1800} />+
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl">Kartu Keluarga</div>
            <div className="text-base md:text-lg lg:text-xl">dan terus mengalami peningkatan...</div>
          </motion.div>
        </div>
        <div className="flex flex-row justify-center items-center gap-20 mt-6">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                duration: 2.0,
                damping: 10,
                stiffness: 100,
              },
            }}
            className="flex flex-col justify-center items-center"
            ref={numberRef}
          >
            <div className="text-5xl md:text-6xl lg:text-7xl font-black">
              <Number n={27} />
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl">RT</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                duration: 2.0,
                damping: 10,
                stiffness: 100,
              },
            }}
            className="flex flex-col justify-center items-center"
            ref={numberRef}
          >
            <div className="text-5xl md:text-6xl lg:text-7xl font-black">
              <Number n={9} />
            </div>
            <div className="text-xl md:text-2xl lg:text-3xl">RW</div>
          </motion.div>
        </div>
        <div className="text-base md:text-lg lg:text-xl mt-8 mx-4 md:mx-0">
          Desa Jatinom memiliki lebih dari 6.000 penduduk yang tersebar di tiga dusun: Jatisari, Jatinom, dan Nglaos. Dengan lebih dari 1.800 kartu keluarga, desa ini terus berkembang. Desa ini juga memiliki 27 RT dan 9 RW yang memastikan koordinasi yang baik dalam pemerintahan desa.
        </div>
      </div>
    </div>
  );
};

export default Data;
