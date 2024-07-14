import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark-green py-20 flex justify-center ">
      <div className="">
        <div className="container flex flex-col gap-8 md:flex-row md:gap-32">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="" />
              <h2 className="text-2xl text-white font-semibold">Jatinom</h2>
            </div>
            <p className="text-sm md:text-base text-white max-w-lg">
              Desa Jatinom menawarkan perpaduan harmonis antara kekayaan alam,
              budaya, dan keramahan masyarakatnya, menjadikannya destinasi
              wisata yang menarik bagi para pelancong.
            </p>
          </div>
          <div className="flex flex-col gap-6 md:gap-12 text-white">
            <h3 className="font-semibold">Navigasi</h3>
            <div className="flex flex-col gap-1.5">
              <Link to={"/"} className="opacity-80">
                Beranda
              </Link>
              <Link to={"/tentang"} className="opacity-80">
                Tentang Desa
              </Link>
              <Link to={"/umkm"} className="opacity-80">
                UMKM
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
