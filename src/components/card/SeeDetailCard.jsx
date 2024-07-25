import React from "react";
import { Link } from "react-router-dom";

const SeeDetailCard = ({ title, desc, linkTo }) => {
  return (
    <div className="px-8 md:px-16 py-8 md:py-16 rounded-[20px] bg-dark-green text-white flex flex-col gap-6 md:gap-8 cursor-pointer text-center">
      <h4 className="text-xl md:text-3xl font-semibold ">{title}</h4>
      <div className="flex flex-col gap-4 md:gap-8">
        <p className="">{desc}</p>
        <Link
          to={linkTo}
          className="items-stretch border-2 border-normal-green rounded-[20px] py-2 px-4 hover:bg-normal-green transition-all duration-1000"
        >
          Lihat Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default SeeDetailCard;
