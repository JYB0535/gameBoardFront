// PostList.tsx
import { Link } from "react-router-dom";

const dummyPosts = [
  { id: 1, title: "첫 번째 글", author: "유저1" },
  { id: 2, title: "두 번째 글", author: "유저2" },
  { id: 3, title: "세 번째 글", author: "유저3" },
];

export default function PostList() {
  return (
    <div>
      <h2>게시판</h2>
      <ul>
        {dummyPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              {post.title} - {post.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}