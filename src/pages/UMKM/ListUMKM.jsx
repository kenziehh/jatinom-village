import React, { useState } from "react";
import { UMKMData } from "./UMKMData";
import UMKMCard from "../../components/card/UMKMCard";

const ListUMKM = () => {
  const UMKMTypes = ["Produk", "Merk"];
  const [activeType, setActiveType] = useState("Produk");
  const filteredUMKM = UMKMData.filter((umkm) => umkm.tipeData === activeType);

  return (
    <section className="container min-h-screen flex flex-col gap-6 md:gap-10 py-10 md:py-20">
      <h2 className="font-semibold text-3xl md:text-5xl text-center">
        Apa Saja UMKM Yang Ada di{" "}
        <span className="text-normal-green">Desa Jatinom</span>?
      </h2>
      <div className="flex md:gap-[42px] gap-6 justify-around mb-4 overflow-x-auto mt-4 md:mt-10">
        {UMKMTypes.map((UMKMType) => (
          <div
            key={UMKMType}
            onClick={() => setActiveType(UMKMType)}
            className={`cursor-pointer flex flex-col gap-2 w-full text-center ${
              activeType === UMKMType
                ? "border-b-2 border-normal-green font-bold text-normal-green"
                : "font-normal text-black"
            } `}
          >
            <h3 className="hidden md:block">{UMKMType}</h3>
            <h3 className="md:hidden">{UMKMType}</h3>
          </div>
        ))}
      </div>
      <div
        className={
          activeType === "Produk"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "flex flex-col gap-3 md:gap-6"
        }
      >
        {filteredUMKM.map((umkm) => (
          <UMKMCard key={umkm.id} umkm={umkm} />
        ))}
      </div>
    </section>
  );
};

export default ListUMKM;
