import React from "react";

const data = [
  {
    id: 1,
    name: "Dusun I",
    quantityRW: "5",
    quantityRT: "28",
  },
  {
    id: 2,
    name: "Dusun II",
    quantityRW: "6",
    quantityRT: "27",
  },
  {
    id: 3,
    name: "Dusun III",
    quantityRW: "6",
    quantityRT: "31",
  },
];

const index = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-2">
        {/* Wilayah */}
        <div className="flex flex-col">
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl text-text font-bold md:text-4xl md:leading-tight">
              Wilayah Administratif
            </h2>
            <p className="mt-1 text-gray-600">
              Seputar Struktur Organisasi Desa Citeureup
            </p>
          </div>
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Nama Dusun
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Jumlah RW
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Jumlah RT
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr
                        key={item.id}
                        className="odd:bg-white even:bg-gray-100"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                          {item.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                          {item.quantityRW}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                          {item.quantityRT}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Peta */}
        <div>
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl text-text font-bold md:text-4xl md:leading-tight">
              Peta Administratif
            </h2>
            <p className="mt-1 text-gray-600">Daerah sekitar Desa Citeureup</p>
          </div>

          <div id="hs-users-datamap"></div>
        </div>
      </div>
    </div>
  );
};

export default index;
