import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home></Home>
      </BrowserRouter>
    </div>
  );
}

export default App;
