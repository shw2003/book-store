import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AddBooks from "./components/pages/AddBooks";
import Books from "./components/pages/Books";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import ThankYou from "./components/pages/ThankYou";
import Failure from "./components/pages/Failure";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addBooks" element={<AddBooks />} />
        <Route path="/update/:id" element={<AddBooks />} />
        <Route path="/thank-you" element={<ThankYou />} />{" "}
        {/* ✅ Correct path */}
        <Route path="/payment-failed" element={<Failure />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
