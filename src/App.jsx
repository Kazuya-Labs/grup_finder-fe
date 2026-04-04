import { Route, Routes } from "react-router-dom";
import WhatsappAddGrup from "./components/templates/WhatsappAddGrup";
import ListGrup from "./components/templates/ListGrup";
import Loading from "./components/ui/Loading";
import Home from "./components/templates/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/add" loader={<Loading />} element={<WhatsappAddGrup />} />
        <Route path="/list" element={<ListGrup />} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
