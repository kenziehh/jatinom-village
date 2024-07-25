import { Helmet } from "react-helmet-async";
import Hero from "./Hero";
import Pengertian from "./Pengertian";
import ListUMKM from "./ListUMKM";

export default function UMKM() {
  return (
    <>
      <Helmet>
        <title>Desa Jatinom | UMKM</title>
        <meta
          name="Desa Jatinom | Desa UMKM"
          content="Desa Jatinom dikenal sebagai Desa UMKM karena memiliki UMKM yang
              unik dan beragam. Jangan sampai kelewatan!"
        />
        <link rel="canonical" href="/umkm" />
      </Helmet>
      <Hero />
      <Pengertian />
      <ListUMKM />
    </>
  );
}
