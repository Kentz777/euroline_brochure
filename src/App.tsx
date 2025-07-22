import { Route, Routes } from "react-router-dom";
import EuroLinebridgeLayout from "./layout/EuroLinebridgeLayout";
import Home from "./pages/linebridge/Home";
import Logistics from "./pages/linebridge/Logistics";
import Contact from "./pages/linebridge/Contact";
import SupplyChain from "./pages/linebridge/SupplyChain";
import Fabrication from "./pages/linebridge/Fabrication";
import CivilWorks from "./pages/linebridge/CivilWorks";
import Careers from "./pages/linebridge/Careers";
import About from "./pages/linebridge/About";
import Warehousing from "./pages/linebridge/Warehousing";
import EuroLineCashLayout from "./layout/EuroLineCashLayout";
import HomeCash from "./pages/cash/Home";
import ATMReplenishment from "./pages/cash/ATMReplenishment";
import CashBranchPickup from "./pages/cash/CashBranchPickup";
import FirstLineMaintenance from "./pages/cash/FirstLineMaintenance";
import ArmoredVehicleRental from "./pages/cash/ArmoredVehicleRental";
import Retail from "./pages/cash/Retail";
import CashManagement from "./pages/cash/CashManagement";
import AircashTransport from "./pages/cash/AircashTransport";
import ContactCash from "./pages/cash/ContactCash";
import CareersCash from "./pages/cash/CareersCash";
import AboutCash from "./pages/cash/AboutCash";

function App() {
  return (
    //    { name: "Home", path: "/linebridge/home" },
    //   { name: "Services", path: "" }, // no main link, has dropdown
    //   { name: "Careers", path: "/linebridge/careers" },
    //   { name: "About Us", path: "/linebridge/about" },
    //   { name: "Contact Us", path: "/linebridge/contacts" },

    // const servicesDropdown = [
    //   { name: "Logistics", path: "/linebridge/logistics" },
    //   { name: "Warehousing", path: "/linebridge/warehousing" },
    //   { name: "Supply Chain", path: "/linebridge/supply-chain" },
    //   { name: "Fabrication", path: "/linebridge/fabrication" },
    //   { name: "Civil Works", path: "/linebridge/civil-works" },
    <Routes>
      {/* Index */}
      <Route element={<EuroLinebridgeLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* EuroLinebridge Logistics Section */}
      <Route path="/linebridge" element={<EuroLinebridgeLayout />}>
        <Route path="/linebridge/home" element={<Home />} />
        <Route path="/linebridge/contacts" element={<Contact />} />
        <Route path="/linebridge/careers" element={<Careers />} />
        <Route path="/linebridge/about" element={<About />} />
        <Route path="/linebridge/logistics" element={<Logistics />} />
        <Route path="/linebridge/warehousing" element={<Warehousing />} />
        <Route path="/linebridge/supply-chain" element={<SupplyChain />} />
        <Route path="/linebridge/fabrication" element={<Fabrication />} />
        <Route path="/linebridge/civil-works" element={<CivilWorks />} />
      </Route>

      {/* Euroline Cash Solutions Section */}
      <Route path="/cash-solutions" element={<EuroLineCashLayout />}>
        <Route path="/cash-solutions/home" element={<HomeCash />} />
        <Route path="/cash-solutions/contacts" element={<ContactCash />} />
        <Route path="/cash-solutions/careers" element={<CareersCash />} />
        <Route path="/cash-solutions/about" element={<AboutCash />} />
        <Route
          path="/cash-solutions/atm-replenishment"
          element={<ATMReplenishment />}
        />
        <Route
          path="/cash-solutions/cash-branch-pickup"
          element={<CashBranchPickup />}
        />
        <Route
          path="/cash-solutions/first-line-maintenance"
          element={<FirstLineMaintenance />}
        />
        <Route
          path="/cash-solutions/armored-vehicle-rental"
          element={<ArmoredVehicleRental />}
        />
        <Route
          path="/cash-solutions/aircash-transport"
          element={<AircashTransport />}
        />
        <Route path="/cash-solutions/retail" element={<Retail />} />
        <Route
          path="/cash-solutions/cash-management"
          element={<CashManagement />}
        />
      </Route>
    </Routes>
  );
}

export default App;
