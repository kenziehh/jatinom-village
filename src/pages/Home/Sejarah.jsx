import React from "react";

const Sejarah = () => {
  return (
    <section className="container py-10 md:py-20 min-h-screen flex flex-col gap-8 md:gap-32">
      <h2 className="font-semibold text-3xl md:text-5xl">Sejarah Desa</h2>
      <div className="flex flex-col-reverse gap-8 md:gap-16 md:flex-row md:justify-between items-start md:items-center">
        <p className="max-w-sm lg:max-w-lg text-start md:text-justify leading-loose text-base md:text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quisquam
          impedit maxime neque. Pariatur molestiae molestias inventore, quasi
          sit veritatis reiciendis, eius veniam eos cum iure obcaecati odit
          excepturi fugiat. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Accusantium delectus ut veniam? Dolorem delectus ipsum veniam
          fuga facere, ea doloremque voluptatem dolor expedita laboriosam,
          dolores perspiciatis magnam, aut eos minus.
        </p>
        <div>
          <img
            src="https://placehold.co/600x400"
            alt=""
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Sejarah;
