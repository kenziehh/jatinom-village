import React from "react";
import PotensiCard from "../../components/card/PotensiCard";

const Potensi = () => {
  return (
    <div className="flex flex-col relative justify-center items-center px-6 md:px-12 lg:px-24 py-10 md:py-16 lg:py-20 text-dark-green bg-white">
      <div className="text-4xl md:text-5xl lg:text-7xl font-black text-center mb-4 md:mb-8">
        POTENSI
      </div>
      <div className="flex flex-col justify-center items-center gap-4 md:gap-5">
        <div className="text-base md:text-lg lg:text-xl text-center mb-4">
          Berikut adalah beberapa potensi yang dimiliki oleh Desa Jatinom:
        </div>    
        <div className="grid grid-cols- md:grid-cols-2 xl:grid-cols-3 gap-10 items-stretch mt-8">
          <PotensiCard
            title={"Peternakan"}
            desc={
              "Desa ini memiliki potensi dalam peternakan ayam dan ulat hongkong, yang berkontribusi pada sektor pangan dan ekonomi."
            }
            img={"/assets/images/ulatsagu.jpg"}
          />
          <PotensiCard
            title={"UMKM"}
            desc={
              "Desa Jatinom memiliki potensi besar dalam usaha mikro, kecil, dan menengah yang dapat mendorong pertumbuhan ekonomi lokal."
            }
            img={"/assets/images/pasarmalam.jpeg"}
          />
          <PotensiCard
            title={"Pertanian"}
            desc={
              "Lahan subur di desa mendukung pertanian padi dan jagung, menyediakan bahan pangan utama dan peluang agribisnis"
            }
            img={"/assets/images/pertanian-jatinom.JPG"}
          />
        </div>
        {/* <ol className="list-decimal list-inside text-left text-base md:text-lg lg:text-xl w-full max-w-4xl">
          <li className="mb-4">
            <strong>UMKM:</strong> Desa Jatinom memiliki potensi besar dalam usaha mikro, kecil, dan menengah yang dapat mendorong pertumbuhan ekonomi lokal.
          </li>
          <li className="mb-4">
            <strong>Peternakan:</strong> Desa ini memiliki potensi dalam peternakan ayam dan ulat hongkong, yang berkontribusi pada sektor pangan dan ekonomi.
          </li>
          <li className="mb-4">
            <strong>Pertanian:</strong> Lahan subur di desa mendukung pertanian padi dan jagung, menyediakan bahan pangan utama dan peluang agribisnis.
          </li>
        </ol> */}
      </div>
    </div>
  );
};

export default Potensi;
