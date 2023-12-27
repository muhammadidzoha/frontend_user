import React from "react";
import Dropdown from "../../Dropdown";
import clsx from "clsx";

const menus = [
  {
    menu_id: 1,
    menu_name: "Beranda",
    menu_url: "/",
    menu_status: true,
    createdAt: "2023-12-12T21:25:46.823Z",
    updatedAt: "2023-12-13T13:14:12.187Z",
    subMenus: [],
  },
  {
    menu_id: 2,
    menu_name: "Profil",
    menu_url: "/profil",
    menu_status: true,
    createdAt: "2023-12-13T02:07:03.462Z",
    updatedAt: "2023-12-13T02:07:29.186Z",
    subMenus: [
      {
        subMenu_id: 1,
        subMenu_name: "Desa",
        subMenu_layout: "/profil",
        subMenu_url: "desa",
        subMenu_component: "Desa",
      },
      {
        subMenu_id: 2,
        subMenu_name: "Demografi",
        subMenu_layout: "/profil",
        subMenu_url: "demografi",
      },
    ],
  },
  {
    menu_id: 3,
    menu_name: "Tes",
    menu_url: "/tes",
    menu_status: false,
    createdAt: "2023-12-13T02:07:03.462Z",
    updatedAt: "2023-12-13T02:07:29.186Z",
    subMenus: [
      {
        subMenu_id: 3,
        subMenu_name: "Tes 2",
        subMenu_layout: "/tes-2",
        subMenu_url: "tes-2",
        subMenu_component: "Tes",
      },
      {
        subMenu_id: 4,
        subMenu_name: "Tes 3",
        subMenu_layout: "/tes-3",
        subMenu_url: "tes-3",
        subMenu_component: "Tes 3",
      },
    ],
  },
];

const index = () => {
  return (
    <div
      id="navbar-collapse-with-animation"
      className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
    >
      <div className="flex my-5 bg-white md:bg-transparent rounded-xl shadow-shadow-500 p-3 w-full sm:justify-center">
        <nav className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
          <Dropdown
            options="[--placement:right] sm:hidden"
            titleButton={
              <img
                className="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              />
            }
            children={
              <div>
                <span
                  href=""
                  className="py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-lg hover:hover:text-primary"
                >
                  Hello, Fathi
                </span>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-lightPrimary focus:outline-none focus:bg-lightPrimary"
                  href="#"
                >
                  Tracking Pengajuan
                </a>
                <a
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-red-500 hover:bg-lightPrimary focus:outline-none focus:bg-lightPrimary "
                  href="#"
                >
                  Keluar
                </a>
              </div>
            }
          />
          {menus
            .filter((menu) => menu.menu_status)
            .map((menu) => (
              <div key={menu.menu_id}>
                {menu.menu_status && menu.subMenus.length > 0 ? (
                  <Dropdown
                    options="sm:[--trigger:hover]"
                    titleButton={menu.menu_name}
                    style="lg:bg-lightPrimary"
                    children={
                      <div>
                        {menu.subMenus.map((subMenu) => (
                          <div key={subMenu.subMenu_id}>
                            <a
                              href={`${subMenu.subMenu_layout}/${subMenu.subMenu_url}`}
                              className="py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-lg hover:hover:text-primary"
                              key={subMenu.subMenu_id}
                            >
                              {subMenu.subMenu_name}
                            </a>
                          </div>
                        ))}
                      </div>
                    }
                  />
                ) : (
                  <a
                    className={clsx(
                      "py-3 px-4 inline-flex items-center gap-2 border border-gray-200 lg:bg-lightPrimary text-sm text-gray-700 font-medium rounded-lg shadow-sm"
                    )}
                    href={menu.menu_url}
                    aria-current="page"
                  >
                    {menu.menu_name}
                  </a>
                )}
              </div>
            ))}
        </nav>
      </div>
    </div>
  );
};

export default index;
