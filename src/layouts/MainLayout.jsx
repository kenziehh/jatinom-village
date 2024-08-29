import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { useState } from "react";
import ContactModal from "../components/modal/contact";

export default function MainLayout() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModal = () => {
    console.log("Modal State:", isModalOpen);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <ScrollToTop />
      <Navbar onClick={handleModal} />
      {isModalOpen && <ContactModal onClose={handleModal} />}
      <Outlet />
      <Footer />
    </>
  );
}
