import React from "react";

const Kades = () => {
  return (
    <div className="h-auto w-full flex flex-row justify-center items-center gap-20 bg-dark-green text-white px-24 pt-36">
      <div className="w-1/4 flex justify-end">
        <img className="" src="" alt="kades" />
      </div>
      <div className="flex flex-col justify-center items-start gap-5 w-3/4">
        <div className="">
          <div className=" font-semibold text-3xl">Kepala Desa</div>
          <div className=" font-black text-8xl">Muhammad Daru Purwinanto</div>
        </div>
        <div className=" text-justify">
            Ini deskripsi kepala desa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ducimus accusamus ipsam repellendus corrupti ullam, ratione molestias laboriosam exercitationem atque eveniet eius. Voluptatibus saepe magnam atque at reprehenderit dolor odit!
        </div>
      </div>
    </div>
  );
};

export default Kades;
