export type Post = {
  id?: number;
  nickname: string;
  date: string;
  postName: string;
  // view: number;
  contents: string;
  img: string;
  //comments: number;
};

export type User = {
  id?: number;
  username: string;
  password: string;
  nickname: string;
  email: string;
  role: string;
};

export type Login = {
  username: string;
  password: string;
};

export interface Comment {
  id?: number;
  username: string;
  nickname: string;
  date: string;
}