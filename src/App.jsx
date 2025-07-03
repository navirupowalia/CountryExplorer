import "./App.css";

import { Route, Router, Routes } from "react-router-dom";

import AboutUsScreen from "./screens/AboutUsScreen";
import ContactUsScreen from "./screens/ContactUsScreen";
import Footer from "./components/Footer";
import HeaderNavBar from "./components/HeaderNavBar";
import HomeScreen from "./screens/HomeScreen";
import OurProcessScreen from "./screens/OurProcessScreen";
import ServicesScreen from "./screens/ServicesScreen";

function App() {
  return (
    <>
      <HeaderNavBar />

      <div className="h-[300px] w-full">
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/AboutUs" element={<AboutUsScreen />} />
          <Route path="/ContactUs" element={<ContactUsScreen />} />
          <Route path="/Services" element={<ServicesScreen />} />
          <Route path="/OurProcess" element={<OurProcessScreen />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
