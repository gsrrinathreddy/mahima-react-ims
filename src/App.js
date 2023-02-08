import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cakes from "./Pages/Cakes";
import { useSelector } from "react-redux";
import CartComponent from "./components/CartComponent";
import ViewCart from "./Pages/ViewCart";
import IceCreams from "./Pages/IceCreams";
import Chocolate from "./Pages/Chocolate";
import Flowers from "./Pages/Flowers";
import Relish from "./Pages/Relish";
import HomePage from "./Pages/HomePage";
import DeliveryStatus from "./Pages/DeliveryStatus";
import NotFound from "./Pages/NotFound";
import SignIn from "./Pages/SignIn";
import Checkout from "./Pages/Checkout";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import SettingsPage from "./Pages/SettingsPage";
import FavoritesPage from "./Pages/FavoritesPage";
import Users from "./Pages/Users";
import Products from "./Pages/Products";
import ReceiveOffers from "./Pages/ReceiveOffers";

function App() {
  //let noOfCakes = useSelector((state)=> state.cake.orderedcakes)
  //let initialcakes=useSelector((state)=>state.cake.numOfcakes);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/settings" element={<SettingsPage />}></Route>
          {/* <Route path="/favorites" element={<Users />}></Route> */}
          <Route path="/ReceiveOff" element={<ReceiveOffers />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>

          <Route path="/products" element={<Products />}></Route>
          <Route path="/Cakes" element={<Cakes />}></Route>
          <Route path="/Cart" element={<ViewCart />}></Route>
          <Route path="/Hme" element={<DeliveryStatus />}></Route>

          <Route path="/Relish" element={<Relish />}></Route>

          <Route path="/IceCreams" element={<IceCreams />}></Route>
          <Route path="/Chocolate" element={<Chocolate />}></Route>
          <Route path="/Flowers" element={<Flowers />}></Route>
          <Route exact path="/Billing" element={<Cakes />}></Route>
          <Route exact path="/Home" element={<Cakes />}></Route>
          <Route path="/order-summary" element={<DeliveryStatus />}></Route>
          <Route path="/Checkout" element={<Checkout />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
