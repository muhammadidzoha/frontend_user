import React from "react";
import ProfilSection from "./components/ProfilSection";
import TableSection from "./components/TableSection";
import AparaturSection from "./components/AparaturSection";
import MapSection from "./components/MapSection";

const index = () => {
  return (
    <div>
      <ProfilSection />
      <TableSection />
      <MapSection />
      <AparaturSection />
    </div>
  );
};

export default index;
