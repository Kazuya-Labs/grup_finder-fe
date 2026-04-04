import React, { useState, useEffect } from "react";
import {
  LucideFileWarning,
  LucideGroup,
  Search,
  Key,
  Globe,
} from "lucide-react";
import Button from "../atom/button";
import Card from "../fragments/Card";
import Navbar from "../fragments/Navbar";
import Filters from "../ui/Filters";
import Loading from "../ui/Loading";
import Input from "../atom/input/Index";
import listNegara from "../atom/listNegara.json";
import listKategory from "../atom/listKategory.json";

const Data = [
  {
    link: "./vite.svg",
    desc: "lorem ipsum dididid",
    title: "abc defI",
  },
  {
    link: "./vite.svg",
    desc: "lorem ipsum dididid",
    title: "abc defI",
  },
  {
    link: "./vite.svg",
    desc: "lorem ipsum dididid",
    title: "abc defi abc abc abc ",
  },
  {
    link: "./vite.svg",
    desc: "lorem ipsum dididid",
    title: "abc defi",
  },
];

function ListGrup() {
  const [loading, SetLoading] = useState(true);
  const [listGrup, SetListGrup] = useState(null);
  const [kategory, setKategory] = useState("all");
  const [negara, setNegara] = useState("all");

  useEffect(() => {
    const simulasi = async () =>
      new Promise((resolve, reject) => {
        setTimeout(resolve, 5000);
      });

    return async () => {
      await simulasi();
      SetLoading(false);
      SetListGrup(Data);
    };
  }, [negara, kategory]);

  return (
    <div className="container bg-green-50 overflow-hidden  min-h-screen min-w-full">
      <Navbar />
      <div className="m-3">
        <Input
          type="search"
          label={"Search"}
          placeholder={"Cari Grup Sesuai Kebutuhanmu"}
          icon={<Search />}
        />
      </div>
      <div className="w-5/6 m-4 grid grid-cols-2 gap-2">
        <Filters label={"Negara : "} data={listNegara} onChange={(e) => setNegara(e.target.value)}/>{" "}
        <Filters label={"Kategory :"} data={listKategory} onChange={(e) => setKategory(e.target.value)}/>
      </div>
      {loading && <Loading />}
      {listGrup && (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
          {listGrup.map((v, i) => (
            <Card key={i}>
              <Card.img img={{ link: v.link }}>
                <div className="flex flex-col gap-1">
                  <div className="text-sm flex text-green-900 bg-green-400 p-1 rounded-md">
                    <Key size={18} className="mx-0.5" /> bussines
                  </div>
                  <div className="text-sm flex text-green-900 bg-green-400 p-1 rounded-md">
                    <Globe size={18} className="mx-0.5" /> Indonesia
                  </div>
                </div>
              </Card.img>
              <Card.body>
                <Card.title> {v.title} </Card.title>
                {v.desc}
                <div className="mt-2 flex gap-2 container">
                  <Button
                    size="sm"
                    rounded="md"
                    className="justify-center flex items-center"
                  >
                    {" "}
                    <LucideGroup className="mr-1" /> Gabung{" "}
                  </Button>
                  <Button
                    rounded="md"
                    size="sm"
                    className="justify-center flex items-center"
                  >
                    {" "}
                    <LucideFileWarning className="mr-1 px-1" /> Laporkan{" "}
                  </Button>
                </div>
              </Card.body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListGrup;
