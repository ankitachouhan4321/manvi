import React from "react";
import { Routes, Route } from "react-router-dom";


import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";
import Career from "./pages/Career";

import Fixedicon from "./component/Fixedicon";

import ScrollToTop from "./pages/ScrollToTop";

import BenefitsIndustrialAirWashers from "./pages/blogpage/BenefitsIndustrialAirWashers";
import RightAirWasherSystem from "./pages/blogpage/RightAirWasherSystem";

// product-page
import Airlouversmanufacturers from "./pages/air-louvers-manufacturers"
import Ahumanufacturers from "./pages/ahu-manufacturers"
import Cabinetfanmanufacturers from "./pages/Cabinet-fan-manufacturers"
import Doubleskinairwashermanufacturers from "./pages/double-skin-air-washer-manufacturers"
import Airwasherunitmanufacturers from "./pages/air-washer-unit-manufacturers"
import Ahucoilandcoolingcoilmanufacturers from "./pages/ahu-coil-and-cooling-coil-manufacturers"
import Axialflowfanmanufacturers from "./pages/axial-flow-fan-manufacturers"
import Kitchenexhaustsystemsmanufacturers from "./pages/kitchen-exhaust-systems-manufacturers"
import Fancoilunitmanufacturers from "./pages/fan-coil-unit-manufacturers"
import Wetscrubbermanufacturers from "./pages/wet-scrubber-manufacturers"
import Airexhaustunitmanufacturers from "./pages/air-exhaust-unit-manufacturers"
// import Airhandlingunitmanufacturers from "./pages/air-handling-unit-manufacturers-delete"

import Gigravitylouvers from "./pages/product-det/AirLouvers/gi-gravity-louvers"
import Aluminiumfixedlouvers from "./pages/product-det/AirLouvers/aluminium-fixed-louvers"
import Ventilationlouvers from "./pages/product-det/AirLouvers/ventilation-louvers"
import Giventilationlouvers from "./pages/product-det/AirLouvers/gi-ventilation-louvers"
import Aluminiumlouvers from "./pages/product-det/AirLouvers/aluminium-louvers"

import Aircoolingunit from "./pages/product-det/AHU/air-cooling-unit"
import Airhandlingunit from "./pages/product-det/AHU/air-handling-unit"
import Manviahu from "./pages/product-det/AHU/manvi-ahu"

import Industrialfans from "./pages/product-det/Cabinet-Fan/industrial-fans"
import Directdrivecentrifugalfan from "./pages/product-det/Cabinet-Fan/direct-drive-centrifugal-fan"
import Ductdirectdrivecentrifugalfans from "./pages/product-det/Cabinet-Fan/duct-direct-drive-centrifugal-fans"

import Singleskinairwasher from "./pages/product-det/Double-Skin-Air-Washer/single-skin-air-washer"
import Doubleskinfreshairunit from "./pages/product-det/Double-Skin-Air-Washer/double-skin-fresh-air-unit"

import Airwasherdoubleskin from "./pages/product-det/Air-Washer-Unit/air-washer-double-skin"
import Airwasher from "./pages/product-det/Air-Washer-Unit/air-washer"

import Industrialahucoolingcoil from "./pages/product-det/Ahu-Coil-And-Cooling-Coil/industrial-ahu-cooling-coil"
import Chilledwatercoilahu from "./pages/product-det/Ahu-Coil-And-Cooling-Coil/chilled-water-coil-ahu"

import Tubeaxialflowfan from "./pages/product-det/Axial-Flow-Fan/tube-axial-flow-fan"
import Tubeindustrialaxialflowfan from "./pages/product-det/Axial-Flow-Fan/tube-industrial-axial-flow-fan"


import Kitchenexhaustsystem from "./pages/product-det/Kitchen-Exhaust-System/kitchen-exhaust-system"
import Commercialkitchenexhaustsystem from "./pages/product-det/Kitchen-Exhaust-System/commercial-kitchen-exhaust-system"

import Horizontalfancoilunit from "./pages/product-det/Fan-Coil-Unit/horizontal-fan-coil-unit"
import Chilledwaterfancoilunits from "./pages/product-det/Fan-Coil-Unit/chilled-water-fan-coil-units"
import Industrialfancoilunit from "./pages/product-det/Fan-Coil-Unit/industrial-fan-coil-unit"
import Fancoilunit from "./pages/product-det/Fan-Coil-Unit/fan-coil-unit"

import Wetscrubberssystem from "./pages/product-det/Wet-Scrubber/wet-scrubbers-system"
import Wetairscrubber from "./pages/product-det/Wet-Scrubber/wet-air-scrubber"

