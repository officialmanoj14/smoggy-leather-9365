import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import FishingPage from "../Pages/FishingPage";
import CartPage from "../Pages/CartPage";
import SignUp from "../SignUp";
import Payment from "../Pages/Payment";
import ProductSinglePage from "../Pages/ProductSinglePage";
import Checkout from "../Pages/Checkout";
import ClothingPage from "../Pages/ClothingPage";
import RidePage from "../Pages/RidePage";
import FootwearPage from "../Pages/FootwearPage";
import LoginDrawer from "../LoginDrawer";


function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />

            <Route path="/fishing" element={<FishingPage/>} />

            <Route path="/cart" element={<CartPage/>} />

            <Route path="/login" element={<LoginDrawer/>} />

            <Route path="/signup" element={<SignUp/>} />

            <Route path="/payment" element={<Payment/>} />

            <Route path="products/:category/:product_id" element={<ProductSinglePage/>} />

            <Route path="/checkout" element={<Checkout/>} />

            <Route path="/clothing" element={<ClothingPage/>} />

            <Route path="/ride" element={<RidePage/>} />

            <Route path="/footwear" element={<FootwearPage/>} />

        </Routes>
    )
}

export default AllRoutes;