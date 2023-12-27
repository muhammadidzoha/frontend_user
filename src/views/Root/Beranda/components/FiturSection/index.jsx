import React from "react";
import { PiIdentificationCard } from "react-icons/pi";
import { BiStore } from "react-icons/bi";
import { RiGovernmentLine } from "react-icons/ri";
import { FaVoicemail } from "react-icons/fa";
import { MdOutlineNavigateNext } from "react-icons/md";

const features = [
  {
    id: 1,
    name: "Layanan Kependudukan",
    desc: "Tertib bersama Desa Citeureup. Urus kependudukan dan catatan sipil Anda, dan rasakan kemudahan sebagai warga Desa Citeureup.",
    icon: (
      <PiIdentificationCard className="flex-shrink-0 w-6 h-6 text-primary" />
    ),
  },
  {
    id: 2,
    name: "Layanan Publik",
    desc: "Membayar pajak tidak sulit, kini semakin mudah dan efisien. Membayar pajak, membangun Desa Citeureup bersama kita bisa.",
    icon: <RiGovernmentLine className="flex-shrink-0 w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    name: "Layanan Pengaduan",
    desc: "Kami selalu mendengar Anda. Adukan seluruh keresahan Anda selama berada di Desa Citeureup melalui pengaduan kami.",
    icon: <FaVoicemail className="flex-shrink-0 w-6 h-6 text-primary" />,
  },
  {
    id: 4,
    name: "UMKM",
    desc: "Bersama-sama kita satukan semangat penuh solidaritas menghadapi tantangan pandemi dan transformasi UMKM masa depan.",
    icon: <BiStore className="flex-shrink-0 w-6 h-6 text-primary" />,
  },
];

const index = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold text-text md:text-4xl md:leading-tight">
          Daftar Fitur
        </h2>
        <p className="mt-1 text-gray-600">
          Silakan Pilih menu sesuai yang anda butuhkan
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
        {features.map((feature) => (
          <div
            className="group flex flex-col justify-center bg-white hover:bg-gray-200 shadow-shadow-500  rounded-xl p-4 md:p-7"
            key={feature.id}
          >
            <div className="flex justify-center items-center w-12 h-12 bg-lightPrimary rounded-xl">
              {feature.icon}
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800">
                {feature.name}
              </h3>
              <p className="mt-1 text-gray-600">{feature.desc}</p>
              <a
                className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-secondary decoration-2 group-hover:underline font-medium"
                href="#"
              >
                Selengkapnya
                <MdOutlineNavigateNext className="flex-shrink-0 w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
