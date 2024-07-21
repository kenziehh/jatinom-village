import React from "react";

const Hero = () => {
  return (
    <section className="pb-10 pt-[10vh] md:pt-[20vh] md:pb-20">
      <div className="container flex flex-col gap-6 md:gap-14 lg:gap-32">
        <div className="flex gap-8 lg:gap-20 xl:gap-32 flex-col md:flex-row md:items-center">
          <div className="space-y-4 lg:ml-auto flex flex-col gap-6">
            <h1 className="text-dark-green text-4xl md:text-5xl xl:text-6xl text-center md:text-center font-semibold">
              Yuk Jelajahi UMKM yang ada di{" "}
              <span className="text-normal-green">Desa Jatinom!</span>
            </h1>
            <p className="text-center">
              Desa Jatinom dikenal sebagai Desa UMKM karena memiliki UMKM yang
              unik dan beragam loh! Jangan sampai kelewatan ya
            </p>
          </div>
          <div className="w-full">
            <div className="h-fit">
              <img src="/assets/images/umkm.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
