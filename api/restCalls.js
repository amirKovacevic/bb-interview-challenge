import axios from "axios";

export const getUser = id =>
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

export const getPosts = id =>
  axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
