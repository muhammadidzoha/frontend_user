import React from "react";
import Card from "../../../../../components/Card";
import CardHorizontal from "../../../../../components/CardHorizontal";

const news = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quos molestias, debitis fuga ipsum numquam quae dignissimos recusandae magni architecto expedita iusto deleniti officia aut perferendis, doloribus, accusantium pariatur amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugit nulla repudiandae delectus, maxime aut architecto quos adipisci",
    date: "September 12, 2022",
    views: 2000,
    imageUri:
      "https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 2,
    title: "Preline becomes an official Instagram Marketing Partner",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quos molestias, debitis fuga ipsum numquam quae dignissimos recusandae magni architecto expedita iusto deleniti officia aut perferendis, doloribus, accusantium pariatur amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugit nulla repudiandae delectus, maxime aut architecto quos adipisci",
    date: "Agustus 19, 2022",
    views: 100,
    imageUri:
      "https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
  {
    id: 3,
    title: "Unity’s inside sales team drives 80% of its revenue with Preline.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quos molestias, debitis fuga ipsum numquam quae dignissimos recusandae magni architecto expedita iusto deleniti officia aut perferendis, doloribus, accusantium pariatur amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugit nulla repudiandae delectus, maxime aut architecto quos adipisci",
    date: "Desember 20, 2022",
    views: 200,
    imageUri:
      "https://images.unsplash.com/photo-1669824774762-65ddf29bee56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
  },
];

const index = () => {
  // Sort data news berdasarkan views secara descending
  const sortedNews = news.toSorted((a, b) => b.views - a.views);

  // Ambil news dengan views paling banyak
  const topNews = sortedNews.length > 0 ? sortedNews[0] : null;

  // Ambil news dengan views lebih dari atau sama dengan 100
  const otherNews = sortedNews.filter(
    (item) => item.views >= 100 && item.views < 300
  );

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl text-text font-bold md:text-4xl md:leading-tight">
          Berita
        </h2>
        <p className="mt-1 text-gray-600">
          Menyajikan berita terupdate seputar Desa Citeureup
        </p>
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
        {topNews && (
          <Card
            key={topNews.id}
            src={topNews.imageUri}
            alt="Gambar Berita"
            cardTitle={topNews.title}
            cardDesc={topNews.desc}
            cardDate={topNews.date}
          />
        )}
        <div className="grid lg:grid-cols-1 gap-6">
          {otherNews.map((item) => (
            <CardHorizontal
              key={item.id}
              src={item.imageUri}
              alt="Gambar Berita"
              cardTitle={item.title}
              cardDesc={item.desc}
              cardDate={item.date}
            />
          ))}
        </div>
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
