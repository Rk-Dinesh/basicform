import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Basic Form 1", path: "/form1" },
  { name: "Basic Form 2", path: "/form2" },
  { name: "Profile", path: "/profile" },
  { name: "Use State", path: "/useState" },
  { name: "Use Effect", path: "/useEffect" },
  { name: "Props", path: "/props" },
  { name: "Axios vs Fetch", path: "/axiosvsfetch" },
];

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-slate-700 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">My Dashboard</h2>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`block px-4 py-2 rounded hover:bg-slate-600 transition ${
              location.pathname === item.path ? "bg-slate-600" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </aside>

      <main className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
