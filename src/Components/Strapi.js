import axios from "axios";
const API = "http://localhost:1337";

export const fatch_data_doctor = async () => {
  try {
    const respone = await axios.get(`${API}/api/doctors`);
    // console.log(respone.data);
    return respone.data;
  } catch (error) {
    console.log(error.message);
  }
};
