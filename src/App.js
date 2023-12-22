import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/forget-password" index element={<ForgetPassword />} />
            <Route path="/shop" index element={<Shop />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
