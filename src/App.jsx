import AboutPage from "./Pages/AboutPage";
import Dishes from "./Pages/Dishes";
import Homepage from "./Pages/Homepage";
import MenusPage from "./Pages/MenusPage";
import Navbar from "./Pages/Navbar";
import Review from "./Pages/Review";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Pages/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CardPage from "./Pages/CardPage";
import ConfirmOrder from "./Pages/ConfirmOrder";
import ShippingInfor from "./Pages/ShippingInfor";
import PaymentPage from "./Pages/PaymentPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Homepage />
                <Dishes />
                <AboutPage />
                {/*  <MenusPage /> */}
                <Review />
                <ContactPage />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/confirmorder" element={<ConfirmOrder />} />
          <Route path="/shippingInfor" element={<ShippingInfor />} />
          <Route path="/paymentpage" element={<PaymentPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
