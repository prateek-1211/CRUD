import axios from "axios";

const API_URL = "http://localhost:5000/api/business/";

export const getBusinesses = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching businesses:", error);
    return [];
  }
};

export const createBusiness = async (business) => {
  try {
    const response = await axios.post(`${API_URL}create`, business);
    return response.data;
  } catch (error) {
    console.error("Error adding business:", error);
    throw error;
  }
};

export const updateBusiness = async (id, business) => {
  try {
    const response = await axios.put(`${API_URL}${id}`, business);
    return response.data;
  } catch (error) {
    console.error("Error updating business:", error);
    throw error;
  }
};

export const deleteBusiness = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting business:", error);
    throw error;
  }
};

export const getBusinessById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching business by ID:", error);
    return null;
  }
};

export const searchBusiness = async (query) => {
  try {
    const response = await axios.get(`${API_URL}search/${query}`);
    return response.data;
  } catch (error) {
    console.error("Error searching businesses:", error);
    return [];
  }
};
