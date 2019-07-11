import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID cb710f037407aaedb3bdc9e73442a879340bc9f4ae215b89467abd14d9ab52f0"
  }
});
