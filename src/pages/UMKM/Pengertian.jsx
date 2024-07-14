import React from "react";

const Pengertian = () => {
  return (
    <section className="py-10 md:py-20  text-black min-h-screen">
      <div className="container flex flex-col gap-6 md:gap-14 lg:gap-32">
        <div className="flex flex-col gap-8 md:gap-16">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-3xl md:text-5xl"></h2>
          </div>
        </div>
        <div className="grid gap-8 lg:gap-20 xl:gap-32 lg:grid-cols-2 lg:items-center">
          <img src="/assets/images/umkm2.jpg" alt="" className="rounded-2xl" />

          {/* <h2 className="font-semibold text-3xl md:text-5xl">Apa itu UMKM?</h2> */}
          <div className="space-y-4 lg:ml-auto flex flex-col gap-6 text-center md:text start">
            <h3 className="text-center font-semibold text-2xl md:text-4xl">
              Apa itu UMKM?
            </h3>
            <p className=" leading-loose text-base md:text-xl">
              UMKM adalah singkatan dari Usaha Mikro, Kecil, dan Menengah. UMKM
              merupakan usaha atau bisnis yang dijalankan oleh individu,
              kelompok, badan usaha kecil, maupun rumah tangga.
              {/* <br /> */}
              UMKM memiliki peran penting dalam perekonomian, terutama dalam
              menciptakan lapangan pekerjaan, meningkatkan pendapatan
              masyarakat, dan mendorong pertumbuhan ekonomi daerah. Di
              Indonesia, UMKM juga sering mendapatkan perhatian khusus dari
              pemerintah dalam bentuk bantuan, pelatihan, dan kebijakan yang
              mendukung perkembangan mereka.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pengertian;
