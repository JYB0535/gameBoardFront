import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { Post, User } from "../type";
import { deletePost, getData } from "../api/postApi";
import { Button, TextField } from "@mui/material";
import EditPost from "./EditPost";
import { useAuthStore } from "../store/auth";

export default function PostDetail() {
  const [data, setData] = useState<Post[]>([]);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { isAuthenticated, setIsAuthenticated } = useAuthStore();

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
        {/* 글 제목 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "180px",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              marginBottom: "20px",
              color: "#222",
            }}
          >
            글 제목: {post.postName}
          </h2>

          <div>닉네임:{post.nickname}</div>
          <div>{post.date}</div>
          {/* <div>조회: {post.views}</div> */}
        </div>
      </div>

      {/* 📦 박스 본체 */}
      <div
        style={{
          width: "800px",
          minHeight: "500px",
          marginBottom: "280px",
          padding: "30px",
          border: "solid #ddd",
          borderRadius: "4px",
          fontFamily: "'Noto Sans KR', sans-serif",
          backgroundColor: "white",
          margin: "0 auto",
        }}
      >
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
      </div>

      {/* 댓글 목록 */}

      <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>
        댓글 ({post.comments?.length || 0})
      </h3>

      {post.comments?.length ? (
        post.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))
      ) : (
        <p style={{ color: "#999", fontSize: "14px" }}>
          첫 댓글을 작성해보세요 ✍️
        </p>
      )}
      <div
        style={{
          marginBottom: "30px",
        }}
      >
        <TextField label="댓글을 입력해주세요." />
        <button style={{ marginLeft: "" }}>등록</button>
      </div>
      <h3 style={{ fontSize: "16px", marginBottom: "10px" }}></h3>

      {post.comments?.map((comment, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <Comment comment={comment} />
        </div>
      ))}

      {/* 버튼 영역 */}
      <div style={{ marginTop: "20px" }}>
        {isAuthenticated ? (
          <>
            <EditPost postData={post} loadPostData={loadPostData} />

            <Button
              onClick={() => {
                if (!post.id) {
                  console.log("글 번호가 없습니다.");
                  return;
                }
                handleDelete(post.id);
              }}
              style={{ marginRight: "10px" }}
            >
              삭제
            </Button>
          </>
        ) : (
          <></>
        )}

        <Button component={Link} to="/" style={{ marginRight: "10px" }}>
          목록
        </Button>
      </div>
    </>
  );
}
