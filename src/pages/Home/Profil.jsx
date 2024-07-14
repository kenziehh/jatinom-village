import React from "react";

const Profil = () => {
  return (
    <section className="py-10 md:py-20 bg-dark-green text-white min-h-screen">
      <div className="container flex flex-col gap-6 md:gap-14 lg:gap-32">
        <div className="flex flex-col gap-8 md:gap-16">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-3xl md:text-5xl">Profil Desa</h2>

            <a
              href="https://www.youtube.com/watch?v=q8C4fipz2w8"
              target="_blank"
            >
              <div className="bg-white rounded-[20px] text-dark-green border-2 border-black py-2 md:py-4 px-3 md:px-6">
                Lihat di Youtube
              </div>
            </a>
          </div>
        </div>
        <div className="grid gap-8 lg:gap-20 xl:gap-32 lg:grid-cols-2 lg:items-center">
          <div className="w-full">
            <div className="h-fit">
              <iframe
                src="https://www.youtube.com/embed/q8C4fipz2w8?si=K7hx9NZBxGmE8bH8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full border-white border-3 aspect-video rounded-2xl"
              ></iframe>
            </div>
          </div>

          <div className="space-y-4 lg:ml-auto flex flex-col gap-6">
            <h3 className="text-center md:text-start font-semibold text-2xl md:text-4xl">
              Yuk kenal lebih dekat!
            </h3>
            <p className="text-justify leading-loose text-base md:text-xl">
              Mari mengenal Desa Jatinom lebih dekat melalui video berikut. Desa
              Jatinom dengan segala pesonanya mengundang Anda untuk datang dan
              merasakan langsung keramahan masyarakatnya, menikmati keindahan
              alamnya, dan menjelajahi kekayaan budayanya. Jadikan Desa Jatinom
              sebagai tujuan wisata Anda berikutnya dan ciptakan kenangan indah
              yang tak terlupakan.
            </p>
          </div>
        </div>
      </div>
    </section>
    // <section className="container py-10 md:py-20">
    //   <div className="flex flex-col gap-8 md:gap-16">
    //     <div className="flex flex-col gap-4 md:flex-row md:justify-between">
    //       <h2 className="font-semibold text-5xl">Profil Desa</h2>

    //       <a href="https://www.youtube.com/watch?v=q8C4fipz2w8" target="_blank">
    //         <div className="bg-dark-green rounded-[20px] text-white py-4 px-6">
    //           Lihat di Youtube
    //         </div>
    //       </a>
    //     </div>
    //     <div className="h-fit">
    //       <iframe
    //         className="w-full rounded-2xl"
    //         src="https://www.youtube.com/embed/q8C4fipz2w8?si=K7hx9NZBxGmE8bH8"
    //         title="Profil Desa Jatinom"
    //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //         referrerPolicy="strict-origin-when-cross-origin"
    //         allowFullScreen
    //       ></iframe>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Profil;
