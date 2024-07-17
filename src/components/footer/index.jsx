import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark-green py-20 flex justify-center px-5 sm:px-10 md:px-12 lg:px-16 xl:px-20">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="container flex flex-col gap-8 md:flex-row md:gap-32">
          <div className="flex flex-col gap-8">
            <div className="flex justify-center md:justify-start items-center gap-4">
              <img src="/logo.png" alt="" />
              <div className="text-2xl text-white font-semibold">Jatinom</div>
            </div>
            <p className="text-sm md:text-base text-white max-w-lg text-center md:text-left">
              Desa Jatinom menawarkan perpaduan harmonis antara kekayaan alam,
              budaya, dan keramahan masyarakatnya, menjadikannya destinasi
              wisata yang menarik bagi para pelancong.
            </p>
          </div>
          <div className="flex flex-col gap-6 md:gap-12 text-white justify-center md:justify-start items-center md:items-start">
            <div className="font-semibold text-2xl">Navigasi</div>
            <div className="flex flex-col gap-1.5 justify-center md:justify-start items-center md:items-start">
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
        <hr className="h-[1px] bg-white rounded-full w-full"/>
        <div className="flex flex-row w-full justify-center items-center">
        <div className="relative group flex w-full justify-center items-center text-center">
          <div className="relative group flex text-white text-sm md:text-base">
            © Dikembangkan dengan cinta oleh Mahasiswa Kelompok 14 KKN FILKOM 2024
            <div className="absolute -bottom-7 md:top-0 right-1/2 md:-right-7 opacity-0 group-hover:opacity-100 transition-all duration-500 ml-2">
              ❤️️
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
