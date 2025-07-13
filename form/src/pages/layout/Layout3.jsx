import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const menu = [
  { name: "Home", path: "/" },
  { name: "Form 1", path: "/form1" },
  { name: "Form 2", path: "/form2" },
  { name: "Reports", path: "/reports" },
  { name: "Use State", path: "/useState" },
  { name: "Use Effect", path: "/useEffect" },
  { name: "Props", path: "/props" },
  { name: "Axios vs Fetch", path: "/axiosvsfetch" },
];

const Layout3 = () => {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="px-6 py-4 text-2xl font-bold border-b border-gray-700">
          📊 Dashboard
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
          {menu.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-4 py-2 rounded hover:bg-gray-700 ${
                location.pathname === item.path ? "bg-gray-700" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
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
