import axios from "axios";

const Api = () => {
  return axios.create({
    baseURL: "https://react-project-1s4c.onrender.com",
  });
};

export { Api };
