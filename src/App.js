import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<h1>product listing component</h1>} />
          <Route path="/add" element={<h1> add product component</h1>} />
          <Route path="update" element={<h1>update product component </h1>} />
          <Route path="logout" element={<h1> logout product component </h1>} />
          <Route path="/profile" element={<h1>profile component</h1>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
