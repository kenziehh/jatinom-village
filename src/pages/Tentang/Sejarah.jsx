import React from "react";
import wave from "../../../public/assets/images/wave1.svg";

const Sejarah = () => {
  return (
    <div className="flex flex-col relative justify-center items-center px-24">
      <img
        className="absolute w-[100vw] md:w-full -top-1"
        src={wave}
        alt="wave"
      />
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col px-20 pt-80 justify-center items-center gap-10">
          <div
            className="text-7xl font-black text-dark-green"
            // style={{
            //   WebkitTextStrokeWidth: "2px",
            //   WebkitTextStrokeColor: "#022C25",
            //   color: "transparent",
            // }}
          >
            SEJARAH DESA
          </div>
          <div className="text-center text-dark-green font-semibold text-lg w-3/4">
            "Sejarah Desa Jatinom disusun pada tahun 1960 melalui angket di
            setiap desa. Informasi diperoleh dari peninggalan dan sesepuh yang
            masih hidup saat itu, seperti Kaprawi dan Kromohardjo, yang
            menerimanya secara turun-temurun dan mengalami masa tersebut secara
            langsung."
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div className="font-bold text-dark-green text-4xl">
            A. Asal-Usul Berdirinya Desa Jatinom
          </div>
          <div className="text-justify">
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
        <div className="flex flex-col gap-5 w-full">
          <div className="font-bold text-dark-green text-4xl">
            B. Kepala Desa Jatinom
          </div>
          <div className="flex flex-col text-justify pl-10 gap-5">
            <div className="w-full">
              <div className="text-2xl font-bold">
                1. SURODJOJO (1810 - 1830)
              </div>
              <div className="w-2/3">
                Ketika jumlah rumah mencapai sekitar 50 dan luas daerah setengah
                dusun, atas inisiatif Surodjojo, daerah ini dipisahkan dari Desa
                Karang Tengah dan didirikan Desa Jatinom. Nama ini berasal dari
                hutan jati muda yang ditebang, dan Surodjojo diangkat sebagai
                kepala desa pertama.
              </div>
            </div>
            <hr className="w-2/3 self-end h-1 bg-dark-green rounded-full"/>
            <div className="w-full">
              <div className="text-2xl font-bold">
                2. DIPOLESONO (1830 - 1833)
              </div>
              <div className="w-2/3">
                Setelah Surodjojo meninggal, jabatan kepala desa Jatinom
                diteruskan oleh keponakannya, Dipolesono. Namun, karena merasa
                tidak mampu menjalankan tugas, Dipolesono mengundurkan diri
                setelah 3 tahun.
              </div>
            </div>
            <hr className="w-2/3 self-end h-1 bg-dark-green rounded-full"/>
            <div className="w-full">
              <div className="text-2xl font-bold">
                3. SUTODJOJO (1833 - 1853)
              </div>
              <div className="w-2/3">
                Pada masa itu, banyak pendatang baru dari Ponorogo dan Mataram,
                memperluas desa ini. Seorang bernama Ngarpan mendirikan langgar
                (mushola) yang kemudian dijadikan masjid. Peninggalan berupa
                bedug bertahun 1855 masih ada hingga kini.
              </div>
            </div>
            <hr className="w-2/3 self-end h-1 bg-dark-green rounded-full"/>
            <div className="w-full">
              <div className="text-2xl font-bold">
                4. TRUNOKROMO (1853 - 1858)
              </div>
              <div className="w-2/3">
                Pada masa ini, Desa Jatinom diperluas dengan penambahan Dusun
                Jatisari. Trunokromo, yang berasal dari Tulungagung, menjabat
                sebagai Lurah selama 5 tahun sebelum kembali ke daerah asalnya
                dan digantikan oleh Dono Setro.
              </div>
            </div>
            <hr className="w-2/3 self-end h-1 bg-dark-green rounded-full"/>
            <div className="w-full">
              <div className="text-2xl font-bold">
                5. DONOSETRO (1858 - 1863)
              </div>
              <div className="w-2/3">
                Lurah Dono Setro yang dikenal kejam mengundurkan diri karena
                lebih senang menjadi beguron. Ia kemudian digantikan oleh Kasan
                Ngalwi.
              </div>
            </div>
            <hr className="w-2/3 self-end h-1 bg-dark-green rounded-full"/>
            <div className="w-full">
              <div className="text-2xl font-bold">
                6. KASAN NGALWI (1863 - 1868)
              </div>
              <div className="w-2/3">
                Pada masa itu, Dukuh Nglaos mulai dibuka, dan Kasan Ngalwi
                tinggal di Genengan Dukuh Nglaos Utara. Atas permintaan rakyat,
                ia pindah ke Jatinom. Karena kebiasaannya mengisap candu, ia
                dipanggil "Kyai Prembe." Merasa kurang penghasilan, ia
                meletakkan jabatan dan digantikan oleh modin-nya, Kasan Mustawi.
              </div>
            </div>
            <hr className="w-2/3 self-end h-1 bg-dark-green rounded-full"/>
            <div className="w-full">
              <div className="text-2xl font-bold">
                7. KASAN MUSTAWI (1869 - 1901)
              </div>
              <div className="w-2/3">
                Lurah Kasan Mustawi naik haji pada tahun 1898 dan dikenal
                sebagai Haji Abdul Sukur. Tiga tahun kemudian, ia meletakkan
                jabatan dan digantikan oleh Hardjo Moestopo.
              </div>
            </div>
            <hr className="w-2/3 self-end h-1 bg-dark-green rounded-full"/>
            <div className="w-full">
              <div className="text-2xl font-bold">
                8. HARDJO MOESTOPO (1901 - 1906 )
              </div>
              <div className="w-2/3">
                Lurah Hardjo Moestopo mengundurkan diri karena merasa tidak
                cakap dan digantikan oleh Sotaroeno.
              </div>
            </div>
            <hr className="w-2/3 self-end h-1 bg-dark-green rounded-full"/>
            <div className="w-full">
              <div className="text-2xl font-bold">
                9. SOTAROENO (1906 - 1918)
              </div>
              <div className="w-2/3">
                Karena Lurah Sotaroeno tinggal di Dukuh Nglaos, pusat
                pemerintahan desa dipindahkan ke Dukuh Nglaos hingga ia
                digantikan oleh Reso Sentono.
              </div>
            </div>
            <hr className="w-2/3 self-end h-1 bg-dark-green rounded-full"/>
            <div className="w-full">
              <div className="text-2xl font-bold">
                10. RESO SENTONO (1918 - 1930)
              </div>
              <div className="w-2/3">
                Karena Reso Sentono tinggal di Dusun Krajan Jatinom, pusat
                pemerintahan desa dipindahkan kembali ke Dukuh Jatinom. Pada
                masa kepemimpinannya, tepatnya tahun 1920, didirikan Sekolah
                Rakyat (SR) tiga tahun yang pertama di Desa Jatinom, sementara
                desa tetangga belum memilikinya. Namun, karena kasus
                penganiayaan terhadap seorang pencuri, Reso Sentono
                dinonaktifkan dari jabatannya selama satu tahun dan dihukum enam
                bulan penjara. Akhirnya, ia digantikan oleh Hirontono.
              </div>
            </div>
            <hr className="w-2/3 self-end h-1 bg-dark-green rounded-full"/>
            <div className="w-full">
              <div className="text-2xl font-bold">
                11. HIRONTONO (1931 - 1967)
              </div>
              <div className="w-2/3">
                Pada masa ini, kelurahan dipindahkan ke Dusun Nglaos untuk kedua
                kalinya karena Lurah Hirontono tinggal di sana. Lurah Hirontono
                kemudian membangun jembatan yang menghubungkan Jatinom dan
                Nglaos secara gotong royong. Setelah Lurah Hirontono meninggal
                dunia pada 7 Maret 1967 masih dalam jabatan, sementara Kepala
                Desa dijabat oleh Kamituwo Suratmo dari Dukuh Nglaos, kemudian
                digantikan oleh Tegoeh.
              </div>
            </div>
            <hr className="w-2/3 self-end h-1 bg-dark-green rounded-full"/>
            <div className="w-full">
              <div className="text-2xl font-bold">
                12. SURATMO (1967 - 1969)
              </div>
              <div className="w-2/3">
                Pj Kepala Desa Suratmo memimpin Desa Jatinom selama transisi
                persiapan pemilihan kepala desa baru. Selama masa jabatannya,
                beliau melanjutkan program-program yang telah dilaksanakan oleh
                Kepala Desa Hirontono hingga terpilih kepala desa yang baru.
              </div>
            </div>
            <hr className="w-2/3 self-end h-1 bg-dark-green rounded-full"/>
            <div className="w-full">
              <div className="text-2xl font-bold">13. TEGOEH (1969 - 1984)</div>
              <div className="w-2/3">
                Tegoeh adalah carateker Kamituwo Jatisari, kemudian carateker
                Kepala Desa, selanjutnya di angkat Kepala desa pada tanggal 20
                Juli l970 hasil pilihan, dalam zaman inilah dengan SK Bupati
                karena usia lanjut, kemudian digantikan oleh Sdr. Sardi
                (Kamituwo Jatinom ) sebagai pejabat sementara Kepala Desa.
              </div>
            </div>
            <hr className="w-2/3 self-end h-1 bg-dark-green rounded-full"/>
            <div className="w-full">
              <div className="text-2xl font-bold">14. SARDI (1984 - 1989)</div>
              <div className="w-2/3">
                Pada masa ini terjadi perubahan besar dalam tata aturan
                pemerintahan desa akibat berlakunya Undang-Undang No 5 Tahun
                1979, yang mengubah struktur perangkat desa menjadi Kepala Desa,
                Sekretaris Desa, Kepala Dusun, 5 Kepala Urusan, serta RW dan RT,
                sesuai dengan tugas dan tanggung jawab yang diatur dalam UU.
                Juga didirikan Gedung Balai Desa untuk memperkuat pusat
                pemerintahan desa agar tidak berpindah-pindah seperti
                sebelumnya. Sardi mengakhiri masa jabatannya setelah Kepala Desa
                baru terpilih pada 19 Juni 1989, yaitu M. Daru Purwinanto. Sardi
                kemudian mengundurkan diri dari perangkat desa pada 2 Januari
                1991 karena usia lanjut.
              </div>
            </div>
            <hr className="w-2/3 self-end h-1 bg-dark-green rounded-full"/>
            <div className="w-full">
              <div className="text-2xl font-bold">
                15. M. DARU PURWINANTO (1989 - 2005)
              </div>
              <div className="w-2/3">
                Pada masa ini, pembangunan desa mengalami kemajuan pesat.
                Pembangunan fisik meliputi pengaspalan jalan protokol dan jalan
                lingkungan dengan dana swadaya, pembangunan balai desa dan balai
                dusun, serta rehabilitasi sarana dan prasarana masyarakat.
                Pembangunan ini didanai oleh swadaya masyarakat maupun proyek
                pemerintah. Banyak prestasi diraih dalam lomba desa dan
                olahraga. Pelaksanaan pemerintahan desa kini melibatkan
                pemilihan perangkat desa secara langsung oleh masyarakat, dan
                administrasi sudah menggunakan sistem komputerisasi. Selama masa
                jabatan, dilakukan juga tukar guling tanah bengkok untuk
                pembangunan lapangan olahraga Desa Jatinom.
              </div>
            </div>
            <hr className="w-2/3 self-end h-1 bg-dark-green rounded-full"/>
            <div className="w-full">
              <div className="text-2xl font-bold">
                16. Drs. Masrun (2006 - 2007)
              </div>
              <div className="w-2/3">
                Drs. Masrun menjabat sebagai Sekretaris Desa Jatinom dan Kepala
                Desa selama sekitar 2 tahun. Selama periode ini, ia melanjutkan
                pembangunan fisik dan ekonomi dari pejabat sebelumnya dengan
                membangun akses dan jaringan dengan instansi dan institusi.
                Program yang dilaksanakan antara lain Agropolitan dengan
                pengaspalan 2 km jalur pertanian dan jalur protokol hotmix,
                Program PNPM-P2KP, ADD, serta PAM-DKB tahun 2006 untuk investasi
                simpan pinjam bagi warga miskin dengan usaha ekonomi. Pemilihan
                Kepala Desa diadakan pada 25 September 2007 secara serentak di
                156 desa se-Kabupaten Blitar. Pada masa ini, pembangunan
                Musholla di Kantor Desa juga dimulai.
              </div>
            </div>
            <hr className="w-2/3 self-end h-1 bg-dark-green rounded-full"/>
            <div className="w-full">
              <div className="text-2xl font-bold">
                17. SAMUR, S.Sos. (2007 - 2013)
              </div>
              <div className="w-2/3">
                Kepala Desa Samur S Sos dilantik pada 12 Desember 2007 dan masa
                jabatannya berakhir pada 12 Desember 2013. Beliau, yang berasal
                dari PNS Lingkungan Pemerintah Daerah Kabupaten Blitar,
                memenangkan pemilihan kepala desa pada 2007 dan pada saat itu UU
                No 32 Tahun 2004 sudah diterapkan. Pada tahun 2009, Sekretaris
                Desa diangkat menjadi PNS. Selama masa kepemimpinan Samur,
                Kantor Desa Jatinom direnovasi besar-besaran menjadi kantor desa
                berlantai dua, dan peresmiannya dilakukan oleh Bupati Blitar,
                Bapak Heri Nugroho, pada tahun 2012. Pada tahun 2013, dilakukan
                pengisian lowongan Perangkat Desa yang kosong, seperti Kaur
                Pemerintahan dan Kaur Keuangan. Perangkat Desa Jatinom mulai
                menerima tunjangan dari Pemerintah Kabupaten Blitar, dan
                Asosiasi Pengurus Desa Indonesia (PPDI) terbentuk untuk menaungi
                para perangkat desa. Semoga Allah SWT selalu memberi petunjuk
                kepada para pamong desa.
              </div>
            </div>
            <hr className="w-2/3 self-end h-1 bg-dark-green rounded-full"/>
            <div className="w-full">
              <div className="text-2xl font-bold">
                18. TAUFIQURROHMAN (2014 - 2019)
              </div>
              <div className="w-2/3">
                Pada masa ini, perkembangan Desa Jatinom sangat menonjol dengan
                dukungan ADD dan Dana Desa (DD) untuk meningkatkan kesejahteraan
                masyarakat. Pembangunan fisik dan non-fisik, termasuk pelatihan
                untuk berbagai lapisan masyarakat, menjadi prioritas. Perangkat
                Desa mulai menerima penghasilan tetap (Siltap) setiap bulan.
                Desa Jatinom meraih beberapa penghargaan, seperti Lomba Gotong
                Royong tingkat Kabupaten Blitar 2016, Penghargaan Bidang
                Kewilayahan 2017, dan penghargaan di bidang lingkungan untuk
                Program Desa Berseri pada 2015 dan 2016.
              </div>
            </div>
            <hr className="w-2/3 self-end h-1 bg-dark-green rounded-full"/>
            <div className="w-full">
              <div className="text-2xl font-bold">
                19. M. DARU PURWINANTO (2019 - SEKARANG)
              </div>
              <div className="w-2/3">
                Bapak M. Daru Purwinanto, sebagai Kepala Desa Jatinom untuk
                ketiga kalinya, menunjukkan tingkat kepercayaan masyarakat yang
                tinggi. Di era ini, masa jabatan Kepala Desa berubah dari 6
                tahun menjadi 8 tahun sesuai UU Desa No 3 Tahun 2024.
                Pembangunan pesat didorong oleh Dana Desa (DD), Alokasi Dana
                Desa (ADD), dan Bagi Hasil Pajak (BHP). Semua proses
                pemerintahan kini menggunakan sistem digital, dengan aplikasi
                seperti Siskeudes untuk keuangan desa, Siridoaja untuk
                pembayaran pajak, Sipades untuk inventarisasi aset, serta sistem
                online untuk kependudukan dan pendataan masyarakat miskin. Pada
                tahun 2019, wabah COVID-19 menyebabkan banyak warga meninggal
                dan mengalihkan anggaran desa untuk penanganan wabah, termasuk
                pemberian vaksin dan bantuan isolasi mandiri. Pada awal 2022,
                wabah mulai reda dan dianggap menjadi penyakit flu biasa.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sejarah;
