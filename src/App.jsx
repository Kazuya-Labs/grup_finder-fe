import { Route, Routes } from "react-router-dom";
import WhatsappAddGrup from "./components/templates/WhatsappAddGrup";
import ListGrup from "./components/templates/ListGrup";
import Home from "./components/templates/Home";
import PrivacyPolicy from "./components/templates/PrivacyPolicy";
import About from "./components/templates/Aboutme";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />{" "}
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<WhatsappAddGrup />} />
      <Route path="/list" element={<ListGrup />} />
      <Route path="/grup-wa" element={<ListGrup />} />
      <Route path="/grup-wa/:kategori" element={<ListGrup />} />
      <Route path="/grup-wa/:kategori/:negara" element={<ListGrup />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
