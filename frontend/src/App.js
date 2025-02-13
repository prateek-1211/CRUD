import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BusinessList from "./components/BusinessList";
import BusinessForm from "./components/BusinessForm";
import BusinessProfile from "./components/BusinessProfile";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const handleBusinessUpdated = () => {
    setSelectedBusiness(null);
  };

  return (
    <Router>
    <br/>
    <br/>
    <h1 style={{textAlign: "center"}}>Directory Management System </h1>
      <div className="App">
      <ToastContainer position="top-right" autoClose={3000} />
        {/* <BusinessDashboard/> */}
        <Routes>
          <Route path="/" element={<BusinessList onEdit={setSelectedBusiness} />} />
          <Route path="/add-business" element={<BusinessForm selectedBusiness={selectedBusiness} onBusinessUpdated={handleBusinessUpdated} />} />
          <Route path="/edit-business" element={<BusinessForm selectedBusiness={selectedBusiness} onBusinessUpdated={handleBusinessUpdated} />} />
          <Route path="/business/:id" element={<BusinessProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

