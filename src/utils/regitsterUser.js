import axios from "axios";

export const getUser = async (token) => {
  try {
    const { data } = await axios.get(`https://home-made.onrender.com/me`, {
      headers: { Authorization: token }
    });
    return { data };
  } catch (error) {
    return { error };
  }
};

export const registerUser = async (formData) => {
  const response = await axios.post('https://home-made.onrender.com/signup', formData)
  return response;

};

export const getUserByID = async () => {
  try {
    const response = await axios.get(`https://home-made.onrender.com/users/:id`)
    return response;
  } catch (error) {
    return { error };
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await axios.post(
      `https://home-made.onrender.com/signin`,
      formData
    );
    return response;
  } catch (error) {
    return { error };
  }
};
