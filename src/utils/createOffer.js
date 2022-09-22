import axios from "axios";

const url = "http://localhost:3000/offers"

  export const create_offer = async (formData) => {
    console.log("Create Offer", formData)
    //Axios does this automatically
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
  };
    try {
      console.log("Hello From Register")
      axios.post('http://localhost:3000/offers', formData)
        .then(response => {
          console.log("here", response);
          return JSON.parse(response);
        });
      
    } catch (error) {
      return { error };
    }
  };

