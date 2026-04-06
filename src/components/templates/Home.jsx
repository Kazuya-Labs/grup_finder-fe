import React from "react";
import { Helmet } from "react-helmet-async";
import Button from "../atom/button";
import Navbar from "../fragments/Navbar";
import { Search } from "lucide-react";
import { PlusCircleIcon } from "lucide-react";
import Footer from "../fragments/Footer";

function Home() {
  return (
    <div className="min-w-full min-h-full overflow-hidden">
      <Helmet>
        <title>
          Kumpulan Grup WhatsApp Terbaru 2026 | Cari & Share Grup WA
        </title>
        <meta
          name="description"
          content="Temukan dan bagikan grup WhatsApp terbaru berdasarkan kategori. Cari grup WA aktif, tambah grup kamu, dan temukan komunitas terbaik di Indonesia."
        />
        <meta
          name="keywords"
          content="grup whatsapp, grup wa indonesia, link grup whatsapp terbaru, cari grup wa, komunitas whatsapp"
        />
      </Helmet>

      <Navbar />

      {/* HERO */}
      <section className="min-h-screen bg-green-100 text-center flex flex-col justify-center items-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-green-950">
          Kumpulan Grup WhatsApp Terbaru & Aktif
        </h1>

        <p className="max-w-xl mt-4 text-gray-700">
          Cari dan temukan grup WhatsApp sesuai minatmu seperti bisnis, belajar,
          crypto, gaming, dan lainnya. Kamu juga bisa membagikan grup WA milikmu
          agar ditemukan banyak orang.
        </p>

        <a href="/list" className="mt-6 flex justify-center primary">
          Temukan Grup WhatsApp <Search size={18} className="ml-0.5" />
        </a>
      </section>

      {/* ADD GROUP */}
      <section className="min-h-screen bg-white text-center flex flex-col justify-center items-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-green-900">
          Tambahkan Grup WhatsApp Kamu
        </h2>

        <p className="max-w-xl mt-4 text-gray-700">
          Punya grup WhatsApp? Publikasikan di sini agar lebih banyak orang bisa
          bergabung. Gratis dan mudah!
        </p>

        <a
          href="/add"
          className="flex primary justify-center items-center my-3"
        >
          {" "}
          Daftarkan Grup <PlusCircleIcon size={18} className="ml-0.5" />{" "}
        </a>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
