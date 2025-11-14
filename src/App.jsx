import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Places from "./pages/Places";
import Cars from "./pages/Cars";
import Search from "./pages/Search";
import TourDetails from "./pages/TourDetails";
import PlaceDetails from "./pages/PlaceDetails";
import CarDetails from "./pages/CarDetails";
import Account from "./pages/Account";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex flex-col">
      <Navbar/>
      <div className="pt-16 flex-1">
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/tours" element={<Tours/>} />
          <Route path="/tours/:slug" element={<TourDetails/>} />
          <Route path="/places" element={<Places/>} />
          <Route path="/places/:slug" element={<PlaceDetails/>} />
          <Route path="/cars" element={<Cars/>} />
          <Route path="/cars/:id" element={<CarDetails/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/account" element={<Account/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
