import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Tentang from "./pages/Tentang";
import UMKM from "./pages/UMKM";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tentang">
            <Route index element={<Tentang />} />
          </Route>
          <Route path="/umkm">
            <Route index element={<UMKM />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
