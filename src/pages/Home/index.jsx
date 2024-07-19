import Hero from "./Hero";
import LihatSelengkapnya from "./LihatSelengkapnya";
import Peta from "./Peta";
import Profil from "./Profil";

export default function Home() {
  return (
    <>
      <Hero />
      <Peta />
      <Profil />
      <LihatSelengkapnya />
    </>
  );
}
