// Using the axios library for sending API requests is easier and faster to do.
// This is done by having a base url as shown below and a seperate requests file to make the necessary API requests.

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
