// import axios from "../../api/axios";

// export const getPosts = async () => {
//   const res = await axios.get("/posts");
//   return res.data;
// };

// export const getPostDetail = async (id) => {
//   const res = await axios.get(`/posts/${id}`);
//   return res.data;
// };

import { mockPost } from "./mock/mockPost";

export const getPosts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPost);
    }, 500);
  });
};

export const getPostDetail = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPost.find(p => p.id === Number(id)));
    }, 500);
  });
};
