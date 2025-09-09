import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { Post, User } from "../type";
import { deletePost, getPost, selectPost } from "../api/postApi";
import { Button, TextField } from "@mui/material";
import EditPost from "./EditPost";
import { useAuthStore } from "../auth";
import { userInformation } from "../api/userApi";
import CommentSection from "../component/CommentSection";

export default function PostDetail() {
  const [post, setPost] = useState<Post>({
    contents: "",
    date: "",
    img: "",
    nickname: "",
    postName: "",
  });
  
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // const { isAuthenticated, setIsAuthenticated } = useAuthStore();
  const [isEqualNickname, seIsEqualNickname] = useState<boolean>(false);

  const [userDto, setUserDto] = useState<User>();

  const getUserInformation = async () => {
    try {
      const res = await userInformation();
      setUserDto(res);
    } catch (e) {
      console.log("데이터를 제대로 못 받아왔습니다.");
    }
  };

  const getPostData = () => {
    if (id) {
      getPost(id)
        .then((res) => setPost(res))
        .catch((err) => console.log(err));
    } else {
      alert("글번호가 없습니다.");
    }
  };

  // 1. 처음 실행하면 데이터를 로드하고, 게시글 정보를 가져온다.
  useEffect(() => {
    getPostData();
  }, []);

  // 2. 셋 포스트 작동 후 유저 정보 가져옴
  useEffect(() => {
    getUserInformation();
  }, [post]);

  // 3. 유저 정보 변경 후 작동
  useEffect(() => {
    if (userDto) {
      seIsEqualNickname(userDto.nickname === post.nickname);
    } else {
      seIsEqualNickname(false);
    }
  }, [userDto]);

  useEffect(() => {}, []);

  const handleDelete = async (id: number) => {
    await deletePost(id);
    setPost(post);
    navigate(`/`);
  };

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
          width: "1300px",
          height: "900px",
          marginBottom: "100px",
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
            marginBottom: "500px",
          }}
        >
          {post.contents || "게시글 본문 내용"}
        </div>
          <div style={{ marginTop: "40px" }}>
          <CommentSection id={Number(id)} />
        </div>
        {/* 댓글 입력 영역 */}
      </div>


      {/* 버튼 영역 */}
      <div style={{ marginTop: "20px" }}>
        {isEqualNickname ? (
          <>
            <EditPost postData={post} updateCallback={getPostData} />

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
