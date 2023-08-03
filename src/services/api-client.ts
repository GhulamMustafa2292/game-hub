import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1cde174cd6794afc97c129ba9ce4100f",
  },
});
