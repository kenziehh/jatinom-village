import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    isOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const [open, isOpen] = useState(false);
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
        <div
          onClick={() => isOpen(!open)}
          className={`items-center cursor-pointer lg:hidden transition-all duration-500 ${
            open ? "hidden" : ""
          }`}
        >
          <FaBars
            name={open ? "close" : "menu"}
            size={40}
            className="text-dark-green"
          />
        </div>
        <div
          className={`items-center cursor-pointer lg:hidden z-10 transition-all duration-1000 ${
            open ? "z-10" : "hidden"
          }`}
          onClick={() => isOpen(!open)}
        >
          <RxCross1 size={40} className="text-dark-green" />
        </div>
        <div
          className={`flex items-start flex-1 justify-end flex-col gap-8 lg:flex lg:flex-row lg:items-center absolute lg:static py-20 lg:py-0 bg-white lg:z-auto left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-0 " : "top-[-490px]"
          }`}
        >
          <ul className="flex flex-col gap-8 items-start lg:flex lg:flex-row lg:gap-6 flex-1 justify-center">
            <li>
              <Link
                to="/"
                className={
                  isActive("/")
                    ? "text-dark-green font-semibold"
                    : "text-black opacity-80"
                }
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/tentang"
                className={
                  isActive("/tentang")
                    ? "text-dark-green font-semibold"
                    : "text-black opacity-80"
                }
              >
                Tentang Desa
              </Link>
            </li>
            <li>
              <Link
                to="/umkm"
                className={
                  isActive("/umkm")
                    ? "text-dark-green font-semibold"
                    : "text-black opacity-80"
                }
              >
                UMKM
              </Link>
            </li>
            {/* <li>
              <Link
                to="/bantuan"
                className={
                  isActive("/bantuan") ? "text-dark-green" : "text-black opacity-80"
                }
              >
                Bantuan
              </Link>
            </li> */}
          </ul>
          <button className="bg-dark-green rounded-[20px] text-white py-3 px-4">
            Kontak Kami
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
