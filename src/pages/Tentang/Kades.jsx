import React from "react";

const Kades = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 bg-dark-green text-white px-6 md:px-12 lg:px-24 pt-16 md:pt-24 lg:pt-36">
      <div className="w-full md:w-1/4 flex justify-center md:justify-end mb-8 md:mb-0">
        <img className="w-full md:w-auto" src="" alt="kades" />
      </div>
      <div className="flex flex-col justify-center items-start gap-4 md:gap-5 w-full md:w-3/4 text-center md:text-left">
        <div className="text-center md:text-left justify-center items-center w-full">
          <div className="font-semibold text-xl md:text-2xl lg:text-3xl">Kepala Desa</div>
          <div className="font-black text-4xl md:text-6xl lg:text-8xl">Muhammad Daru Purwinanto</div>
        </div>
        <div className="text-base md:text-lg lg:text-xl text-justify">
          Ini deskripsi kepala desa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ducimus accusamus ipsam repellendus corrupti ullam, ratione molestias laboriosam exercitationem atque eveniet eius. Voluptatibus saepe magnam atque at reprehenderit dolor odit!
        </div>
      </div>
    </div>
  );
};

export default Kades;
