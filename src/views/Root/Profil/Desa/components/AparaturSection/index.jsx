import React from "react";
import Marquee from "react-fast-marquee";

const items = [
  {
    id: 1,
    jabatan: "Kepala Desa",
    nama: "Fathi Adli K. Stk. Amd",
    url: "/src/assets/aparatDesa/avatar1.png",
    alt: "Gambar Kepala Desa",
  },
  {
    id: 2,
    jabatan: "Sekretaris Desa",
    nama: "Annisa Ramdani. Spd. Md",
    url: "/src/assets/aparatDesa/avatar2.png",
    alt: "Gambar Sektretaris Desa",
  },
  {
    id: 3,
    jabatan: "Kaur Umum",
    nama: "Andre Naibaho. Sia. Kpd",
    url: "/src/assets/aparatDesa/avatar3.png",
    alt: "Gambar Kaur Umum Desa",
  },
  {
    id: 4,
    jabatan: "Bendehara Desa",
    nama: "Nita Vior. Abd. Onc",
    url: "/src/assets/aparatDesa/avatar4.png",
    alt: "Gambar Bendehara Desa",
  },
  {
    id: 5,
    jabatan: "Kaur Keuangan",
    nama: "Sudaryanto. Siu, Dtk",
    url: "/src/assets/aparatDesa/avatar5.png",
    alt: "Gambar Kaur Keuangan Desa",
  },
];

const index = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl text-text font-bold md:text-4xl md:leading-tight">
          Pemerintah Desa
        </h2>
        <p className="mt-1 text-gray-600">
          Seputar Struktur Organisasi Desa Citeureup
        </p>
      </div>
      <div className="hidden sm:flex">
        <Marquee
          gradientColor={[248, 251, 253]}
          gradientWidth={200}
          speed={200}
          autoFill
        >
          <div className="flex">
            {items.map((item) => (
              <div
                key={item.id}
                className="mx-5 relative before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]"
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  className="sm:h-40 md:h-[204px] lg:h-[221px]"
                />
                <div className="absolute bottom-5 w-full z-10 text-white text-center">
                  <h1>
                    {item.jabatan} <br />
                    <span>{item.nama}</span>
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div
        data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true,
    "isInfiniteLoop": true
  }'
        className="relative sm:hidden"
      >
        <div className="hs-carousel relative overflow-hidden w-full min-h-[350px] bg-white rounded-lg">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            {items.map((item) => (
              <div key={item.id} className="hs-carousel-slide">
                <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
                  <img
                    className="w-full h-full absolute top-0 start-0 object-cover"
                    src={item.url}
                    alt={item.alt}
                  />
                  <span className="absolute w-full bottom-10 left-1/2 -translate-x-1/2 z-10 text-center transition duration-700 text-white">
                    {item.jabatan} <br />
                    <span className="truncate">{item.nama}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
          <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
          <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
          <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
          <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
          <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
        </div>
      </div>
    </div>
  );
};

export default index;
