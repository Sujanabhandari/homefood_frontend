import axios from "axios";

export const getUser = async (token) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/me`, {
      headers: { Authorization: token }
    });
    return { data };
  } catch (error) {
    return { error };
  }
};

export const registerUser = async (formData) => {
    console.log("Create User", formData)
    try {
      console.log("Hello From Register")
      const response = await axios.post('http://localhost:3000/signup', formData)
    return response;
      
    } catch (error) {
      return { error };
    }
  };


export const loginUser = async (formData) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/signin`,
      formData
    );
    return response;
  } catch (error) {
    return { error };
  }
};
