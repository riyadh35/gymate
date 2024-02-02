import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./pages/Header/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
