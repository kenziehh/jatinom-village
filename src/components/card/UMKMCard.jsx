import React from "react";
import { CiShop } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiHome } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const UMKMCard = ({ umkm }) => {
  return umkm.tipeData == "Produk" ? (
    <div
      key={umkm.id}
      className="px-3 py-4 rounded-[20px] shadow-2xl cursor-pointer "
    >
      <img
        src={umkm.foto}
        alt={umkm.namaToko}
        className="w-full h-40 md:h-64 object-cover mb-4 rounded-lg"
      />
      <h4 className="font-semibold text-2xl md:text-3xl text-center">
        {umkm.namaProduk}
      </h4>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-2 items-center mt-2">
          <CiShop size={32} className="font-extrabold" />
          <h3 className="font-semibold text-lg">{umkm.namaToko}</h3>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <CgProfile size={32} />
          <p className="">{umkm.namaPemilik}</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <CiHome size={32} />
          <p className="">{umkm.alamat}</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <FaWhatsapp size={32} />
          <p className="">{umkm.kontak}</p>
        </div>
      </div>
    </div>
  ) : (
    <div
      key={umkm.id}
      className="px-3 py-4 rounded-[20px] shadow-2xl cursor-pointer flex flex-col md:flex-row gap-3 md:gap-8 lg:gap-16 items-stretch"
    >
      <div className="w-full md:w-1/2 lg:w-1/3">
        <img
          src={umkm.foto}
          alt={umkm.namaToko}
          className="w-full h-full lg:h-[40vh] mb-4 rounded-[20px]"
        />
      </div>

      <div className="flex flex-col gap-1 md:w-1/2 lg:w-2/3">
        <h3 className="font-semibold text-3xl md:text-4xl text-center">
          {umkm.namaToko}
        </h3>
        <div className="flex flex-row gap-2 items-center">
          <CgProfile size={32} />
          <p className="">{umkm.namaPemilik}</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <CiHome size={32} />
          <p className="">{umkm.alamat}</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <FaWhatsapp size={32} />
          <p className="">{umkm.kontak}</p>
        </div>
        <p className="opacity-70 text-lg md:text-xl text-center md:text-start mt-4 md:mt-12">
          {umkm.desc ?? ""}
        </p>
      </div>
    </div>
  );
};

export default UMKMCard;
