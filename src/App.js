import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/forget-password" index element={<ForgetPassword />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
