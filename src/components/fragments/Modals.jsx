import React, { useState } from "react";
import Input from "../atom/input/Index";
import Filters from "../ui/Filters";
import Button from "../atom/button";
import { XCircle } from "lucide-react";
import Report from "../../api/reportProblem";
import { MailWarning } from "lucide-react";

const VALUE_FILTER = [
  {
    name: "tautan rusak",
    value: "link_failed",
  },
  {
    name: "Grup berisi penipuan",
    value: "penipuan",
  },
  {
    name: "Grup berisi virus",
    value: "virus",
  },
  {
    name: "Lainya",
    value: "lainya",
  },
];

function Modals({ data, onClose }) {
  const [alasan, setAlasan] = useState("tautan rusak");
  const [keterangan, setKeterangan] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    Report({
      alasan,
      keterangan,
      kategori: data.kategori,
      id: data.id,
      name: data.name,
    }).then((v) => {
      console.log({ v });
      onClose;
    });
  };

  return (
    <>
      <div
        className="absolute -top-2.5  -right-2.5 text-white shadow-2xl"
        onClick={onClose}
      >
        {" "}
        <XCircle
          color="white"
          enableBackground={"red"}
          className="bg-red-400 rounded-full border border-green-950"
        />{" "}
      </div>
      <form className=" flex-col gap-2 text-green-950" onSubmit={handleSubmit}>
        <div className="text-xl text-center justify-center my-4 bg-green-100 p-6 rounded-sm shadow-sm flex font-bold">
          {" "}
          <MailWarning className="mx-2" /> LAPORKAN{" "}
        </div>
        <div className="font-bold">
          <label className="mx-2">Alasan :</label>
          <Filters
            value={alasan}
            onChange={(e) => setAlasan(e.target.value)}
            data={VALUE_FILTER}
          />
        </div>
        <Input
          type="textarea"
          value={keterangan}
          onChange={(e) => setKeterangan(e.target.value)}
          label={"Keterangan :"}
          classInput={"text-green-950 border border-green-950 bg-white"}
          placeholder={"(Opsional) Masukan keterangan"}
        ></Input>
        <div className="w-full my-3 text-center">
          <Button onClick={handleSubmit}> Laporkan!</Button>
          <p className="text-xs text-gray-900 my-3 font-serif">
            Laporan Anda membantu kami menjaga platform ini
          </p>
        </div>
      </form>
    </>
  );
}

export default Modals;
