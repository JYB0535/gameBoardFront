import axios from "axios";
import type { Comment } from "../type";

export const fetchComments = async (postId: number): Promise<Comment[]> => {
  const res = await axios.get(`/api/comment/list?postId=${postId}`);
  return res.data;
};

export const addComment = async (comment: Omit<Comment, "id" | "date">) => {
  const res = await axios.post("/comment", comment);
  return res.data;
};
