import axios from "axios";

const url = "http://localhost:3000/offers"

// export const getUser = async (token) => {
  
//   try {
//     const { data } = await axios.get(`${process.env.BLOG_API}/me`, {
//       headers: { Authorization: token }
//     });
//     return { data };
//   } catch (error) {
//     return { error };
//   }
// };

  export const create_offer = async (formData) => {
    console.log("Create Offer", formData)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
  };
    try {
      console.log("Hello From Register")
      axios.post('http://localhost:3000/offers', requestOptions)
        .then(response => {
          console.log("here", response);
          return JSON.parse(response);
        });
      
    } catch (error) {
      return { error };
    }
  };


// export const loginUser = async (formData) => {
//   try {
//     const { data } = await axios.post(
//       `${url}/signin`,
//       formData
//     );
//     return { data };
//   } catch (error) {
//     return { error };
//   }
// };
