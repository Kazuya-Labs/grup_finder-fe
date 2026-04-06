import React from "react";

function Card({ children }) {
  return (
    // Tambahkan h-fit atau max-h agar card tidak meledak tingginya
    <div className="bg-green-300 overflow-hidden flex gap-3 m-2 rounded-md h-fit">
      {children}
    </div>
  );
}

Card.img = ({ children, img }) => {
  return (
    // Hapus 'container', ganti dengan lebar spesifik (misal w-32 atau w-1/4)
    <div className="flex flex-col items-center p-4 w-32 shrink-0">
      <div className="relative">
        <img
          src={img.link}
          // Tambahkan w-24 h-24 dan object-cover agar ukuran konsisten
          className="rounded-full border-2 border-green-50 p-1 w-18 h-18 object-cover"
          alt={img.alt || "img"}
        />
      </div>
      <div className="mt-2 text-center text-sm"> {children} </div>
    </div>
  );
};

Card.body = ({ children }) => {
  return (
    // Gunakan flex-1 agar body mengambil sisa space yang ada
    <div className="flex flex-col justify-center py-4 pr-4 flex-1">
      {children}
    </div>
  );
};

Card.title = ({ children }) => {
  return <div className="text-xl font-bold mb-1"> {children} </div>;
};

export default Card;
