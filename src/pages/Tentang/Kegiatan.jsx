import React from "react";

const Kegiatan = () => {
  return (
    <div className="flex flex-col relative justify-center items-center px-6 md:px-12 lg:px-24 bg-dark-green text-white py-10 md:py-16 lg:py-20">
      <div
        className="text-4xl md:text-5xl lg:text-7xl font-black text-center"
        // style={{
        //   WebkitTextStrokeWidth: "2px",
        //   WebkitTextStrokeColor: "#022C25",
        //   color: "transparent",
        // }}
      >
        KEGIATAN
      </div>
      <div className="flex flex-col justify-center items-center gap-4 md:gap-5 mt-4 md:mt-8">
        <div className="text-base md:text-lg lg:text-xl text-center">
          Ini Kegiatan
        </div>
      </div>
    </div>
  );
};

export default Kegiatan;
