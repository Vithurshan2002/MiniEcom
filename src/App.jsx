import AboutPage from "./Pages/AboutPage";
import Dishes from "./Pages/Dishes";
import Homepage from "./Pages/Homepage";
import MenusPage from "./Pages/MenusPage";
import Navbar from "./Pages/Navbar";
import Review from "./Pages/Review";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Pages/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Dishes />
      <AboutPage />
      {/*  <MenusPage /> */}
     <Review />
      <ContactPage/>
      <Footer/>
    </>
  );
}

export default App;
