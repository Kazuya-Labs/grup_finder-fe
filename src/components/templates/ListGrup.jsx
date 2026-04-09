import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
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
import EmptyState from "../ui/Empty";
import ListGrupApi from "../../api/listGrup.js";
import Modals from "../fragments/Modals.jsx";

function ListGrup() {
  const navigate = useNavigate();
  const { kategori = "all", negara = "all" } = useParams();
  const [loading, setLoading] = useState(false);
  const [listGrup, setListGrup] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [dataReport, setDataReport] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    ListGrupApi(kategori, negara).then((v) => {
      setListGrup(v.data || []);
    });
    setLoading(false);
  }, [kategori, negara]);

  const filteredData = useMemo(() => {
    if (!searchTerm) return listGrup;

    return listGrup.filter((item) =>
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [listGrup, searchTerm]);

  const handleClick = () => {
    setIsOpen(true);
    console.log(e);
  };

  return (
    <div className="bg-green-50 relative min-h-screen">
      <Navbar />
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/150 backdrop-blur-xl">
          <div className="bg-green-300 p-4 rounded w-1/2 shadow-xl relative">
            <Modals onClose={() => setIsOpen(false)} data={dataReport} />
          </div>
        </div>
      )}
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
          value={kategori}
          label="Kategori"
          data={listKategory}
          onChange={(e) => navigate(`/grup-wa/${e.target.value}/${negara}`)}
        />
        <Filters
          value={negara}
          label="Negara"
          data={listNegara}
          onChange={(e) => navigate(`/grup-wa/${kategori}/${e.target.value}`)}
        />
      </div>

      {/* LOADING */}
      {loading && <Loading />}

      {/* LIST */}
      {!loading && (
        <div className="grid md:grid-cols-2 gap-3 p-3">
          {Array.isArray(filteredData) && filteredData.length > 0 ? (
            filteredData.map((v) => (
              <Card key={v.id || v.link}>
                <Card.img img={{ link: v.image_url }}>
                  <div className="flex flex-col gap-1">
                    <div className="badge justify-start items-center flex p-1 bg-green-400 font-sans border border-green-950 rounded-sm">
                      <KeyRoundIcon className="w-3 h-3 mr-1" />
                      {v.kategori}
                    </div>
                    <div className="badge justify-start items-center flex p-1 bg-green-400 font-sans border border-green-950 rounded-sm">
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
                    <Button
                      size="sm"
                      className="flex items-center"
                      onClick={() => (window.location.href = v.link)}
                    >
                      <DoorOpen className="w-4 h-4 mr-1" />
                      Gabung
                    </Button>
                    <div
                      onClick={() => {
                        setIsOpen(true);
                        setDataReport(v);
                      }}
                    >
                      <Button
                        size="sm"
                        variant="danger"
                        className="flex items-center"
                      >
                        <AlertTriangle className="w-4 h-4 mr-1" />
                        Laporkan
                      </Button>
                    </div>
                  </div>
                </Card.body>
              </Card>
            ))
          ) : (
            <div className="col-span-full">
              <EmptyState
                title="Grup tidak ditemukan"
                description="Coba ubah kata kunci atau filter kategori/negara."
              />
            </div>
          )}
        </div>
      )}
      <footer />
    </div>
  );
}

export default ListGrup;
