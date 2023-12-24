import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/forget-password" index element={<ForgetPassword />} />
            <Route path="/shop" index element={<Shop />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
