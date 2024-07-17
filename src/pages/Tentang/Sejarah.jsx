import React from "react";
import wave from "../../../public/assets/images/wave1.svg";

const Sejarah = () => {
  return (
    <div className="flex flex-col relative justify-center items-center gap-5">
      <img className="absolute w-[100vw] md:w-full -top-1" src={wave} alt="" />
      <div className="flex flex-col px-20 pt-80 pb-40 justify-center items-center gap-5">
        <div
          className="text-7xl font-bold"
          style={{
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#022C25",
            color: "transparent",
          }}
        >
          SEJARAH DESA
        </div>
      </div>
    </div>
  );
};

export default Sejarah;
