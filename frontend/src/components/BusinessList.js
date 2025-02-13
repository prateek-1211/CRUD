import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBusinesses, deleteBusiness } from "../services/apiService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BusinessList = ({ onEdit }) => {
  const [businesses, setBusinesses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const navigate = useNavigate();

  useEffect(() => {
    fetchBusinesses();
  }, []);

  const fetchBusinesses = async () => {
    try {
      const data = await getBusinesses();
      setBusinesses(data || []);
    } catch (error) {
      toast.error("Failed to fetch businesses");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBusiness(id);
      toast.success("Business deleted successfully!");
      fetchBusinesses();
    } catch (error) {
      toast.error("Failed to delete business");
    }
  };

  const handleSearch = async (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query.trim() === "") {
      fetchBusinesses();
    } else {
      const results = businesses.filter(
        (business) =>
          business.name.toLowerCase().includes(query) ||
          business.city.toLowerCase().includes(query)
      );
      setBusinesses(results);
    }
  };
  

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const sortedBusinesses = [...businesses].sort((a, b) => {
    if (!sortField) return 0;
    const valueA = a[sortField].toLowerCase();
    const valueB = b[sortField].toLowerCase();
    return sortOrder === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
  });

  const totalRecords = sortedBusinesses.length;
  const totalPages = Math.ceil(totalRecords / pageSize);
  const paginatedBusinesses = sortedBusinesses.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="container mt-4">
      <input
        type="text"
        placeholder="Search Business..."
        value={searchQuery}
        onChange={handleSearch}
        className="form-control mb-3"
      />
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>Business Name {sortField === "name" && (sortOrder === "asc" ? "↑" : "↓")}</th>
            <th>Address</th>
            <th onClick={() => handleSort("city")}>City {sortField === "city" && (sortOrder === "asc" ? "↑" : "↓")}</th>
            <th>State</th>
            <th>Contact</th>
            <th>ZipCode</th>
            {/* <th>Website</th> */}
            <th>Category</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedBusinesses.length === 0 ? (
            <tr><td colSpan="3" className="text-center">No businesses found.</td></tr>
          ) : (
            paginatedBusinesses.map((business) => (
              <tr key={business.businessID}>
                <td onClick={() => navigate(`/business/${business.businessID}`)} style={{ cursor: "pointer", color: "blue" }}>{business.name}</td>
                <td>{business.address}</td>
                <td>{business.city}</td>
                <td>{business.state}</td>
                <td>{business.phoneNumber}</td>
                <td>{business.zipCode}</td>
                {/* <td>{business.website}</td> */}
                <td>{business.category}</td>
                <td>{business.rating}</td>
                <td>
                  <button className="btn btn-warning me-2" onClick={() => { navigate("/edit-business"); onEdit(business); }}>Edit</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(business.businessID)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="pagination-controls">
        <span>Showing {(currentPage - 1) * pageSize + 1}-{Math.min(currentPage * pageSize, totalRecords)} of {totalRecords} records</span>
        <div>
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
          {[...Array(totalPages)].map((_, index) => (
            <button key={index + 1} className={currentPage === index + 1 ? "active" : ""} onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
          ))}
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </div>
      </div>
      <label>Records per page: 
        <select value={pageSize} onChange={(e) => { setPageSize(Number(e.target.value)); setCurrentPage(1); }}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </label>
      <button className="btn btn-primary mt-3 w-100" onClick={() => navigate("/add-business")}>Add Business</button>
    </div>
  );
};

export default BusinessList;


