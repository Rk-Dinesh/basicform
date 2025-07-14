import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout3 = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const menu = [
  { name: "Home", path: "/" },
  { name: "Form 1", path: "/form1" },
  { name: "Form 2", path: "/form2" },
  { name: "Reports", path: "/reports" },
  { name: "Use State", path: "/useState" },
  { name: "Use Effect", path: "/useEffect" },
  { name: "Props", path: "/props" },
  { name: "Axios vs Fetch", path: "/axiosvsfetch" },
  {
    name: "Backend",
    dropdown: true,
    children: [
      { name: "Folders", path: "/backend" },
      { name: "Express", path: "/express" },
      {name:"DataBase" ,path:"/db"},
      { name: "Model", path: "/model" },
      { name: "Service", path: "/service" },
      { name: "Controller", path: "/controller" },
      {name:"Router",path:"/router"},
      {name:"API",path:"/api"}
    ],
  },
  { name: "Not Found", path: "*" },
];


  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="px-6 py-4 text-2xl font-bold border-b border-gray-700">
          📊 Dashboard
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
          {menu.map((item) =>
            item.dropdown ? (
              <div key={item.name}>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`w-full text-left block px-4 py-2 rounded hover:bg-gray-700 ${
                    location.pathname.startsWith(item.path) ? "bg-gray-700" : ""
                  }`}
                >
                  {item.name} ▾
                </button>
                {openDropdown === item.name && (
                  <div className="pl-6 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className={`block px-4 py-1 rounded text-sm hover:bg-gray-700 ${
                          location.pathname === child.path
                            ? "bg-gray-700 text-white"
                            : "text-gray-300"
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-2 rounded hover:bg-gray-700 ${
                  location.pathname === item.path ? "bg-gray-700" : ""
                }`}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow p-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-700">
            Welcome to the Dashboard
          </h1>
          <div className="text-sm text-gray-600">
            Logged in as <strong>Admin</strong>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout3;
