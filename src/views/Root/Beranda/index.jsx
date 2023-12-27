import React from "react";

import HeroSection from "./components/HeroSection";
import FiturSection from "./components/FiturSection";
import BeritaSection from "./components/BeritaSection";
import MapSection from "./components/MapSection";
import KolaborasiSection from "./components/KolaborasiSection";
import PotensiSection from "./components/PotensiSection";

const index = () => {
  return (
    <div>
      <HeroSection />
      <FiturSection />
      <BeritaSection />
      <MapSection />
      <KolaborasiSection />
      <PotensiSection />
    </div>
  );
};

export default index;
