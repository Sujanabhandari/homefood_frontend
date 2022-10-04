import axios from "axios";

export const getUser = async (token) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/me`, {
      headers: { Authorization: token }
    });
    console.log("Authorixe", data)
    return { data };
  } catch (error) {
    return { error };
  }
};

  export const registerUser = async (formData) => {
    
   
      console.log("Hello From Register")
      const response = await axios.post('http://localhost:3000/signup', formData)
      console.log("From Register", response)
      return response;

  };

  export const getUserByID = async () => {
    try {
      console.log("Hello From Users")
      const response = await axios.get(`http://localhost:3000/users/:id`)
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
