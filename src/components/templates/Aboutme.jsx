import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";

function About() {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      <Helmet>
        <title>Tentang Kami | Grup WA Indonesia</title>
        <meta
          name="description"
          content="Pelajari lebih lanjut tentang Grup WA Indonesia, platform untuk menemukan dan membagikan grup WhatsApp aktif dari berbagai kategori."
        />
        <link rel="canonical" href="https://domainkamu.com/about" />
      </Helmet>

      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Tentang Kami</h1>

        <p className="mb-6">
          <strong>Grup WA Indonesia</strong> adalah platform yang membantu
          pengguna menemukan dan membagikan link grup WhatsApp terbaru dan aktif
          dari berbagai kategori seperti bisnis, crypto, edukasi, dan komunitas
          lainnya.
        </p>

        <p className="mb-6">
          Kami percaya bahwa komunitas adalah kunci untuk berbagi informasi,
          belajar, dan berkembang bersama. Oleh karena itu, kami menyediakan
          tempat yang mudah digunakan untuk mencari dan mempublikasikan grup
          WhatsApp secara gratis.
        </p>

        {/* VISI */}
        <h2 className="text-xl font-semibold mt-6 mb-2">Visi Kami</h2>
        <p className="mb-4">
          Menjadi direktori grup WhatsApp terbesar dan terpercaya di Indonesia.
        </p>

        {/* MISI */}
        <h2 className="text-xl font-semibold mt-6 mb-2">Misi Kami</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Menyediakan akses mudah ke grup WhatsApp aktif</li>
          <li>Membantu komunitas berkembang</li>
          <li>Menyediakan platform gratis dan terbuka</li>
        </ul>

        {/* KEUNGGULAN */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          Kenapa Menggunakan Website Ini?
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Grup diperbarui secara berkala</li>
          <li>Berbagai kategori tersedia</li>
          <li>Mudah digunakan tanpa registrasi</li>
        </ul>

        {/* PENUTUP */}
        <h2 className="text-xl font-semibold mt-6 mb-2">Komitmen Kami</h2>
        <p className="mb-4">
          Kami berkomitmen untuk menjaga kualitas dan keamanan platform, serta
          terus mengembangkan fitur agar pengguna mendapatkan pengalaman
          terbaik.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
