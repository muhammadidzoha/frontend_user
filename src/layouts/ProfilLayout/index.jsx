import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import routes from "../../routes/routes";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import NotFound from "../../components/NotFound";

const index = () => {
  const [currentRoute, setCurrentRoute] = useState("Beranda");
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const mainPath = pathnames[0];

  useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    let activeRoute = "Profil";
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
      if (prop.layout === "/profil") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  const validRoutes = ["/profil/desa", "/profil/demografi"];

  return (
    <div>
      {validRoutes.includes(window.location.pathname) ? (
        <>
          <div className="px-10 sticky top-0 z-50">
            <Header />
          </div>
          <div className="p-4 sm:p-10">
            <p className="shrink text-[33px] capitalize text-navy-700">
              <a href="#" className="font-bold capitalize hover:text-navy-700">
                {currentRoute}
              </a>
            </p>
            <Breadcrumb mainPath={mainPath} currentRoute={currentRoute} />
          </div>
          <div className="h-screen">
            <Routes>
              {getRoutes(routes)}
              <Route
                path="/"
                element={<Navigate to="/profil/desa" replace />}
              />
            </Routes>
            <Footer />
          </div>
        </>
      ) : (
        <NotFound href="../.." />
      )}
    </div>
  );
};

export default index;
