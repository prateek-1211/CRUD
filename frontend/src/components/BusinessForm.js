import React, { useState, useEffect } from "react";
import { createBusiness, updateBusiness } from "../services/apiService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const BusinessForm = ({ selectedBusiness, onBusinessUpdated }) => {
  const [business, setBusiness] = useState({
    name: "",
    category: "",
    Address: "",
    City: "",
    State: "",
    ZipCode: "",
    PhoneNumber: "",
    Website: "",
    Rating: ""
  });

  useEffect(() => {
    if (selectedBusiness) {
      setBusiness(selectedBusiness);
    } else {
      setBusiness({
        name: "",
        category: "",
        Address: "",
        City: "",
        State: "",
        ZipCode: "",
        PhoneNumber: "",
        Website: "",
        Rating: ""
      });
    }
  }, [selectedBusiness]);

  const handleChange = (e) => {
    setBusiness({ ...business, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (business.businessID) {
      await updateBusiness(business.businessID, business);
      toast.success("Business updated successfully!");
    } else {
      await createBusiness(business);
      toast.success("Business added successfully!");
    }
    onBusinessUpdated();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">{business.businessID ? "Edit Business" : "Add New Business"}</h2>
      <form className="border p-4 rounded shadow bg-light" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" name="name" placeholder="Business Name" required className="form-control" onChange={handleChange} value={business.name} />
        </div>
        <div className="mb-3">
          <input type="text" name="category" placeholder="Category" required className="form-control" onChange={handleChange} value={business.category} />
        </div>
        <div className="mb-3">
          <input type="text" name="Address" placeholder="Address" required className="form-control" onChange={handleChange} value={business.Address} />
        </div>
        <div className="mb-3">
          <input type="text" name="City" placeholder="City" required className="form-control" onChange={handleChange} value={business.City} />
        </div>
        <div className="mb-3">
          <input type="text" name="State" placeholder="State" required className="form-control" onChange={handleChange} value={business.State} />
        </div>
        <div className="mb-3">
          <input type="text" name="ZipCode" placeholder="Zip Code" required className="form-control" onChange={handleChange} value={business.ZipCode} />
        </div>
        <div className="mb-3">
          <input type="text" name="PhoneNumber" placeholder="Phone Number" required className="form-control" onChange={handleChange} value={business.PhoneNumber} />
        </div>
        <div className="mb-3">
          <input type="text" name="Website" placeholder="Website" required className="form-control" onChange={handleChange} value={business.Website} />
        </div>
        <div className="mb-3">
          <input type="text" name="Rating" placeholder="Rating" required className="form-control" onChange={handleChange} value={business.Rating} />
        </div>
        <button type="submit" className="btn btn-success w-100">{business.businessID ? "Update" : "Save"}</button>
      </form>
    </div>
  );
};

export default BusinessForm;

