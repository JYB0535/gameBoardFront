import axios from "axios";
import type { Post } from "../type";
const BASE_URL = import.meta.env.VITE_API_URL;

export const getData = async (): Promise<Post[]> => {
  const response = await axios.get(`${BASE_URL}/getPost`);
  return response.data;
};

export const addPost = async (post: Post): Promise<Post> => {
  const formData = new FormData();
  formData.append("name", post.name);
  formData.append("date", post.date);
  formData.append("postName", post.postName);
  formData.append("view", String(post.view)); // 숫자는 문자열로 변환
  formData.append("contents", post.contents);
  if (post.img) formData.append("image", post.img); // 이미지 포함

  const response = await axios.post(`${BASE_URL}/postPage`, formData);
  return response.data;

};



// const getPostDummy = [
//     {
//         id: 1,
//         name: 'abc',
//         date: 2023,
//         postName: 'abc의 글입니다',
//         view: 23
//     },
//     {
//         id: 2,
//         name: 'bcd',
//         date: 2024,
//         postName: 'bcd의 글입니다',
//         view: 7000
//     },
//     {
//         id: 3,
//         name: 'cde',
//         date: 2025,
//         postName: 'cde의 글입니다',
//         view: 100000
//     },
// ]
//return Promise.resolve(getPostDummy);
