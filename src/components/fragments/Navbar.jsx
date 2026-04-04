import { Menu, X } from "lucide-react";
import React from "react";
import Button from "../atom/button";

const navLinks = [
  { name: "Home", link: "/home" },
  { name: "Cari Grup", link: "/list" },
  { name: "Add grup", link: "/add" },
];

function Navbar() {
  const [isOpen, setisOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-green-300 w-full flex justify-between border border-green-950 backdrop-blur-sm p-6">
      <div className="text-2xl font-bold text-green-950">Grup Finder</div>

      <div className="hidden md:flex items-center">
        {navLinks.map((v, i) => (
          <a href={v.link} key={i} className="no-underline mx-6 font-bold text-green-950">
            {v.name}
          </a>
        ))}
      </div>

      <div className={`md:hidden relative flex flex-col gap-2`}>
        <Button rounded="md" onClick={() => setisOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </Button>

        {isOpen && (
          <div className="fixed left-0 mt-6 overflow-hidden  top-16 w-full bg-green-200 rounded-b-2xl border border-green-950 text-green-950 backdrop-blur-sm p-4 flex flex-col space-y-4 z-50">
            {navLinks.map((v, i) => (
              <a
                href={v.link}
                key={i}
                className="text-center py-2 border-b border-green-700"
              >
                {v.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
