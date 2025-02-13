import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBusinessById } from "../services/apiService";
import { Table, Container, Spinner } from "react-bootstrap";

const BusinessProfile = () => {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    const fetchBusiness = async () => {
      const data = await getBusinessById(id);
      setBusiness(data);
    };
    fetchBusiness();
  }, [id]);

  if (!business) 
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading...</p>
      </div>
    );

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">{business.name}</h2>
      <Table striped bordered hover responsive className="shadow">
        <tbody>
          <tr>
            <th>Category</th>
            <td>{business.category}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{business.address}</td>
          </tr>
          <tr>
            <th>City</th>
            <td>{business.city}</td>
          </tr>
          <tr>
            <th>State</th>
            <td>{business.state}</td>
          </tr>
          <tr>
            <th>Zip Code</th>
            <td>{business.zipCode}</td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td>{business.phoneNumber}</td>
          </tr>
          <tr>
            <th>Website</th>
            <td>
              <a href={business.website} target="_blank" rel="noopener noreferrer">
                {business.website}
              </a>
            </td>
          </tr>
          <tr>
            <th>Rating</th>
            <td>{business.rating}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default BusinessProfile;
