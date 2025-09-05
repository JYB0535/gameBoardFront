import { useState } from "react";

import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import PostDialogContent from "./PostDialogContent";
import type { Post } from "../type";
import { addPost, getData, } from "../api/postApi";


// import { useState } from "react";
// import { Post } from "../type";


// export default function PostPage() {
//     const [open, setOpen] = useState(false);
//     const[post, setPost] = useState<Post>({
//         name: '',
//         date: '',
//         postName: '',
//         view: 0,
//         contents: '',
//         img: ''
//     });

//     return(
//         "gljj"
//     );

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const name = e.target.name;
        setPost({...post, [name]: value})
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSave = async () => {
        console.log("저장 버튼 클릭됐다.");
        await addPost(post);
        getData();

        setPost({
            name: '',
            date: '',
            postName: '',
            view: 0,
            contents: '',
            img: ''
        });
        handleClose();
    }
    
    return(
        <>
           
            <Button onClick={handleOpen}>글쓰기</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>글쓰기</DialogTitle>
                <DialogContent>
                    <PostDialogContent
                        post={post}
                        handleChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSave}>저장</Button>
                    <Button onClick={handleClose}>닫기</Button>
                </DialogActions>
            </Dialog>
        </>
    )


}
