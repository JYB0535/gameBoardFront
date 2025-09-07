import { Stack, TextField } from "@mui/material";
import type { Post } from "../type";
import { useEffect } from "react";

type PostDialogContentProps = {
  post: Post;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PostDialogContent({
  post,
  handleChange,
}: PostDialogContentProps) {
  useEffect(() => {}, []);

  return (
    <>
      <Stack spacing={2} marginTop={2}>
        <label>닉네임: {post.nickname}</label>
        <label>날짜: {post.date}</label>
        <TextField
          label="게시물이름"
          placeholder="게시물이름"
          name="postName"
          value={post.postName}
          onChange={handleChange}
        />
        <TextField
          label="내용"
          placeholder="내용"
          name="contents"
          value={post.contents}
          onChange={handleChange}
        />
        {/* <TextField
          label="사진"
          placeholder="사진"
          name="img"
          value={post.img}
          onChange={handleChange}
        /> */}
      </Stack>
    </>
  );
}