import Cabinettypeairexhaustunit from "./pages/product-det/Air-Exhaust-Unit/cabinet-type-air-exhaust-unit"


import Contact from "./pages/Contact";


function App() {
  return (
    <>

      <ScrollToTop />
      <Navbar />
      <Fixedicon />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/career" element={<Career />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/benefitsIndustrialAirWashers" element={<BenefitsIndustrialAirWashers />} />
        <Route path="/rightAirWasherSystem" element={<RightAirWasherSystem />} />

        <Route path="/air-louvers-manufacturers" element={<Airlouversmanufacturers />} />
        <Route path="/ahu-manufacturers" element={<Ahumanufacturers />} />
        <Route path="/cabinet-fan-manufacturers" element={<Cabinetfanmanufacturers />} />
        <Route path="/double-skin-air-washer-manufacturers" element={<Doubleskinairwashermanufacturers />} />
        <Route path="/air-washer-unit-manufacturers" element={<Airwasherunitmanufacturers />} />
        <Route path="/ahu-coil-and-cooling-coil-manufacturers" element={<Ahucoilandcoolingcoilmanufacturers />} />
        <Route path="/axial-flow-fan-manufacturers" element={<Axialflowfanmanufacturers />} />
        <Route path="/kitchen-exhaust-systems-manufacturers" element={<Kitchenexhaustsystemsmanufacturers />} />
        <Route path="/fan-coil-unit-manufacturers" element={<Fancoilunitmanufacturers />} />
        <Route path="/wet-scrubber-manufacturers" element={<Wetscrubbermanufacturers />} />
        <Route path="/air-exhaust-unit-manufacturers" element={<Airexhaustunitmanufacturers />} />
        {/* <Route path="/air-handling-unit-manufacturers" element={<Airhandlingunitmanufacturers />} /> */}

        <Route path="/gi-gravity-louvers" element={<Gigravitylouvers />} />
        <Route path="/aluminium-fixed-louvers" element={<Aluminiumfixedlouvers />} />
        <Route path="/ventilation-louvers" element={<Ventilationlouvers />} />
        <Route path="/gi-ventilation-louvers" element={<Giventilationlouvers />} />
        <Route path="/aluminium-louvers" element={<Aluminiumlouvers />} />

        <Route path="/air-cooling-unit" element={<Aircoolingunit />} />
        <Route path="/air-handling-unit" element={<Airhandlingunit />} />
        <Route path="/manvi-ahu" element={<Manviahu />} />

        <Route path="/industrial-fans" element={<Industrialfans />} />
        <Route path="/direct-drive-centrifugal-fan" element={<Directdrivecentrifugalfan />} />
        <Route path="/duct-direct-drive-centrifugal-fans" element={<Ductdirectdrivecentrifugalfans />} />

        <Route path="/single-skin-air-washer" element={<Singleskinairwasher />} />
        <Route path="/double-skin-fresh-air-unit" element={<Doubleskinfreshairunit />} />

        <Route path="/air-washer-double-skin" element={<Airwasherdoubleskin />} />
        <Route path="/air-washer" element={<Airwasher />} />

        <Route path="/industrial-ahu-cooling-coil" element={<Industrialahucoolingcoil />} />
        <Route path="/chilled-water-coil-ahu" element={<Chilledwatercoilahu />} />

        <Route path="/kitchen-exhaust-system" element={<Kitchenexhaustsystem />} />
        <Route path="/commercial-kitchen-exhaust-system" element={<Commercialkitchenexhaustsystem />} />

        <Route path="/tube-axial-flow-fan" element={<Tubeaxialflowfan />} />
        <Route path="/tube-industrial-axial-flow-fan" element={<Tubeindustrialaxialflowfan />} />

        <Route path="/horizontal-fan-coil-unit" element={<Horizontalfancoilunit />} />
        <Route path="/chilled-water-fan-coil-units" element={<Chilledwaterfancoilunits />} />
        <Route path="/industrial-fan-coil-unit" element={<Industrialfancoilunit />} />
        <Route path="/fan-coil-unit" element={<Fancoilunit />} />

        <Route path="/wet-scrubbers-system" element={<Wetscrubberssystem />} />
        <Route path="/wet-air-scrubber" element={<Wetairscrubber />} />


        <Route path="/cabinet-type-air-exhaust-unit" element={<Cabinettypeairexhaustunit />} />



      </Routes>

      <Footer />
    </>

  );
}

export default App;