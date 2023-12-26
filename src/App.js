import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Shop from "./pages/Shop/Shop";
import ShopCategories from "./pages/ShopCategories/ShopCategories";
import Layout from "./components/Layout/Layout";
import Product from "./pages/Product/Product";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" index element={<Home/>}/>
                        <Route path="/forget-password" index element={<ForgetPassword/>}/>
                        <Route path="/shop">
                            <Route index element={<Shop/>}/>
                            <Route
                                path=":id"
                                element={<ShopCategories/>}
                            />
                        </Route>
                        <Route
                            path="product/:id"
                            element={<Product />}
                        />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;
