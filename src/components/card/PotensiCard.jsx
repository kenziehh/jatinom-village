import React from "react";

const PotensiCard = ({ title, desc, img }) => {
  return (
    <div className="bg-dark-green text-white flex flex-col gap-4 md:gap-8 pb-4 rounded-[20px] hover:scale-105">
      <img src={img} alt={title} className="rounded-t-[20px] h-80" />
      <div className="flex flex-col gap-6 md:gap-8 px-6">
        <h4 className="text-center text-3xl font-semibold ">{title}</h4>
        <p className="text-center md:text-justify">{desc}</p>
      </div>
    </div>
  );
};

export default PotensiCard;
