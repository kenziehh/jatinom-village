import React from "react";
import PotensiCard from "../../components/card/PotensiCard";

const Fakta = () => {
  return (
    <div className="flex flex-col relative justify-center items-center px-6 md:px-12 lg:px-24 py-10 md:py-16 lg:py-20 text-dark-green bg-white">
      <div className="text-4xl md:text-5xl lg:text-7xl font-black text-center mb-4 md:mb-8">
        FAKTA
      </div>
      <div className="flex flex-col justify-center items-center gap-4 md:gap-5">
        <div className="text-base md:text-lg lg:text-xl text-center mb-4">
          Berikut adalah beberapa fakta menarik tentang Desa Jatinom:
        </div>
        {/* <ol className="list-decimal list-inside text-left text-base md:text-lg lg:text-xl w-full max-w-4xl">
          <li className="mb-4">
            <strong>Desa UMKM:</strong> Desa Jatinom dikenal sebagai desa dengan banyak usaha mikro, kecil, dan menengah (UMKM) yang berkontribusi pada ekonomi lokal.
          </li>
          <li className="mb-4">
            <strong>Tempat Penampungan Terbesar:</strong> Desa ini memiliki tempat penampungan terbesar di kawasan Kanigoro, yang memudahkan distribusi dan penyimpanan barang.
          </li>
          <li className="mb-4">
            <strong>Kedekatan dengan Kota:</strong> Desa Jatinom terletak dekat dengan kota, yang memudahkan aksesibilitas dan mendukung pertumbuhan ekonomi lokal.
          </li>
          <li className="mb-4">
            <strong>Infrastruktur Jalan:</strong> Desa Jatinom memiliki infrastruktur jalan yang baik, memudahkan mobilitas warga dan akses ke fasilitas umum.
          </li>
          <li className="mb-4">
            <strong>Potensi Pertanian:</strong> Desa ini dikenal dengan potensi pertanian yang tinggi, dengan lahan subur yang mendukung berbagai jenis tanaman.
          </li>
          <li className="mb-4">
            <strong>Kegiatan Sosial:</strong> Desa Jatinom rutin mengadakan berbagai kegiatan sosial dan budaya yang melibatkan seluruh masyarakat, memperkuat rasa kebersamaan.
          </li>
        </ol> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 items-stretch">
          <PotensiCard
            desc={
              " Desa Jatinom dikenal sebagai desa dengan banyak usaha mikro, kecil, dan menengah (UMKM) yang berkontribusi pada ekonomi lokal."
            }
            title={"Desa UMKM"}
            img={"/assets/images/pasarmalam.jpeg"}
          />
          <PotensiCard
            desc={
              " Desa Jatinom dikenal sebagai desa dengan banyak usaha mikro, kecil, dan menengah (UMKM) yang berkontribusi pada ekonomi lokal."
            }
            title={"TPS Terbesar"}
            img={"/assets/images/tps.jpg"}
          />
          <PotensiCard
            desc={
              " Desa Jatinom memiliki infrastruktur jalan yang baik, memudahkan mobilitas warga dan akses ke fasilitas umum."
            }
            title={"Infrastruktur Jalan"}
            img={"/assets/images/infrastruktur-jalan-jatinom.JPG"}
          />
          <PotensiCard
            desc={
              "Desa Jatinom terletak dekat dengan kota, yang memudahkan aksesibilitas dan mendukung pertumbuhan ekonomi lokal."
            }
            title={"Dekat dengan Kota"}
            img={"/assets/images/dekatkota.jpg"}
          />
        </div>
      </div>
    </div>
  );
};

export default Fakta;
