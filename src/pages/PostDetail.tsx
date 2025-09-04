// PostDetail.tsx
import { useParams } from "react-router-dom";

const dummyPosts = [
  { id: 1, title: "첫 번째 글", author: "유저1", content: "첫 번째 내용" },
  { id: 2, title: "두 번째 글", author: "유저2", content: "두 번째 내용" },
  { id: 3, title: "세 번째 글", author: "유저3", content: "세 번째 내용" },
];

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const post = dummyPosts.find((p) => p.id === Number(id));

  if (!post) return <h2>해당 글을 찾을 수 없습니다.</h2>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>작성자: {post.author}</p>
      <p>{post.content}</p>
    </div>
  );
}