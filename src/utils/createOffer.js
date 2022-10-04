import axios from "axios";

const url = "https://home-made.onrender.com/offers"

  export const create_offer = async (formData) => {
    //Axios does this automatically
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
  };
    try {

      axios.post('https://home-made.onrender.com/offers', formData)
        .then(response => {

          return JSON.parse(response);
        });
      
    } catch (error) {
      return { error };
    }
  };

