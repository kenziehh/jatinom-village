import { Helmet } from "react-helmet-async";
import Hero from "./Hero";
import LihatSelengkapnya from "./LihatSelengkapnya";
import Peta from "./Peta";
import Profil from "./Profil";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Desa Jatinom Kanigoro, Blitar</title>
        <meta
          name="Desa Jatinom Kanigoro, Blitar"
          content="Desa Jatinom terletak di Kecamatan Kanigoro, Kabupaten Blitar, Jawa Timur, Desa Jatinom menawarkan perpaduan memikat antara sejarah, budaya, dan keindahan alam. Desa ini menyimpan potensi wisata yang menjanjikan, siap menyambut para pelancong yang ingin menjelajahi kekayaan tersembunyinya."
        />
      </Helmet>
      <Hero />
      <Peta />
      <Profil />
      <LihatSelengkapnya />
    </>
  );
}
