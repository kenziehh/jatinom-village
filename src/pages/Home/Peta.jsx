const Peta = () => {
  return (
    <section className="container py-10 md:py-20 min-h-[90vh]">
      <div className="flex flex-col gap-12 md:gap-16">
        <div className="flex gap-4 justify-between items-center">
          <h2 className="font-semibold text-3xl md:text-5xl">Peta Desa</h2>

          <a href="https://maps.app.goo.gl/3zRGHsUTbhww3yaq5" target="_blank">
            <div className="bg-dark-green rounded-[20px] text-white py-2 md:py-4 px-3 md:px-6 text-center">
              Lihat di Maps
            </div>
          </a>
        </div>
        <iframe
          className="w-full h-[60vh] md:h-[75vh] rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15798.874081674536!2d112.1659172511738!3d-8.130113077720587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78eb97d6baf747%3A0x3821c87ab3226072!2sJatinom%2C%20Kec.%20Kanigoro%2C%20Kabupaten%20Blitar%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1720801265011!5m2!1sid!2sid"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Peta;
