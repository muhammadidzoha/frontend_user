import React from "react";

const potensi = [
  {
    id: 1,
    title:
      "Kolam Lele ‘Cerdas’ Untuk Tingkatkan Ekonomi Desa Citeureup Sebagai Kampung Siber",
    desc: "Tim peneliti Telkom University (Tel-U) melaksanakan pengabdian masyarakat di Desa Citeureup, Kec. Dayeuhkolot, Kab. Bandung dengan membuat sebuah kolam ‘cerdas’ untuk budidaya ikan Lele dalam rangka membantu meningkatkan ekonomi warga desa tersebut. Kolam cerdas ini berbasis SMART (Specific, Measurable, Achievable, Relevant, Time-Bound), bertujuan untuk meningkatkan produktivitas dan kualitas hasil panen Lele.",
    imageUri: "src/assets/potensi/destinasi1.webp",
  },
  {
    id: 2,
    title:
      "Kolam Lele ‘Cerdas’ Untuk Tingkatkan Ekonomi Desa Citeureup Sebagai Kampung Siber",
    desc: "Tim peneliti Telkom University (Tel-U) melaksanakan pengabdian masyarakat di Desa Citeureup, Kec. Dayeuhkolot, Kab. Bandung dengan membuat sebuah kolam ‘cerdas’ untuk budidaya ikan Lele dalam rangka membantu meningkatkan ekonomi warga desa tersebut. Kolam cerdas ini berbasis SMART (Specific, Measurable, Achievable, Relevant, Time-Bound), bertujuan untuk meningkatkan produktivitas dan kualitas hasil panen Lele.",
    imageUri: "src/assets/potensi/destinasi2.webp",
  },
  {
    id: 3,
    title:
      "Kolam Lele ‘Cerdas’ Untuk Tingkatkan Ekonomi Desa Citeureup Sebagai Kampung Siber",
    desc: "Tim peneliti Telkom University (Tel-U) melaksanakan pengabdian masyarakat di Desa Citeureup, Kec. Dayeuhkolot, Kab. Bandung dengan membuat sebuah kolam ‘cerdas’ untuk budidaya ikan Lele dalam rangka membantu meningkatkan ekonomi warga desa tersebut. Kolam cerdas ini berbasis SMART (Specific, Measurable, Achievable, Relevant, Time-Bound), bertujuan untuk meningkatkan produktivitas dan kualitas hasil panen Lele.",
    imageUri: "src/assets/potensi/destinasi3.webp",
  },
  {
    id: 4,
    title:
      "Kolam Lele ‘Cerdas’ Untuk Tingkatkan Ekonomi Desa Citeureup Sebagai Kampung Siber",
    desc: "Tim peneliti Telkom University (Tel-U) melaksanakan pengabdian masyarakat di Desa Citeureup, Kec. Dayeuhkolot, Kab. Bandung dengan membuat sebuah kolam ‘cerdas’ untuk budidaya ikan Lele dalam rangka membantu meningkatkan ekonomi warga desa tersebut. Kolam cerdas ini berbasis SMART (Specific, Measurable, Achievable, Relevant, Time-Bound), bertujuan untuk meningkatkan produktivitas dan kualitas hasil panen Lele.",
    imageUri: "src/assets/potensi/destinasi4.webp",
  },
  {
    id: 5,
    title:
      "Kolam Lele ‘Cerdas’ Untuk Tingkatkan Ekonomi Desa Citeureup Sebagai Kampung Siber",
    desc: "Tim peneliti Telkom University (Tel-U) melaksanakan pengabdian masyarakat di Desa Citeureup, Kec. Dayeuhkolot, Kab. Bandung dengan membuat sebuah kolam ‘cerdas’ untuk budidaya ikan Lele dalam rangka membantu meningkatkan ekonomi warga desa tersebut. Kolam cerdas ini berbasis SMART (Specific, Measurable, Achievable, Relevant, Time-Bound), bertujuan untuk meningkatkan produktivitas dan kualitas hasil panen Lele.",
    imageUri:
      "https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
  },
  {
    id: 6,
    title:
      "Kolam Lele ‘Cerdas’ Untuk Tingkatkan Ekonomi Desa Citeureup Sebagai Kampung Siber",
    desc: "Tim peneliti Telkom University (Tel-U) melaksanakan pengabdian masyarakat di Desa Citeureup, Kec. Dayeuhkolot, Kab. Bandung dengan membuat sebuah kolam ‘cerdas’ untuk budidaya ikan Lele dalam rangka membantu meningkatkan ekonomi warga desa tersebut. Kolam cerdas ini berbasis SMART (Specific, Measurable, Achievable, Relevant, Time-Bound), bertujuan untuk meningkatkan produktivitas dan kualitas hasil panen Lele.",
    imageUri:
      "https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
  },
];

const index = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl text-text font-bold md:text-4xl md:leading-tight">
          Potensi Desa Citeureup
        </h2>
        <p className="mt-1 text-gray-600">
          Ekplorasi potensi di Desa Citeureup
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        {potensi.map((pot) => (
          <div
            key={pot.id}
            className="group relative block rounded-xl"
            href="#"
          >
            <div className="flex-shrink-0 relative w-full rounded-xl overflow-hidden h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
              <img
                className="w-full h-full absolute top-0 start-0 object-cover"
                src={pot.imageUri}
                alt="Image Description"
              />
            </div>

            <div className="absolute top-0 inset-x-0 z-10">
              <div className="p-4 flex flex-col h-full sm:p-6"></div>
            </div>

            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-white group-hover:text-white/[.8]">
                  {pot.title}
                </h3>
                <p className="mt-2 text-white/[.8] truncate">{pot.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a
          className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full border border-gray-200 bg-gradient-to-tl text-white from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          Selengkapnya
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default index;
