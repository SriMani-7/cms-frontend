import axios from "axios";

// const API_URL = "http://localhost:8888/api/faculty";
const API_URL = "http://localhost:3000/faculty"

export const fetchFaculty = async () => {
  return axios.get(API_URL);
};

export const createFaculty = async (department) => {
  try {
    let res = await axios.post(API_URL, department);
    return res;
  } catch (e) {
    console.error("while creating faculty", e);
  }
};