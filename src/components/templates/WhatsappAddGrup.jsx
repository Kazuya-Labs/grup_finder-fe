import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../fragments/Navbar";
import Input from "../atom/input/Index";
import { Book, Link2 } from "lucide-react";
import Button from "../atom/button";
import Header from "../fragments/Header";
import Filters from "../ui/Filters";
import listKategory from "../atom/listKategory.json";
import listNegara from "../atom/listNegara.json";
function WhatsappAddGrup() {
  const [kategory, setKategory] = React.useState("all");
  const [negara, setNegara] = React.useState("all");
  const [linkGrup,setLinkGrup] = React.useState("")

  return (
    <div className="min-h-screen w-full">
      {/* SEO */}
      <Helmet>
        <title>
          Tambah Grup WhatsApp Aktif | Publikasikan Link Grup WA Gratis
        </title>
        <meta
          name="description"
          content="Tambahkan link grup WhatsApp aktif secara gratis. Publikasikan grup WA kamu agar mudah ditemukan dan mendapatkan member baru dari seluruh Indonesia."
        />
      </Helmet>

      <Navbar />

      <main className="bg-white flex flex-col items-center px-4 py-10">
        {/* H1 (WAJIB SEO) */}
        <h1 className="text-3xl font-bold text-green-900 text-center">
          Tambah Grup WhatsApp Aktif dan Dapatkan Member Baru
        </h1>

        <p className="text-gray-600 text-center max-w-xl mt-3">
          Publikasikan link grup WhatsApp kamu agar bisa ditemukan oleh ribuan
          pengguna. Website ini membantu orang mencari grup WA berdasarkan
          kategori seperti bisnis, belajar, komunitas, dan lainnya.
        </p>

        {/* FORM */}
        <form className="border border-green-900 p-6 rounded-md w-full max-w-md mt-6 shadow-sm">
          <div className="text-xl mb-4 bg-green-100 text-green-950 flex justify-center items-center font-semibold p-4 rounded-md">
            <Book className="mr-2" />
            Form Tambah Grup WhatsApp
          </div>

          <Input
            type="text"
            label={"Link Grup WhatsApp"}
            value={linkGrup}
            placeholder={"https://chat.whatsapp.com/XXXXXXXX"}
            classInput={"w-full"}
            icon={<Link2 />}
            onChange={(e)=> setLinkGrup(e.target.value)}
          />

          {/* NEGARA */}
          <div className="text-green-950 font-semibold mt-4">
            <Filters
              label={"Negara"}
              data={listNegara}
              onChange={(e) => setNegara(e.target.value)}
            />
          </div>

          {/* KATEGORI */}
          <div className="text-green-950 font-semibold mt-4">
            <Filters
              label={"Kategori Grup"}
              data={listKategory}
              onChange={(e) => setKategory(e.target.value)}
            />
          </div>

          <Button className="w-full mt-6">Daftarkan Grup Sekarang</Button>

          {/* TRUST + SEO */}
          <p className="text-xs text-gray-500 mt-4 text-center">
            Hanya grup WhatsApp aktif yang akan ditampilkan. Link tidak valid,
            spam, atau melanggar aturan akan dihapus untuk menjaga kualitas
            platform.
          </p>
        </form>

        {/* SEO CONTENT TAMBAHAN */}
        <section className="max-w-xl mt-10 text-center">
          <h2 className="text-xl font-bold text-green-900">
            Keuntungan Menambahkan Grup WhatsApp
          </h2>

          <p className="text-gray-600 mt-2">
            Dengan menambahkan grup WhatsApp ke platform ini, kamu bisa
            mendapatkan lebih banyak anggota secara organik. Pengguna dapat
            menemukan grup berdasarkan minat mereka seperti bisnis online,
            investasi crypto, komunitas belajar, hingga hiburan.
          </p>

          <p className="text-gray-600 mt-2">
            Semua grup yang dipublikasikan akan dikategorikan agar mudah dicari
            di mesin pencari seperti Google, sehingga peluang mendapatkan
            anggota baru semakin besar.
          </p>
        </section>
      </main>
    </div>
  );
}

export default WhatsappAddGrup;
