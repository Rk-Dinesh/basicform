import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Basic Form 1", path: "/form1" },
  { name: "Basic Form 2", path: "/form2" },
  { name: "Profile", path: "/profile" },
  { name: "Use State", path: "/useState" },
  { name: "Use Effect", path: "/useEffect" },
  { name: "Props", path: "/props" },
  { name: "Axios vs Fetch", path: "/axiosvsfetch" },
];

const Layout2 = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-slate-700">React Forms App</h1>
          <nav className="flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium hover:text-slate-600 transition ${
                  location.pathname === item.path
                    ? "text-slate-700 font-semibold"
                    : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout2;
