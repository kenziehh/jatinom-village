import React, { useRef } from "react";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { FaWhatsapp } from "react-icons/fa6";

const ContactModal = ({ onClose }) => {
  const modalRef = useRef(null);
  if (onClose) {
    useOnClickOutside(modalRef, onClose);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center px-12 md:px-32 text-white z-[9999999]">
      <div
        className="py-10 md:py-20 px-16 md:px-24 bg-dark-green flex flex-col gap-6 md:gap-[54px] rounded-[40px] border-4 border-white-Normal z-[99999]"
        ref={modalRef}
      >
        <h1 className="text-gradient-contact text-[40px] text-center font-KronaOne gradient-contact w-full">
          Kontak Kami
        </h1>
        <div className="flex flex-col gap-6 md:flex-row md:gap-10">
          <div className="flex flex-col gap-4 md:gap-8 ">
            <span className="text-[#D4B2FF] text-2xl">Kontak Desa</span>
            <div className="flex flex-col gap-4 md:gap-8 md:w-[300px]">
              <a
                className="flex gap-3 items-center"
                href="https://api.whatsapp.com/send?phone=6282341985041"
                target="__blank"
              >
                <FaWhatsapp size={20} />{" "}
                <p>
                  Bu Lenny <br />
                  +62 823-4198-5041
                </p>
              </a>
              <a
                className="flex gap-3 items-center"
                href="https://api.whatsapp.com/send?phone=6281515718851"
                target="__blank"
              >
                <FaWhatsapp size={20} />{" "}
                <p>
                  Pak Wildan <br />
                  +62 815-1571-8851
                </p>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:gap-14">
            <div className="flex flex-col gap-4 md:gap-8 ">
              <span className="text-[#D4B2FF] text-2xl">Developer</span>
              <a
                className="flex gap-3 items-center"
                href="https://api.whatsapp.com/send?phone=6282131938580"
                target="__blank"
              >
                <FaWhatsapp size={20} />{" "}
                <p>
                  Kenzie <br />
                  +62 821-3193-8580{" "}
                </p>
              </a>
              <a
                className="flex gap-3 items-center"
                href="https://api.whatsapp.com/send?phone=6289612842795"
                target="__blank"
              >
                <FaWhatsapp size={20} />{" "}
                <p>
                  Jeremmy <br />
                  +62 896-1284-2795{" "}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
