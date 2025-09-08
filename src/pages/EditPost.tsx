import { useState } from "react";
import type { Post } from "../type";
import { updatePost } from "../api/postApi";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import PostDialogContent from "./PostDialogContent";

type EditPostprops = {
  postData: Post;
  updateCallback: () => void;
};

export default function EditPost({ postData, updateCallback }: EditPostprops) {
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState<Post>({
    nickname: "",
    date: "",
    postName: "",
    contents: "",
    img: "",
  });

  const handleOpen = () => {
    setPost({
      id: postData.id,
      nickname: postData.nickname,
      date: postData.date,
      postName: postData.postName,
      //view: postData.view,
      contents: postData.contents,
      img: postData.img,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    await updatePost(post);
    //업데이트 되고 나면 로드카데이터 호출;
    //car list reload
    updateCallback();

    setPost({
      id: 0,
      nickname: "",
      date: "",
      postName: "",
      contents: "",
      img: "",
    });
    handleClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //매개변수로 들어오는 이벤트 객체를 가능하면 어떤 타입의 이벤트라고 명확하게 해주는게 좋다
    const value = e.target.value;
    const name = e.target.name;
    setPost({ ...post, [name]: value });
  };

  return (
    <>
      <Button onClick={handleOpen}>수정</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>수정</DialogTitle>
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
