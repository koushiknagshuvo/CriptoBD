import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import { AllCoins } from "./Pages/AllCoins";
import Coinspage from "./Pages/Coinspage";
import Homepage from "./Pages/Homepage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />{" "}
          <Route path="/about" element={<About />} />{" "}
          <Route path="/coins/:id" element={<Coinspage />} />{" "}
          <Route path="/all-coins" element={<AllCoins />} />{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
