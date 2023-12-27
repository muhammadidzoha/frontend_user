import React from "react";
import routes from "../../routes/routes";
import { Navigate, Route, Routes } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import NotFound from "../../components/NotFound";

const index = () => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  const validRoutes = ["/auth/sign-in", "/auth/sign-up"];

  return (
    <div>
      {validRoutes.includes(window.location.pathname) ? (
        <>
          <div className="p-6 relative z-50">
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            >
              <MdOutlineArrowBack className="flex-shrink-0 w-4 h-4" />
              <a href="..">Kembali ke Beranda</a>
            </button>
          </div>
          <div className="">
            <Routes>
              {getRoutes(routes)}
              <Route
                path="/"
                element={<Navigate to="/auth/sign-in" replace />}
              />
            </Routes>
          </div>
        </>
      ) : (
        <NotFound href="../.." />
      )}
    </div>
  );
};

export default index;
