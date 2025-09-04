// PostDetail.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Post } from "../type";
import { getData } from "../api/postApi";

// const dummyPosts = [
//   { id: 1,
//     title: "첫 번째 글",
//     author: "유저1",
//     content: "첫 번째 내용",
//     imageUrl: " ",
//     comments: [
//       { id: 1, author: "댓글러1", text: "좋은 글이에요!" },
//       { id: 2, author: "댓글러2", text: "감사합니다!" },
//     ]
//   },
//   { id: 2,
//     title: "두 번째 글",
//     author: "유저2",
//     content: "두 번째 내용",
//     imageUrl: " ",
//     comments: [
//       { id: 3, author: "댓글러3", text: "좋은 글이에요!" },
//       { id: 4, author: "댓글러4", text: "감사합니다!" },
//     ]
//   },
//   { id: 3,
//     title: "세 번째 글",
//     author: "유저3",
//     content: "세 번째 내용",
//     imageUrl:" ",
//     comments: [
//       { id: 5, author: "댓글러5", text: "좋은 글이에요!" },
//       { id: 6, author: "댓글러6", text: "감사합니다!" },
//     ]
//   }
// ];

export default function PostDetail() {
  const [data, setData] = useState<Post[]>([]);

  const { id } = useParams<{ id: string }>();

  const loadPostData = () => {
    getData()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadPostData();
  }, []);

  const post = data.find((p) => p.id === Number(id));

  if (!post) return <h2>해당 글을 찾을 수 없습니다.</h2>;

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h5 style={{ maxWidth: 600 }}>{post.postName}</h5>
      <h5>작성자: {post.name}</h5>
      <img
        src={post.img}
        alt={`${post.postName} 이미지`}
        style={{ width: "100%", height: "auto", marginBottom: 20 }}
      />
      <p style={{ width: "400px", height: "400px" }}>{post.contents}</p>
    </div>
  );
}
