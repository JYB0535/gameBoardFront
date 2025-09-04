export type Post = {
  id?: number;
  name: string;
  date: number;
  postName: string;
  view: number;
  contents: string;
  img: string;
  comments: number;
};

export type User = {
  username: string;
  password: string;
  email: string;
};
