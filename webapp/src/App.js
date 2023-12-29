import { BrowserRouter } from 'react-router-dom'
import CustomButton from "./components/CustomButton";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar/Navbar";
import bgImg from "./assets/images/bg.png";
import sectionImgOne from "./assets/images/section-img-1.png";
import sectionImgTwo from "./assets/images/section-img-2.png";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
