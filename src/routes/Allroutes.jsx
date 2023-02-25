import { Route, Routes } from "react-router-dom";
import AdminPage from "../Admin/pages/AdminPage";
import CartPage from "../components/CartPage/CartPage";
import Cartscreen from "../components/CartPage/Cartscreen";
import Payment from "../components/CheckoutPage/Payment";
import Login from "../components/LoginPage/LoginPage";
import OTP from "../components/LoginPage/OTP";
import Signup from "../components/SignupPage/signup";
import Error404 from "../pages/Error404";
import Homepage from "../pages/Homepage";
import Products from "../pages/Products";
import Restricated404 from "../pages/Restricted404";
import SingleProduct from "../pages/SingleProduct";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes(){


    return <Routes>

        <Route path="/" element={<Homepage />}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/login/otp" element={<OTP />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/admin" element={<PrivateRoute><AdminPage /></PrivateRoute>}></Route>
        <Route path="/404" element={<Restricated404 />}></Route>
        <Route path="*" element={<Error404 />}></Route>
        <Route path="/products/:id" element={<SingleProduct/>}></Route>
        <Route path="/cart" element={<Cartscreen/>}></Route>


    </Routes>
}