import axios from "axios";

const API_URL = " http://localhost:3000/posts";
export const newpost = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (error) {
    console.log("error while calling newpost api", error.message);
  }
};
export const updatepost = async (data, id) => {
  try {
    return await axios.put(`${API_URL}/${id}`, data);
  } catch (error) {
    console.log("error while calling newpost api", error.message);
  }
};
export const getposts = async () => {
  // id = id || '';
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log("Error while calling getUsers api ", error);
  }
};
export const getpost = async (id) => {
  // id = id || '';
  try {
    return await axios.get(`${API_URL}/${id}`);
  } catch (error) {
    console.log("Error while calling getUsers api ", error);
  }
};
export const deletepost = async (id) => {
  // id = id || '';
  try {
    return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log("Error while calling getUsers api ", error);
  }
};
export const newlikepost = async (data) => {
  try {
    const response = await axios.patch(API_URL, { ...data, likes: 0 });
    return response.data;
  } catch (error) {
    console.log("error while calling newpost api", error.message);
  }
};
