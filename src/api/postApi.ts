import axios, { type AxiosRequestConfig } from "axios";
import type { Post } from "../type";
//import { getAxiosConfig } from "../util/header";

const getAxiosConfig = (): AxiosRequestConfig => {//매개변수 없고 반환타입은 악시오스
    //얘는 악시오스 설정 객체를 반환하면 된다 그래서 객체 리턴
    const token = sessionStorage.getItem('jwt'); //토큰 위치 

    return {
        headers: {
            'Authorization': token
        }
}    
};

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
