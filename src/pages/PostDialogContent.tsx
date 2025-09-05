import { Stack, TextField} from "@mui/material";
import type { Post } from "../type"

type PostDialogContentProps = {
    post: Post; 
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void

}

export default function PostDialogContent({post, handleChange}: PostDialogContentProps) {
    return (
        <>
        <Stack spacing={2} marginTop={2}>
            <TextField
                label="닉네임"
                placeholder="닉네임"
                name="name"
                value={post.name}
                onChange={handleChange}
            />
            <TextField
                label="날짜"
                placeholder="날짜"
                name="date"
                value={post.date}
                onChange={handleChange}
            />
            <TextField
                label="게시물이름"
                placeholder="게시물이름"
                name="postName"
                value={post.postName}
                onChange={handleChange}
            />
            <TextField
                label="조회수"
                placeholder="조회수"
                name="view"
                value={post.view}
                onChange={handleChange}
            
            />
            <TextField
                label="내용"
                placeholder="내용"
                name="contents"
                value={post.contents}
                onChange={handleChange}
            
            />
            <TextField
                label="사진"
                placeholder="사진"
                name="img"
                value={post.img}
                onChange={handleChange}
            
            />

        </Stack>
        </>
    )

}