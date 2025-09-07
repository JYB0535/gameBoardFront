import axios from "axios";
import type { Login, User } from "../type";
import { getAxiosConfig } from "../util/header";
const BASE_URL = import.meta.env.VITE_API_URL;

export const signUp = async (user: User): Promise<User> => {
  const response = await axios.post(`${BASE_URL}/user/signUp`, user);
  return response.data;
};

export const login = async (login: Login): Promise<Login> => {
  const response = await axios.post(`${BASE_URL}/user/login`, login);
  return response.data;
};

export const userInformation = async (): Promise<User> => {
  const response = await axios.get(
    `${BASE_URL}/user/authentication`,
    getAxiosConfig()
  );
  return response.data;
};
