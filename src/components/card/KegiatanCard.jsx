import React from "react";

const KegiatanCard = ({ title, img, desc }) => {
  return (
    <div className=" rounded-[20px] shadow-2xl cursor-pointer flex flex-col gap-4 md:gap-8 items-stretch bg-white text-black ">
      <img src={img} alt={title} className="rounded-t-[20px] h-56 sm:h-80 object-cover" />

      <div className="flex flex-col gap-1 px-6 pb-4">
        <h3 className="font-semibold text-2xl md:text-3xl text-center">
          {title}
        </h3>
        <p className="opacity-70 text-lg md:text-xl text-center md:text-justify mt-4 md:mt-8">
          {desc ?? ""}
        </p>
      </div>
    </div>
  );
};

export default KegiatanCard;
