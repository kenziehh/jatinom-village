import React from "react";
import Hero from "./Hero";
import Kades from "./Kades";
import Sejarah from "./Sejarah";
import Kegiatan from "./Kegiatan";
import Fakta from "./Fakta";
import Potensi from "./Potensi";

const index = () => {
  return (
    <div className="text-dark-green">
      <Hero />
      <Kades />
      <div className="flex flex-col gap-16 mb-16">
        <Sejarah />
        <Kegiatan />
        <Fakta />
        <Potensi />
      </div>
    </div>
  );
};

export default index;
