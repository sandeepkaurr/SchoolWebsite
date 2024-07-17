import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Gallery from "./Gallery.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/gallery" element={<Gallery></Gallery>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
