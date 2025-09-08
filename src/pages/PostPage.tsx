import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import PostDialogContent from "./PostDialogContent";
import type { Post, User } from "../type";
import { addPost } from "../api/postApi";
import { userInformation } from "../api/userApi";
import { useAuthStore } from "../auth";

// import { useState } from "react";
// import { Post } from "../type";

type Postprops = {
  callback: () => void;
};

export default function PostPage({ callback }: Postprops) {
  const { isAuthenticated, userLogout } = useAuthStore();
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState<Post>({
    nickname: "",
    date: "",
    postName: "",
    //view: 0,
    contents: "",
    img: "",
  });
  const [userDto, setUserDto] = useState<User>();

  useEffect(() => {
    userInformation().then((res) => {
      setUserDto(res);
    });
  }, []);

  useEffect(() => {
    if (!userDto) return;
    const nickname = userDto.nickname;
    const today = new Date(); // 현재 날짜와 시간을 가진 Date 객체 생성

    // 연도(YYYY)를 가져옵니다.
    const year = today.getFullYear();

    // 월(MM)을 가져옵니다.
    // getMonth()는 0부터 시작하므로 1을 더해 줍니다.
    // padStart(2, '0')를 사용해 항상 두 자리 숫자로 만듭니다. (예: 1 -> '01')
    const month = (today.getMonth() + 1).toString().padStart(2, "0");

    // 일(DD)을 가져옵니다.
    // padStart(2, '0')를 사용해 항상 두 자리 숫자로 만듭니다. (예: 5 -> '05')
    const day = today.getDate().toString().padStart(2, "0");

    // 위에서 얻은 연도, 월, 일을 조합해 'YYYY-MM-DD' 형식의 문자열을 만듭니다.
    const formattedDate = `${year}-${month}-${day}`;

    setPost({ ...post, nickname: nickname, date: formattedDate });
  }, [userDto]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setPost({ ...post, [name]: value });
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleSave = async () => {
    console.log("저장 버튼 클릭됐다.");
    await addPost(post);

    setPost({
      nickname: "",
      date: "",
      postName: "",
      //view: 0,
      contents: "",
      img: "",
    });

    handleClose();

    callback();
  };

  return (
    <>
    {isAuthenticated ? ( 
      <Button onClick={handleOpen}>글쓰기</Button>) : (
            <></>
    )}
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>글쓰기</DialogTitle>
        <DialogContent>
          <PostDialogContent post={post} handleChange={handleChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave}>저장</Button>
          <Button onClick={handleClose}>닫기</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
