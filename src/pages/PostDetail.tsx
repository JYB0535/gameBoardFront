// PostDetail.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Post } from "../type";
import { deletePost, getData } from "../api/postApi";

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
  <div
    style={{
      maxWidth: "100%",
      maxHeight: "100%",
      margin: "40px auto",
      padding: "30px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontFamily: "'Noto Sans KR', sans-serif",
      backgroundColor: "#aaa",
    }}
  >
    {/* 게시판 정보 헤더 */}
    <div style={{ display: "flex", justifyContent: "space-between", maxHeight: "1000px", marginBottom: "10px", fontSize: "14px", color: "#888" }}>
      <div>{post.boardName || "게시판 이름"}</div>
      <div>{post.date || "2025-09-05 08:36"}</div>
      <div>조회: {post.views}</div>
    </div>

    {/* 카테고리 (예: [블래스터]) */}
    <div style={{ fontSize: "14px", color: "#666", marginBottom: "10px" }}>
      [{post.category || "카테고리"}]
    </div>

    {/* 제목 */}
    <h2 style={{ color: "#c00", fontSize: "22px", marginBottom: "20px" }}>
      {post.postName || "게시글 제목"}
    </h2>

    {/* 본문 이미지 */}
    {post.img && (
      <img
        src={post.img}
        alt="본문 이미지"
        style={{
          width: "100%",
          height: "500px",
          marginBottom: "20px",
          borderRadius: "10px",
        }}
      />
    )}

    {/* 본문 내용 */}
    <div
      style={{
        fontSize: "16px",
        lineHeight: "1.7",
        color: "#333",
        whiteSpace: "pre-wrap",
        marginBottom: "30px",
        
      }}
    >
      {post.contents || "게시글 본문 내용"}
    </div>

    {/* 댓글 영역 (선택) */}
    <div style={{ fontSize: "14px", color: "#999", borderTop: "1px solid #eee", paddingTop: "15px" }}>
      댓글을 입력해주세요.({post.comments?.length}) <button>등록</button>
      

      {/*각 버튼 영역 */}
      <button>수정</button>  <button onClick={deletePost}>삭제</button>  <button>목록</button>
      
    </div>
  </div>
);
}
