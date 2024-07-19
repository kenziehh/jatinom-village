import React from "react";
import wave from "../../../public/assets/images/wave1.svg";

const Sejarah = () => {
  return (
    <div className="relative flex flex-col items-center px-4 md:px-12 lg:px-24">
      <img
        className="absolute w-[100vw] md:w-full -top-1"
        src={wave}
        alt="wave"
      />
      <div className="relative flex flex-col items-center gap-8 md:gap-12 pt-28 sm:pt-32 md:pt-44 lg:pt-56 xl:pt-64 2xl:pt-80">
        <div className="flex flex-col items-center px-4 md:px-8 lg:px-20">
          <div
            className="text-4xl md:text-5xl lg:text-7xl font-black text-dark-green text-center"
            // style={{
            //   WebkitTextStrokeWidth: "2px",
            //   WebkitTextStrokeColor: "#022C25",
            //   color: "transparent",
            // }}
          >
            SEJARAH DESA
          </div>
          <div className="text-base md:text-lg lg:text-xl text-dark-green font-semibold text-center w-full md:w-3/4 lg:w-2/3 mx-auto mt-4">
            "Sejarah Desa Jatinom disusun pada tahun 1960 melalui angket di
            setiap desa. Informasi diperoleh dari peninggalan dan sesepuh yang
            masih hidup saat itu, seperti Kaprawi dan Kromohardjo, yang
            menerimanya secara turun-temurun dan mengalami masa tersebut secara
            langsung."
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full">
          <div className="font-bold text-dark-green text-3xl md:text-4xl lg:text-5xl mx-auto">
            A. Asal-Usul Berdirinya Desa Jatinom
          </div>
          <div className="text-base md:text-lg lg:text-xl text-justify px-4 md:px-8 lg:px-16">
            Sekitar tahun 1800 M, <span className="font-bold">Sondermo</span>{" "}
            dan <span className="font-bold">Jondrono</span> dari{" "}
            <span className="font-bold">Desa Wajak Tulungagung</span> membuka
            hutan berisi pohon <span className="font-bold">Jati</span> dan
            menemukan arca yang dilindungi pohon tersebut, menamakan tempat itu{" "}
            <span className="font-bold">Djatiretjo</span>. Nama ini masih
            digunakan untuk daerah utara Dukuh Jatinom, dan arca tersebut
            dirawat sebagai peninggalan sejarah. Selain mereka,{" "}
            <span className="font-bold">
              Imam Sarti alias Surodjojo, Sutodjojo, dan Kertopati
            </span>{" "}
            dari <span className="font-bold">Ponorogo</span> juga ikut membuka
            hutan, yang kini termasuk desa Karang Tengah.{" "}
            <span className="font-bold">
              Surodjojo dan Sutodjojo menjadi kepala desa pertama,
            </span>{" "}
            dengan makam mereka masih ada di Karang Tengah. Kelima orang ini
            terus memperluas daerah hingga menjadi{" "}
            <span className="font-bold">Desa Jatinom.</span>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full">
          <div className="font-bold text-dark-green text-3xl md:text-4xl lg:text-5xl mx-auto">
            B. Kepala Desa Jatinom
          </div>
          <div className="flex flex-col text-base md:text-lg lg:text-xl text-justify px-4 md:px-8 lg:px-16">
            <div className="w-full">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold">
                1. SURODJOJO (1810 - 1830)
              </div>
              <div className="mt-2">
                Ketika jumlah rumah mencapai sekitar 50 dan luas daerah setengah
                dusun, atas inisiatif Surodjojo, daerah ini dipisahkan dari Desa
                Karang Tengah dan didirikan Desa Jatinom. Nama ini berasal dari
                hutan jati muda yang ditebang, dan Surodjojo diangkat sebagai
                kepala desa pertama.
              </div>
            </div>
            <hr className="my-4 mx-auto w-3/4 md:w-2/3 h-1 bg-dark-green rounded-full" />
            <div className="w-full">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold">
                2. DIPOLESONO (1830 - 1833)
              </div>
              <div className="mt-2">
                Setelah Surodjojo meninggal, jabatan kepala desa Jatinom
                diteruskan oleh keponakannya, Dipolesono. Namun, karena merasa
                tidak mampu menjalankan tugas, Dipolesono mengundurkan diri
                setelah 3 tahun.
              </div>
            </div>
            <hr className="my-4 mx-auto w-3/4 md:w-2/3 h-1 bg-dark-green rounded-full" />
            <div className="w-full">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold">
                3. SUTODJOJO (1833 - 1853)
              </div>
              <div className="mt-2">
                Pada masa itu, banyak pendatang baru dari Ponorogo dan Mataram,
                memperluas desa ini. Seorang bernama Ngarpan mendirikan langgar
                (mushola) yang kemudian dijadikan masjid. Peninggalan berupa
                bedug bertahun 1855 masih ada hingga kini.
              </div>
            </div>
            <hr className="my-4 mx-auto w-3/4 md:w-2/3 h-1 bg-dark-green rounded-full" />
            <div className="w-full">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold">
                4. TRUNOKROMO (1853 - 1858)
              </div>
              <div className="mt-2">
                Pada masa ini, Desa Jatinom diperluas dengan penambahan Dusun
                Jatisari. Trunokromo, yang berasal dari Tulungagung, menjabat
                sebagai Lurah selama 5 tahun sebelum kembali ke daerah asalnya
                dan digantikan oleh Dono Setro.
              </div>
            </div>
            <hr className="my-4 mx-auto w-3/4 md:w-2/3 h-1 bg-dark-green rounded-full" />
            <div className="w-full">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold">
                5. DONOSETRO (1858 - 1863)
              </div>
              <div className="mt-2">
                Lurah Dono Setro yang dikenal kejam mengundurkan diri karena
                lebih senang menjadi beguron. Ia kemudian digantikan oleh Kasan
                Ngalwi.
              </div>
            </div>
            <hr className="my-4 mx-auto w-3/4 md:w-2/3 h-1 bg-dark-green rounded-full" />
            <div className="w-full">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold">
                6. KASAN NGALWI (1863 - 1868)
              </div>
              <div className="mt-2">
                Pada masa itu, Dukuh Nglaos mulai dibuka, dan Kasan Ngalwi
                tinggal di Genengan Dukuh Nglaos Utara. Atas permintaan rakyat,
                ia pindah ke Jatinom. Karena kebiasaannya mengisap candu, ia
                dipanggil "Kyai Prembe." Merasa kurang penghasilan, ia
                meletakkan jabatan dan digantikan oleh modin-nya, Kasan Mustawi.
              </div>
            </div>
            <hr className="my-4 mx-auto w-3/4 md:w-2/3 h-1 bg-dark-green rounded-full" />
            <div className="w-full">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold">
                7. KASAN MUSTAWI (1869 - 1901)
              </div>
              <div className="mt-2">
                Lurah Kasan Mustawi naik haji pada tahun 1898 dan dikenal
                sebagai Haji Abdul Sukur. Tiga tahun kemudian, ia meletakkan
                jabatan dan digantikan oleh Hardjo Moestopo.
              </div>
            </div>
            <hr className="my-4 mx-auto w-3/4 md:w-2/3 h-1 bg-dark-green rounded-full" />
            <div className="w-full">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold">
                8. HARDJO MOESTOPO (1901 - 1917)
              </div>
              <div className="mt-2">
                Lurah Hardjo Moestopo memperbaiki berbagai bidang, seperti
                pendidikan, sosial, ekonomi, dan keagamaan. Ia mengembangkan
                Langgar (Mushola) di Jatinom menjadi Masjid. Sejak tahun 1914,
                Pemerintah Belanda mulai menetapkan hak pengelolaan bagi kepala
                desa, dan Hardjo Moestopo dibantu oleh Haji Mansur.
              </div>
            </div>
            <hr className="my-4 mx-auto w-3/4 md:w-2/3 h-1 bg-dark-green rounded-full" />
            <div className="w-full">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold">
                9. HADIJAR (1917 - 1933)
              </div>
              <div className="mt-2">
                Pada masa Hadijar, Desa Jatinom berkembang pesat dan banyak
                pendatang baru. Pemerintah Belanda melibatkan pemerintah desa
                dalam kegiatan sosial dan keamanan. Hadijar diangkat sebagai
                kepala desa oleh pemerintah Belanda.
              </div>
            </div>
            <hr className="my-4 mx-auto w-3/4 md:w-2/3 h-1 bg-dark-green rounded-full" />
            <div className="w-full">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold">
                10. HARJADI (1933 - 1942)
              </div>
              <div className="mt-2">
                Lurah Harjadi menggantikan Hadijar pada tahun 1933. Pada masa
                ini, Jatinom mengalami banyak kemajuan.
              </div>
            </div>
            <hr className="my-4 mx-auto w-3/4 md:w-2/3 h-1 bg-dark-green rounded-full" />
            <div className="w-full">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold">
                11. KARTO (1942 - 1950)
              </div>
              <div className="mt-2">
                Masa pendudukan Jepang menyusul setelah Harjadi, di bawah
                kepemimpinan Karto, yang kemudian digantikan oleh Kusno.
              </div>
            </div>
            <hr className="my-4 mx-auto w-3/4 md:w-2/3 h-1 bg-dark-green rounded-full" />
            <div className="w-full">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold">
                12. KUSNO (1950 - 1956)
              </div>
              <div className="mt-2">
                Kusno melanjutkan kepemimpinan setelah Karto. Pada masa ini,
                desa diperkenalkan dengan sistem pemerintahan baru.
              </div>
            </div>
            <hr className="my-4 mx-auto w-3/4 md:w-2/3 h-1 bg-dark-green rounded-full" />
            <div className="w-full">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold">
                13. M. DARIJANTO (1956 - 1970)
              </div>
              <div className="mt-2">
                Di bawah M. Darijanto, Desa Jatinom mengalami perubahan besar,
                terutama dalam hal infrastruktur dan sosial. Perubahan ini
                berlanjut hingga tahun 1970.
              </div>
            </div>
            <hr className="my-4 mx-auto w-3/4 md:w-2/3 h-1 bg-dark-green rounded-full" />
            <div className="w-full">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold">
                14. M. DARU PURWINANTO (1970 - Sekarang)
              </div>
              <div className="mt-2">
                Di bawah kepemimpinan Bapak M. Daru Purwinanto, Desa Jatinom
                mengalami kemajuan signifikan. Fokus pada pembangunan
                infrastruktur dan penerapan sistem digital menjadikan desa ini
                lebih maju dan terintegrasi dengan perkembangan teknologi.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sejarah;
