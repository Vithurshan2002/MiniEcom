import AboutPage from "./Pages/AboutPage";
import Dishes from "./Pages/Dishes";
import Homepage from "./Pages/Homepage";
import MenusPage from "./Pages/MenusPage";
import Navbar from "./Pages/Navbar";
import Review from "./Pages/Review";
import OrderPage from "./Pages/OrderPage";
function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Dishes />
      <AboutPage />
      {/* <MenusPage />
      <Review />
      <OrderPage />  */}
    </>
  );
}

export default App;
