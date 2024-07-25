import React from "react";
import wave from "../../../public/assets/images/wave1.svg";

const Sejarah = () => {
  return (
    <div className="relative flex flex-col items-center px-4 md:px-24 pt-10 sm:pt-16 md:pt-24 lg:pt-32 xl:pt-44 2xl:pt-52">
      {/* Background Wave Image */}
      <img
        className="absolute inset-0 w-full h-auto object-cover -top-1"
        src={wave}
        alt="wave"
      />
      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center gap-10 py-10 md:py-20">
        {/* Section Title */}
        <div className="text-center px-4 md:px-20">
          <div className="text-4xl md:text-6xl font-black text-dark-green">
            SEJARAH DESA
          </div>
          <div className="text-center text-dark-green font-semibold text-base md:text-lg mt-4 mx-auto max-w-2xl">
            "Sejarah Desa Jatinom disusun pada tahun 1960 melalui angket di
            setiap desa. Informasi diperoleh dari peninggalan dan sesepuh yang
            masih hidup saat itu, seperti Kaprawi dan Kromohardjo, yang
            menerimanya secara turun-temurun dan mengalami masa tersebut secara
            langsung."
          </div>
        </div>
        {/* Asal-Usul Berdirinya Desa Jatinom */}
        <div className="flex flex-col gap-5 w-full px-4 md:px-20">
          <div className="font-bold text-dark-green text-2xl md:text-4xl">
            A. Asal-Usul Berdirinya Desa Jatinom
          </div>
          <div className="text-justify text-base md:text-lg">
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
        {/* Kepala Desa Jatinom */}
        <div className="flex flex-col gap-5 w-full px-4 md:px-20">
          <div className="font-bold text-dark-green text-2xl md:text-4xl">
            B. Kepala Desa Jatinom
          </div>
          <div className="flex flex-col gap-5">
            {/* List of Desa Heads */}
            {[
              { name: "SURODJOJO", term: "1810 - 1830", content: "Ketika jumlah rumah mencapai sekitar 50 dan luas daerah setengah dusun, atas inisiatif Surodjojo, daerah ini dipisahkan dari Desa Karang Tengah dan didirikan Desa Jatinom. Nama ini berasal dari hutan jati muda yang ditebang, dan Surodjojo diangkat sebagai kepala desa pertama." },
              { name: "DIPOLESONO", term: "1830 - 1833", content: "Setelah Surodjojo meninggal, jabatan kepala desa Jatinom diteruskan oleh keponakannya, Dipolesono. Namun, karena merasa tidak mampu menjalankan tugas, Dipolesono mengundurkan diri setelah 3 tahun." },
              { name: "SUTODJOJO", term: "1833 - 1853", content: "Pada masa itu, banyak pendatang baru dari Ponorogo dan Mataram, memperluas desa ini. Seorang bernama Ngarpan mendirikan langgar (mushola) yang kemudian dijadikan masjid. Peninggalan berupa bedug bertahun 1855 masih ada hingga kini." },
              { name: "TRUNOKROMO", term: "1853 - 1858", content: "Pada masa ini, Desa Jatinom diperluas dengan penambahan Dusun Jatisari. Trunokromo, yang berasal dari Tulungagung, menjabat sebagai Lurah selama 5 tahun sebelum kembali ke daerah asalnya dan digantikan oleh Dono Setro." },
              { name: "DONOSETRO", term: "1858 - 1863", content: "Lurah Dono Setro yang dikenal kejam mengundurkan diri karena lebih senang menjadi beguron. Ia kemudian digantikan oleh Kasan Ngalwi." },
              { name: "KASAN NGALWI", term: "1863 - 1868", content: "Pada masa itu, Dukuh Nglaos mulai dibuka, dan Kasan Ngalwi tinggal di Genengan Dukuh Nglaos Utara. Atas permintaan rakyat, ia pindah ke Jatinom. Karena kebiasaannya mengisap candu, ia dipanggil 'Kyai Prembe.' Merasa kurang penghasilan, ia meletakkan jabatan dan digantikan oleh modin-nya, Kasan Mustawi." },
              { name: "KASAN MUSTAWI", term: "1869 - 1901", content: "Lurah Kasan Mustawi naik haji pada tahun 1898 dan dikenal sebagai Haji Abdul Sukur. Tiga tahun kemudian, ia meletakkan jabatan dan digantikan oleh Hardjo Moestopo." },
              { name: "HARDJO MOESTOPO", term: "1901 - 1906", content: "Lurah Hardjo Moestopo mengundurkan diri karena merasa tidak cakap dan digantikan oleh Sotaroeno." },
              { name: "SOTAROENO", term: "1906 - 1918", content: "Karena Lurah Sotaroeno tinggal di Dukuh Nglaos, pusat pemerintahan desa dipindahkan ke Dukuh Nglaos hingga ia digantikan oleh Reso Sentono." },
              { name: "RESO SENTONO", term: "1918 - 1930", content: "Karena Reso Sentono tinggal di Dusun Krajan Jatinom, pusat pemerintahan desa dipindahkan kembali ke Dukuh Jatinom. Pada masa kepemimpinannya, tepatnya tahun 1920, didirikan Sekolah Rakyat (SR) tiga tahun yang pertama di Desa Jatinom, sementara desa tetangga belum memilikinya. Namun, karena kasus penganiayaan terhadap seorang pencuri, Reso Sentono dinonaktifkan dari jabatannya selama satu tahun dan dihukum enam bulan penjara. Akhirnya, ia digantikan oleh Hirontono." },
              { name: "HIRONTONO", term: "1931 - 1967", content: "Pada masa ini, kelurahan dipindahkan ke Dusun Nglaos untuk kedua kalinya karena Lurah Hirontono tinggal di sana. Lurah Hirontono kemudian membangun jembatan yang menghubungkan Jatinom dan Nglaos secara gotong royong. Setelah Lurah Hirontono meninggal dunia pada 7 Maret 1967 masih dalam jabatan, sementara Kepala Desa dijabat oleh Kamituwo Suratmo dari Dukuh Nglaos, kemudian digantikan oleh Tegoeh." },
              { name: "SURATMO", term: "1967 - 1969", content: "Pj Kepala Desa Suratmo memimpin Desa Jatinom selama transisi persiapan pemilihan kepala desa baru. Selama masa jabatannya, beliau melanjutkan program-program yang telah dilaksanakan oleh Kepala Desa Hirontono hingga terpilih kepala desa yang baru." },
              { name: "TEGOEH", term: "1969 - 1984", content: "Tegoeh adalah carateker Kamituwo Jatisari, kemudian carateker Kepala Desa, selanjutnya di angkat Kepala desa pada tanggal 20 Juli 1970 hasil pilihan, dalam zaman inilah dengan SK Bupati karena usia lanjut, kemudian digantikan oleh Sdr. Sardi (Kamituwo Jatinom) sebagai pejabat sementara Kepala Desa." },
              { name: "SARDI", term: "1984 - 1989", content: "Pada masa ini terjadi perubahan besar dalam tata aturan pemerintahan desa, dengan terbitnya undang-undang dan peraturan baru. Sardi menjalankan kepemimpinan dengan berfokus pada administrasi dan pembaruan kebijakan." },
              { name: "MUH.SARIKIN", term: "1989 - 1995", content: "Muh. Sarikin sebagai Kepala Desa Jatinom menjalankan berbagai program pembangunan dan pemberdayaan masyarakat dengan fokus pada peningkatan infrastruktur dan pelayanan publik." },
              { name: "SUSANTO", term: "1995 - 2003", content: "Susanto melanjutkan program-program pembangunan yang telah dimulai oleh kepala desa sebelumnya dan berfokus pada pengembangan ekonomi lokal dan peningkatan kesejahteraan masyarakat." },
              { name: "SUGIARTO", term: "2003 - 2013", content: "Sugiarto melaksanakan berbagai proyek pembangunan dan pengembangan desa, dengan penekanan pada peningkatan pendidikan dan kesehatan masyarakat." },
              { name: "M.DARU PURWINANTO", term: "2013 - Sekarang", content: "Di bawah kepemimpinan Bapak M. Daru Purwinanto, Desa Jatinom mengalami perkembangan pesat dengan fokus pada digitalisasi layanan dan peningkatan infrastruktur desa. Program-program inovatif dan partisipatif dilaksanakan untuk membawa kemajuan signifikan bagi masyarakat desa." },
            ].map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="font-bold text-dark-green text-xl md:text-2xl">
                  {item.name} ({item.term})
                </div>
                <div className="text-justify text-base md:text-lg">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sejarah;
