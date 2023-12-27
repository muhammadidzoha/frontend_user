import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import customIconUrl from "../../../../../assets/map/marker.png";
import clsx from "clsx";
import { RxCheck, RxCross2 } from "react-icons/rx";

const opening = [
  {
    id: 1,
    days: "Senin :",
    hours: "08.00 - 16.00",
    status: true,
  },
  {
    id: 2,
    days: "Selasa :",
    hours: "08.00 - 16.00",
    status: true,
  },
  {
    id: 3,
    days: "Rabu :",
    hours: "08.00 - 16.00",
    status: true,
  },
  {
    id: 4,
    days: "Kamis :",
    hours: "08.00 - 16.00",
    status: true,
  },
  {
    id: 5,
    days: "Jumat :",
    hours: "08.00 - 16.00",
    status: true,
  },
  {
    id: 6,
    days: "Sabtu :",
    hours: "Tutup",
    status: false,
  },
  {
    id: 7,
    days: "Minggu :",
    hours: "Tutup",
    status: false,
  },
];

const index = () => {
  const citeureupLatLng = [-6.9776, 107.6276];
  const kantorCiteureupLatLng = [-6.9844303088349085, 107.62299499193702];
  const mapRef = useRef();

  // Start Jam dan Hari Buka dan Tutup
  const currentTime = new Date();

  const openingTime = new Date();
  openingTime.setHours(8, 0, 0);

  const closeTime = new Date();
  closeTime.setHours(16, 0, 0);

  const tes = new Date().getDay();
  const openingDay = [1, 2, 3, 4, 5];

  const isNotOpeningDay = !openingDay.includes(tes);

  // End Jam dan Hari Buka dan Tutup

  const customIconMarker = new Icon({
    iconUrl: customIconUrl,
    iconSize: [48, 48],
  });

  const handleToGMAPS = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${citeureupLatLng[0]},${citeureupLatLng[1]}`
    );
  };
  const handleToGMAPSKantor = () => {
    window.open(
      `https://www.google.com/maps/place/Kantor+Desa+Citeureup/@-6.9845227,107.622996,21z/data=!4m14!1m7!3m6!1s0x2e68e9a0ca7ac705:0xed690c6d7d9ad9c6!2sKantor+Desa+Citeureup!8m2!3d-6.9844646!4d107.6229931!16s%2Fg%2F11bv3mn3wj!3m5!1s0x2e68e9a0ca7ac705:0xed690c6d7d9ad9c6!8m2!3d-6.9844646!4d107.6229931!16s%2Fg%2F11bv3mn3wj?entry=ttu`
    );
  };

  const handleResetView = () => {
    const map = mapRef.current;
    if (map) {
      map.setView(citeureupLatLng, map.getZoom());
    }
  };

  return (
    <div
      className={clsx(
        "max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
      )}
    >
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl text-text font-bold md:text-4xl md:leading-tight">
          Lokasi Desa Citeureup
        </h2>
        <p className="mt-1 text-gray-600">
          Menyajikan peta wilayah Desa Citeureup
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 relative">
        <MapContainer
          center={citeureupLatLng}
          minZoom={15}
          zoom={15}
          maxZoom={17}
          scrollWheelZoom={false}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={citeureupLatLng} icon={customIconMarker}>
            <Popup>
              <button onClick={() => handleToGMAPS()}>Desa Citeureup</button>
            </Popup>
          </Marker>
          <Marker position={kantorCiteureupLatLng} icon={customIconMarker}>
            <Popup>
              <button onClick={() => handleToGMAPSKantor()}>
                Kantor Desa Citeureup
              </button>
            </Popup>
          </Marker>
          <button
            className={clsx(
              "absolute top-5 right-5 p-2 bg-white z-[500] hover:border hover:border-black"
            )}
            onClick={handleResetView}
          >
            Citeureup
          </button>
        </MapContainer>
        <div
          className="group sm:flex overflow-hidden lg:overflow-visible hover:shadow-lg transition-all duration-300"
          href="#"
        >
          <div className="flex-shrink-0 relative w-full h-[200px] sm:w-[250px] sm:h-full">
            <img
              className="w-full h-full absolute top-0 start-0 object-cover rounded-tl-xl rounded-tr-xl md:rounded-tr-none rounded-bl-none md:rounded-bl-xl"
              src="src/assets/demografi/desa-citeureup.png"
              alt="Kantor Desa Citeureup"
            />
          </div>

          <div className="grow bg-white rounded-tr-xl sm:overflow-hidden rounded-br-xl">
            <div className="p-4 flex flex-col h-full sm:p-6">
              <h3 className="text-lg sm:text-2xl font-semibold text-text">
                Kantor Desa Citeureup
              </h3>
              <div>
                <p className="mt-2 text-text text-sm text-justify">
                  Alamat : Jl. Raya Dayeuhkolot No.385, Citeureup, Kec.
                  Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257.
                </p>
                <p className="mt-2 text-text text-sm text-justify">
                  Telepon : (022) 5223443
                </p>
                <p className="mt-2 text-text text-sm text-justify flex gap-2">
                  Jam :{" "}
                  <span>
                    {isNotOpeningDay ? (
                      <span className="text-red-600">Tutup</span>
                    ) : (
                      <>
                        {currentTime.toLocaleTimeString("id-ID") >
                          openingTime.toLocaleTimeString("id-ID") && (
                          <span className="text-green-600">
                            Buka - Tutup pukul 16.00
                          </span>
                        )}
                        {currentTime.toLocaleTimeString("id-ID") >
                          closeTime.toLocaleTimeString("id-ID") && (
                          <span className="text-red-600">
                            Tutup - Buka pukul 08.00
                          </span>
                        )}
                      </>
                    )}
                  </span>
                </p>
                <ul className="mt-2 space-y-2 text-sm">
                  {opening.map((open) => (
                    <li key={open.id} className="flex space-x-3">
                      {open.status ? (
                        <RxCheck className="flex-shrink-0 h-4 w-4 mt-0.5 text-green-600" />
                      ) : (
                        <RxCross2 className="flex-shrink-0 h-4 w-4 mt-0.5 text-red-600" />
                      )}
                      <span className="text-gray-800">
                        {open.days} {open.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;
