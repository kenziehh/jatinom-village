import React from "react";

const Hero = () => {
  return (
    <section className="bg-dark-green min-h-screen pb-10 pt-[10vh] md:pt-[20vh] md:pb-20">
      <div className="container flex flex-col-reverse gap-12 md:flex-row md:justify-between">
        <div className="flex flex-col items-center md:items-start gap-8 md:gap-24">
          <div className="flex flex-col gap-4 md:gap-8 text-center md:text-start">
            <h1 className="text-4xl md:text-6xl text-white font-semibold">
              Desa Jatinom
            </h1>
            <p className="max-w-md text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              cupiditate ut quos, aliquid veniam voluptates explicabo, sunt
              accusamus possimus pariatur fugiat ullam maiores voluptatem!
              Facilis ratione unde asperiores similique natus!
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl py-3 px-6 flex items-center gap-2">
            <img
              src="/assets/icons/map.png"
              alt=""
              className="w-8 h-8"
            />
            <span className="text-gray-400">Kanigoro, Kabupaten Blitar</span>
          </div>
        </div>
        <div className="">
            <img src="https://placehold.co/600x400" alt="" className="rounded-2xl" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
