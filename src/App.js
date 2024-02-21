import './App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Home />
      <Header />
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          {/* <Route  path ="Home" element={<Home/>} /> */}
        </Routes>
      </BrowserRouter> 
       <Footer />
    </div>
  );
}

export default App;
