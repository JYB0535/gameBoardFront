import axios, { type AxiosRequestConfig } from "axios";
import type { Login, User } from "../type";
//import { getAxiosConfig } from "../util/header";
//import { useAuthStore } from "../store/auth";
const BASE_URL = import.meta.env.VITE_API_URL;

const getAxiosConfig = (): AxiosRequestConfig => {//매개변수 없고 반환타입은 악시오스
    //얘는 악시오스 설정 객체를 반환하면 된다 그래서 객체 리턴
    const token = sessionStorage.getItem('jwt'); //토큰 위치 

    return {
        headers: {
            'Authorization': token
        }
}    
};


export const signUp = async (user: User): Promise<User> => {
  const response = await axios.post(`${BASE_URL}/user/signUp`, user);
  return response.data;
};

export async function checkUsernameExists(username: string): Promise<boolean> {
  const res = await fetch(`${BASE_URL}/user/check-username?username=${username}`);
  const data = await res.json();
  return data.exists;
}

export async function checkNicknameExists(nickname: string): Promise<boolean> {
  const res = await fetch(`${BASE_URL}/user/check-nickname?nickname=${nickname}`);
  const data = await res.json();
  return data.exists;
}

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

