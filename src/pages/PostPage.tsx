import { Box, Divider, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

    const dummyPosts = {
  '1': {
    title: '첫 번째 게시글',
    author: '홍길동',
    date: '2025-09-04',
    content: '이것은 첫 번째 게시글의 내용입니다. 환영합니다!',
  },
  '2': {
    title: '두 번째 게시글',
    author: '김철수',
    date: '2025-09-03',
    content: '두 번째 글입니다. 공략 팁을 공유합니다!',
  },
};

function PostDetail() {
  const { postId } = useParams();
  const post = dummyPosts[postId];

  if (!post) {
    return <Typography>해당 게시글을 찾을 수 없습니다.</Typography>;
  }

  return (
    <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>{post.title}</Typography>
      <Typography variant="subtitle1" color="text.secondary">
        작성자: {post.author} | 작성일: {post.date}
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ whiteSpace: 'pre-line' }}>
        <Typography variant="body1">{post.content}</Typography>
      </Box>
    </Paper>
  );
}

export default PostDetail;
