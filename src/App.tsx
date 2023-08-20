import { useState } from "react";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Footer } from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="root">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
