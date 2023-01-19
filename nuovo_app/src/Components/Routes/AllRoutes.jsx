import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import FishingPage from "../Pages/FishingPage";
import CartPage from "../Pages/CartPage";
import Login from "../Login";
import SignUp from "../SignUp";
import Payment from "../Pages/Payment";
import ProductSinglePage from "../Pages/ProductSinglePage";
import Checkout from "../Pages/Checkout";
import ClothingPage from "../Pages/ClothingPage";
import RidePage from "../Pages/RidePage";
import FootwearPage from "../Pages/FootwearPage";


function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />

            <Route path="/fishingpage" element={<FishingPage/>} />

            <Route path="/cartpage" element={<CartPage/>} />

            <Route path="/login" element={<Login/>} />

            <Route path="/signup" element={<SignUp/>} />

            <Route path="/payment" element={<Payment/>} />

            <Route path="products/:category/:product_id" element={<ProductSinglePage/>} />

            <Route path="/checkout" element={<Checkout/>} />

            <Route path="/clothingpage" element={<ClothingPage/>} />

            <Route path="/ridepage" element={<RidePage/>} />

            <Route path="/footwearpage" element={<FootwearPage/>} />

        </Routes>
    )
}

export default AllRoutes;