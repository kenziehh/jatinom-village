import React from "react";
import SeeDetailCard from "../../components/card/SeeDetailCard";

const LihatSelengkapnya = () => {
  return (
    <section className="bg-white min-h-screen container py-10 md:py-20">
      <h2 className="font-semibold text-3xl md:text-5xl text-center ">
        Yuk Jelajahi Desa Jatinom Lebih Lanjut!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16 xl:gap-32 justify-between items-stretch mt-10 md:mt-20">
        <SeeDetailCard
          title={"Tentang Desa"}
          desc="Jelajahi Sejarah Desa Jatinom, Potensi yang dapat dikembangkan dari desa, dan juga Fakta-fakta menarik dari Desa Jatinom"
          linkTo={"/tentang"}
        />
        <SeeDetailCard
          title={"UMKM"}
          desc={
            "Jelajahi UMKM yang ada pada Desa Jatinom ini yang memiliki julukan sebagai Desa UMKM. Jangan sampai kelewatan untuk menjelajahi keanekaragaman UMKM-nya"
          }
          linkTo={"/umkm"}
        />
      </div>
    </section>
  );
};

export default LihatSelengkapnya;
