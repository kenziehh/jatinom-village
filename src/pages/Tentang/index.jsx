import React from "react";
import Hero from "./Hero";
import Kades from "./Kades";
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
      <Kades />
      <Sejarah />
      <Kegiatan />
      <Fakta />
      <Potensi />
    </>
  );
};

export default index;
