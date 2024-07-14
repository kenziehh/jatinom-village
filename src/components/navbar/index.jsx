import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`${
        isScrolled ? "backdrop-blur-md" : ""
      } sticky left-0 top-0 z-[99999999] h-fit bg-white flex justify-between drop-shadow-2xl`}
    >
      <div className="flex flex-wrap items-center justify-between container py-4">
        <Link to={"/"} className="cursor-pointer">
          <img src="/assets/icons/logo-nav.png" alt="" />
        </Link>
        <div className="flex md:flex-row gap-4">
          <Link to={"/"} >Beranda</Link>
          <Link to={"/tentang"} >Tentang</Link>
          <Link to={"/galeri"} >Galeri</Link>
        </div>
        <button className="bg-dark-green rounded-[20px] text-white py-2 px-4">
          Kontak Kami
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
