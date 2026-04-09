import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";

function PrivacyPolicy() {
  console.log("Privacy Policy loaded");
  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Privacy Policy | Grup WA Indonesia</title>
        <meta
          name="description"
          content="Kebijakan privasi situs Grup WA Indonesia terkait pengumpulan, penggunaan, dan perlindungan data pengguna."
        />
      </Helmet>

      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Kebijakan Privasi</h1>

        <p className="mb-4 text-sm text-gray-500">
          Terakhir diperbarui: {new Date().toLocaleDateString()}
        </p>

        <p className="mb-6">
          Website ini menghargai dan melindungi privasi pengguna. Halaman ini
          menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi
          informasi yang Anda berikan saat menggunakan layanan kami.
        </p>

        {/* DATA */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          Informasi yang Kami Kumpulkan
        </h2>
        <p className="mb-4">
          Kami dapat mengumpulkan informasi seperti nama grup, deskripsi, dan
          link WhatsApp yang Anda kirimkan ke platform ini.
        </p>

        {/* USAGE */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          Penggunaan Informasi
        </h2>
        <p className="mb-4">
          Informasi yang dikumpulkan digunakan untuk menampilkan daftar grup
          WhatsApp kepada pengguna lain serta meningkatkan kualitas layanan
          kami.
        </p>

        {/* THIRD PARTY */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          Layanan Pihak Ketiga
        </h2>
        <p className="mb-4">
          Kami dapat menggunakan layanan pihak ketiga seperti Google Analytics
          untuk memahami bagaimana pengguna menggunakan situs kami.
        </p>

        {/* SECURITY */}
        <h2 className="text-xl font-semibold mt-6 mb-2">Keamanan Data</h2>
        <p className="mb-4">
          Kami berusaha menjaga keamanan data pengguna, namun tidak ada metode
          transmisi data melalui internet yang 100% aman.
        </p>

        {/* CONSENT */}
        <h2 className="text-xl font-semibold mt-6 mb-2">Persetujuan</h2>
        <p className="mb-4">
          Dengan menggunakan website ini, Anda menyetujui kebijakan privasi ini.
        </p>

        {/* UPDATE */}
        <h2 className="text-xl font-semibold mt-6 mb-2">Perubahan Kebijakan</h2>
        <p className="mb-4">
          Kebijakan ini dapat diperbarui sewaktu-waktu. Perubahan akan
          ditampilkan di halaman ini.
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default PrivacyPolicy;
