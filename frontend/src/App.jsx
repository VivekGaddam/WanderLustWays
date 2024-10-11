import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

import Navbar from "./components/Navbar";
import Hotels from "./pages/Hotels";
import Tourist from "./pages/Tourist";
import Travels from "./pages/Travels";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chatbot from "./pages/Chatbot";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/travels" element={<Travels />} />
                <Route path="/touristdestinations" element={<Tourist />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/chatbot" element={<Chatbot />} />

            </Routes>
        </Router>
    );
}

export default App;
