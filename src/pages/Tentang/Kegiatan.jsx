import React from "react";
import KegiatanCard from "../../components/card/KegiatanCard";

const Kegiatan = () => {
  return (
    <div className="flex flex-col relative justify-center items-center px-6 md:px-12 lg:px-24 bg-dark-green text-white py-10 md:py-16 lg:py-20 gap-7">
      <div className="text-4xl md:text-5xl lg:text-7xl font-black text-center">
        KEGIATAN
      </div>
      <div className="flex flex-col justify-center items-center gap-7 md:gap-5 mt-4 md:mt-8">
        {/* <div className="text-base md:text-lg lg:text-xl text-center mb-6">
          Desa Jatinom memiliki berbagai kegiatan rutin yang bertujuan untuk
          meningkatkan kesehatan dan kesejahteraan masyarakat. Berikut adalah
          beberapa kegiatan rutin yang dilakukan di desa ini:
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-10">
          <KegiatanCard
            img={"/assets/images/kegiatan/posyandubalita.jpg"}
            desc={`Posyandu balita adalah
            kegiatan pelayanan kesehatan dasar yang melibatkan pemantauan tumbuh
            kembang anak, imunisasi, serta penyuluhan gizi bagi ibu dan anak.`}
            title={"Posyandu Balita (5 pos)"}
          />
          <KegiatanCard
            img={"/assets/images/kegiatan/posyandulansia.jpg"}
            desc={`Posyandu lansia
            menyediakan pelayanan kesehatan bagi warga lanjut usia, termasuk
            pemeriksaan kesehatan rutin, penyuluhan kesehatan, dan kegiatan
            sosial untuk meningkatkan kualitas hidup lansia.`}
            title={"Posyandu Lansia (2 pos)"}
          />
          <KegiatanCard
            img={"/assets/images/kegiatan/posyanduhamil.jpg"}
            desc={`Kegiatan
            ini memberikan pelayanan kesehatan bagi ibu hamil dan menyusui,
            seperti pemeriksaan kehamilan, edukasi tentang kesehatan ibu dan
            anak, serta dukungan laktasi.`}
            title={"Posyandu Ibu Hamil dan Menyusui (1 pos)"}
          />
          {/* <KegiatanCard
            img={"/assets/images/kegiatan/posyandubalita.jpg"}
            desc={`Posyandu balita adalah
            kegiatan pelayanan kesehatan dasar yang melibatkan pemantauan tumbuh
            kembang anak, imunisasi, serta penyuluhan gizi bagi ibu dan anak.`}
            title={"Posyandu Balita (5 pos)"}
          /> */}
        </div>
        {/* <ol className="list-decimal list-inside text-left text-base md:text-lg lg:text-xl">
          <li className="mb-4">
            <strong>Posyandu Balita (5 pos):</strong> Posyandu balita adalah
            kegiatan pelayanan kesehatan dasar yang melibatkan pemantauan tumbuh
            kembang anak, imunisasi, serta penyuluhan gizi bagi ibu dan anak.
          </li>
          <li className="mb-4">
            <strong>Posyandu Lansia (2 pos):</strong> Posyandu lansia
            menyediakan pelayanan kesehatan bagi warga lanjut usia, termasuk
            pemeriksaan kesehatan rutin, penyuluhan kesehatan, dan kegiatan
            sosial untuk meningkatkan kualitas hidup lansia.
          </li>
          <li className="mb-4">
            <strong>Posyandu Ibu Hamil dan Menyusui (1 pos):</strong> Kegiatan
            ini memberikan pelayanan kesehatan bagi ibu hamil dan menyusui,
            seperti pemeriksaan kehamilan, edukasi tentang kesehatan ibu dan
            anak, serta dukungan laktasi.
          </li>
          <li className="mb-4">
            <strong>Posbindu (1 pos):</strong> Pos Binaan Terpadu (Posbindu)
            adalah kegiatan pemeriksaan kesehatan secara berkala yang melibatkan
            deteksi dini dan pemantauan faktor risiko penyakit tidak menular
            pada masyarakat.
          </li>
        </ol> */}
      </div>
      <div className="flex flex-col justify-center items-center gap-4 md:gap-7 text-center">
        {/* <div className="text-base md:text-lg lg:text-xl">
          Kegiatan-kegiatan ini sangat penting dalam mendukung kesehatan dan
          kesejahteraan masyarakat Desa Jatinom. Partisipasi aktif dari warga
          desa dalam kegiatan posyandu dan posbindu membantu menciptakan
          lingkungan yang sehat dan sejahtera.
        </div>
        <div className="text-base md:text-lg lg:text-xl">
          Selain kegiatan rutin ini, Desa Jatinom juga mengadakan berbagai acara
          dan kegiatan sosial lainnya untuk mempererat kebersamaan dan gotong
          royong antar warga. Partisipasi dan dukungan dari seluruh lapisan
          masyarakat sangat diharapkan untuk keberlangsungan dan kesuksesan
          kegiatan-kegiatan ini.
        </div> */}
      </div>
    </div>
  );
};

export default Kegiatan;
