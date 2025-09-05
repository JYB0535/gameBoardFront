
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Post } from "../type";
import { deletePost, getData } from "../api/postApi";
import { TextField } from "@mui/material";


export default function PostDetail() {
  const [data, setData] = useState<Post[]>([]);
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const loadPostData = () => {
    getData()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadPostData();
  }, []);

  const handleDelete = async (id: number) => {
    await deletePost(id);
    setData(data);
    navigate(`/`);
  };

  const post = data.find((p) => p.id === Number(id));

  if (!post) return <h2>해당 글을 찾을 수 없습니다.</h2>;


  
return (
  <>
    {/* 🧾 게시판 정보 헤더 - 박스 바깥 */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxHeight: "1000px",
        marginBottom: "10px",
        fontSize: "14px",
        color: "#888",
        width: "700px",
        margin: "0 auto",
        fontFamily: "'Noto Sans KR', sans-serif",
      }}
    >
      <div>{post.Name || "닉네임:"}</div>
      <div>{post.date || "2025-09-05 08:36"}</div>
      <div>조회: {post.views}</div>
    </div>

    {/* 📦 박스 본체 */}
    <div
      style={{
        width: "800px",
        minHeight: "500px",
        marginTop: "10px",
        padding: "30px",
        border: "solid #ddd",
        borderRadius: "4px",
        fontFamily: "'Noto Sans KR', sans-serif",
        backgroundColor: "white",
        margin: "0 auto",
      }}
    >
      {/* 글 제목 */}
      <h2 style={{ fontSize: "20px", marginBottom: "20px", color: "#222" }}>
        {post.boardName || "글 제목"}
      </h2>

      {/* 본문 이미지 */}
      {post.img && (
        <img
          src={post.img}
          alt="본문 이미지"
          style={{
            width: "100%",
            height: "500px",
            marginBottom: "60px",
            borderRadius: "10px",
            objectFit: "cover",
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
          marginBottom: "180px",
        }}
      >
        {post.contents || "게시글 본문 내용"}
      </div>

      {/* 댓글 입력 영역 */}
      <div
        style={{
          marginBottom: "30px",
        }}
      >
        <TextField label="댓글을 입력해주세요." />
        <button style={{ marginLeft: "", }}>등록</button>
      </div>
    </div>

    {/* 댓글 목록 */}
    <div
      style={{
        borderTop: "2px solid #333",
        paddingTop: "20px",
        width: "800px",
        margin: "0 auto",
      }}
    >
      <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>
        댓글 ({post.comments?.length || 0})
      </h3>

      {post.comments?.map((comment, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <Comment comment={comment} />
          
        </div>
      ))}

      {/* 버튼 영역 */}
      <div style={{ marginTop: "20px" }}>
        <button style={{ marginRight: "10px" }}>수정</button>
        <button onClick={() => handleDelete(post.id)} style={{ marginRight: "10px" }}>삭제</button>
        <button>목록</button>

      </div>
    </div>
  </>
);
}