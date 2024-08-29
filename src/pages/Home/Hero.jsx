import React from "react";
import vector from "../../assets/vector-home.png";
import vector2 from "../../assets/spark-orange.svg";

const Hero = () => {
  return (
    <section className="bg-dark-green min-h-screen pb-10 pt-[10vh] md:pt-[20vh] md:pb-20 relative -z-10">
      <img src={vector} alt="" className="absolute -z-20 bottom-8" />

      <div className="container flex flex-col-reverse gap-12 md:flex-row md:justify-between items-center z-0">
        <div className="flex flex-col items-center md:items-start gap-8 md:gap-24">
          <div className="flex flex-col gap-4 md:gap-8 text-center md:text-start">
            <h1 className="text-4xl md:text-5xl xl:text-6xl text-white font-semibold">
              Desa Jatinom
            </h1>
            <p className="max-w-md text-white">
              Terletak di Kecamatan Kanigoro, Kabupaten Blitar, Jawa Timur, Desa
              Jatinom menyimpan pesona dan potensi yang menanti untuk
              dijelajahi. Desa ini menawarkan perpaduan harmonis antara kekayaan
              alam, budaya, dan keramahan masyarakatnya, menjadikannya destinasi
              wisata yang menarik bagi para pelancong.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl py-3 px-6 flex items-center gap-2 justify-center">
            <img src="/assets/icons/map.png" alt="" className="w-8 h-8" />
            <span className="text-gray-400">Kanigoro, Kabupaten Blitar</span>
          </div>
        </div>
        <div className="">
          <img
            src={vector2}
            alt=""
            className="absolute -z-20 lg:-z-0 right-0 top-0"
          />
          <img
            src={"/assets/images/gapura.jpg"}
            alt=""
            className="rounded-2xl w-full md:max-w-[700px] max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
