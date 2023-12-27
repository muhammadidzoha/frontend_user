import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import routes from "../../routes/routes";

// import { Outlet } from "react-router-dom";

const index = () => {
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState("Beranda");

  useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    let activeRoute = "Beranda";
    for (const element of routes) {
      if (
        window.location.href.indexOf(element.layout + "/" + element.path) !== -1
      ) {
        setCurrentRoute(element.name);
      }
    }
    return activeRoute;
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div>
      <div className="px-5 sm:px-10 sticky top-0 z-50">
        <Header />
      </div>
      <div className="h-screen">
        <Routes>
          {getRoutes(routes)}
          <Route path="/" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default index;
