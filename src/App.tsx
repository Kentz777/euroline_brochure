import { Route, Routes } from "react-router-dom";
import EuroLinebridgeLayout from "./layout/EuroLinebridgeLayout";
import Home from "./pages/linebridge/Home";
import Logistics from "./pages/linebridge/Logistics";

function App() {
  return (
    <Routes>
      {/* Index */}
      <Route element={<EuroLinebridgeLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* EuroLinebridge Logistics Section */}
      <Route path="/linebridge" element={<EuroLinebridgeLayout />}>
        <Route path="/linebridge/home" element={<Home />} />
        <Route path="/linebridge/logistics" element={<Logistics />} />
      </Route>
    </Routes>
  );
}

export default App;
