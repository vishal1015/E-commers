import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Login />
      <Header />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route  path =" /" element={<Footer/>} />
        </Routes>
      </BrowserRouter> */}
      <Footer />
    </div>
  );
}

export default App;
