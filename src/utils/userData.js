import axios from "axios";

const baseUrl = 'https://home-made.onrender.com'

export const getUser = async (token) => {
  try {
    const { data } = await axios.get(`${baseUrl}/me`, {
      headers: { Authorization: token }
    });
    return { data };
  } catch (error) {
    return { error };
  }
};

export const registerUser = async (formData) => {
  const response = await axios.post(`${baseUrl}/signup`, formData)
  return response;

};

export const getUserByID = async () => {
  try {
    const response = await axios.get(`${baseUrl}/users/:id`)
    return response;
  } catch (error) {
    return { error };
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await axios.post(
      `${baseUrl}/signin`,
      formData
    );
    return response;
  } catch (error) {
    return { error };
  }
};
