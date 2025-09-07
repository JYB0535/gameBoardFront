import axios from "axios";
import type { Post } from "../type";
import { getAxiosConfig } from "../util/header";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getData = async (): Promise<Post[]> => {
  const response = await axios.get(`${BASE_URL}/post`, getAxiosConfig());
  return response.data;
};

export const addPost = async (post: Post): Promise<Post> => {
  const response = await axios.post(`${BASE_URL}/post`, post, getAxiosConfig());
  return response.data;
};

export const deletePost = async (id: number): Promise<number> => {
  const response = await axios.delete(
    `${BASE_URL}/post/${id}`,
    getAxiosConfig()
  );
  return response.data;
};

export const updatePost = async (post: Post): Promise<Post> => {
  const response = await axios.put(`${BASE_URL}/post`, post, getAxiosConfig());
  return response.data;
};
