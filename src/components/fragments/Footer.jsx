import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* ABOUT */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Grup Finder</h3>
          <p className="text-sm text-gray-300">
            Platform untuk mencari dan membagikan link grup WhatsApp terbaru dan
            aktif di nerbagai Negara. Temukan komunitas bisnis, crypto, belajar,
            dan lainnya dengan mudah.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Navigasi</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/list" className="hover:text-white">
                Cari Grup
              </a>
            </li>
            <li>
              <a href="/add" className="hover:text-white">
                Tambah Grup
              </a>
            </li>
          </ul>
        </div>

        {/* IMPORTANT LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Informasi</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/about" className="hover:text-white">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Kontak
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Grup WA Indonesia. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
