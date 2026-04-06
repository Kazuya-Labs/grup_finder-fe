import React, { useState, useEffect, useMemo } from "react";
import {
  Search,
  Globe,
  DoorOpen,
  KeyRoundIcon,
  AlertTriangle,
} from "lucide-react";

import Button from "../atom/button";
import Card from "../fragments/Card";
import Navbar from "../fragments/Navbar";
import Filters from "../ui/Filters";
import Loading from "../ui/Loading";
import Input from "../atom/input/Index";
import listNegara from "../atom/listNegara.json";
import listKategory from "../atom/listKategory.json";

function ListGrup() {
  const [loading, setLoading] = useState(false);
  const [listGrup, setListGrup] = useState([]);
  const [kategory, setKategory] = useState("all");
  const [negara, setNegara] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:3000/api/list?kategori=${kategory}&negara=${negara}`,
        );
        const data = await res.json();
        setListGrup(data.data || []);
      } catch (err) {
        setListGrup([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [kategory, negara]);

  const filteredData = useMemo(() => {
    if (!searchTerm) return listGrup;

    return listGrup.filter((item) =>
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [listGrup, searchTerm]);

  return (
    <div className="bg-green-50 min-h-screen">
      <Navbar />

      {/* SEARCH */}
      <div className="p-3">
        <Input
          type="search"
          label="Search"
          placeholder="Cari Grup..."
          icon={<Search className="w-4 h-4" />}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* FILTER */}
      <div className="w-full md:w-2/3 p-3 grid grid-cols-2 gap-2">
        <Filters
          label="Negara"
          data={listNegara}
          onChange={(e) => setNegara(e.target.value)}
        />
        <Filters
          label="Kategori"
          data={listKategory}
          onChange={(e) => setKategory(e.target.value)}
        />
      </div>

      {/* LOADING */}
      {loading && <Loading />}

      {/* LIST */}
      {!loading && (
        <div className="grid md:grid-cols-2 gap-3 p-3">
          {filteredData.map((v) => (
            <Card key={v.id || v.link}>
              <Card.img img={{ link: v.image_url }}>
                <div className="flex flex-col gap-1">
                  <div className="badge justify-center items-center flex p-1 bg-green-400 font-sans border border-green-950 rounded-sm">
                    <KeyRoundIcon className="w-3 h-3 mr-1" />
                    {v.kategori}
                  </div>
                  <div className="badge justify-center items-center flex p-1 bg-green-400 font-sans border border-green-950 rounded-sm">
                    <Globe className="w-3 h-3 mr-1" />
                    {v.negara}
                  </div>
                </div>
              </Card.img>

              <Card.body>
                <Card.title>{v?.title || "unknown"}</Card.title>

                <span className="text-xs text-gray-500">
                  {v.created_at?.split("T")[0]}
                </span>

                <div className="mt-2 flex gap-2">
                  <Button size="sm" className="flex items-center">
                    <DoorOpen className="w-4 h-4 mr-1" />
                    Gabung
                  </Button>

                  <Button
                    size="sm"
                    variant="danger"
                    className="flex items-center"
                  >
                    <AlertTriangle className="w-4 h-4 mr-1" />
                    Laporkan
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
