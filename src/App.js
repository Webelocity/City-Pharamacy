import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Shop from "./pages/Shop/Shop";
import ShopCategories from "./pages/ShopCategories/ShopCategories";
import Layout from "./components/Layout/Layout";
import Product from "./pages/Product/Product";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import ConsultPharmacist from "./pages/ConsultPharmacist/ConsultPharmacist";
import Vaccine from "./pages/Vaccine/Vaccine";
import Testing from "./pages/Testing/Testing";
import TravelHealth from "./pages/TravelHealth/TravelHealth";
import Compression from "./pages/Compression/Compression";
import MinorAliments from "./pages/MinorAliments/MinorAliments";
import Fillprescription from "./pages/Prescription/FillPrescription";
import Transferprescription from "./pages/Prescription/Transferprescription";
import Refillprescription from "./pages/Prescription/Refillprescription";
import Shippingpolicy from "./pages/Shippingpolicy/Shippingpolicy";
import Privacypolicy from "./pages/Privacypolicy/Privacypolicy";
import Terms from "./pages/Terms/Terms";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/About" index element={<About />} />
            <Route path="/Contact" index element={<Contact />} />
            <Route path="/Vaccinations" index element={<Vaccine />} />
            <Route path="/Testing" index element={<Testing />} />
            <Route path="/Travel" index element={<TravelHealth />} />
            <Route path="/Compression" index element={<Compression />} />
            <Route path="/MinorAliments" index element={<MinorAliments />} />
            <Route path="/Shipping_policy" index element={<Shippingpolicy />} />
            <Route path="/Privacy_policy" index element={<Privacypolicy />} />
            <Route path="/Terms" index element={<Terms />} />
            <Route
              path="/Fillprescription"
              index
              element={<Fillprescription />}
            />
            <Route
              path="/Transferprescription"
              index
              element={<Transferprescription />}
            />
            <Route
              path="/Refillprescription"
              index
              element={<Refillprescription />}
            />
            <Route
              path="/Consult_a_pharmacist"
              index
              element={<ConsultPharmacist />}
            />
            <Route path="/forget-password" index element={<ForgetPassword />} />
            <Route path="/shop">
              <Route index element={<Shop />} />
              <Route path=":id" element={<ShopCategories />} />
            </Route>
            <Route path="product/:id" element={<Product />} />
            <Route path="/cart" index element={<Cart />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
