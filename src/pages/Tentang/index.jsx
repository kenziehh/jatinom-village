import React from "react";
import Hero from "./Hero";
import Data from "./Data";
import Sejarah from "./Sejarah";
import Kegiatan from "./Kegiatan";
import Fakta from "./Fakta";
import Potensi from "./Potensi";
import { Helmet } from "react-helmet-async";

const index = () => {
  return (
    <>
      <Helmet>
        <title>Tentang Desa | Desa Jatinom Kanigoro, Blitar</title>
        <meta
          name="Profil Desa Jatinom Kanigoro, Blitar"
          content="Profil Desa Jatinom Kanigoro yang berisi Sejarah Desa, Potensi Desa, Fakta-fakta tentang desa, dan konten lainnya."
        />
      </Helmet>
      <Hero />
      <Data />
      <div className="flex flex-col gap-16 mb-16">
        <Sejarah />
        <Kegiatan />
        <Fakta />
        <Potensi />
      </div>
    </>
  );
};

export default index;
