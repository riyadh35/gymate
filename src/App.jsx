import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./pages/Header/Navbar";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
