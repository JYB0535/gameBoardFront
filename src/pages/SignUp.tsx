import { useState } from "react";
import { signUp } from "../api/userApi";

type SignUpDto = {
  username: string;
  password: string;
  nickname: string;
  email: string;
  role: string;
};

const SignUp = () => {
  const [signUpDto, setSignUpDto] = useState<SignUpDto>({
    username: "",
    password: "",
    nickname: "",
    email: "",
    role: "USER",
  });

  /**
   * 인풋 태그에 값이 변경될 때
   * @param e
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpDto((prev) => ({ ...prev, [name]: value }));
  };

  /**
   * 회원가입버튼 눌렀을 때 호출하는 함수
   * @param e
   */
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    signUp(signUpDto);

    // e.preventDefault();
    // try {
    //   const res = await fetch("http://localhost:8080", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });
    //   const result = await res.json();
    //   if (result.success) {
    //     alert("회원가입 성공!");
    //   } else {
    //     alert("회원가입 실패: " + result.message);
    //   }
    // } catch (err) {
    //   console.error(err);
    //   alert("서버 오류");
    // }
  };

  return (
    // <form
    //   onSubmit={(e) => {
    //     handleSubmit(e);
    //   }}
    //   style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    // >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        gap: "10px",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          name="username"
          type="text"
          placeholder="ID"
          onChange={(e) => {
            handleChange(e);
          }}
          style={{ padding: "8px", flex: 1 }}
        />
        <button type="button">중복 확인</button>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          name="nickname"
          type="text"
          placeholder="사용자 이름"
          onChange={(e) => {
            handleChange(e);
          }}
          style={{ padding: "8px", flex: 1 }}
        />
        <button type="button">중복 확인</button>
      </div>
      <input
        name="password"
        type="password"
        placeholder="비밀번호"
        onChange={(e) => {
          handleChange(e);
        }}
        style={{ padding: "8px" }}
      />
      <input
        name="email"
        type="email"
        placeholder="이메일"
        onChange={(e) => {
          handleChange(e);
        }}
        style={{ padding: "8px" }}
      />
      <button
        type="submit"
        onClick={(e) => {
          handleSubmit(e);
        }}
        style={{ marginTop: "10px" }}
      >
        회원가입
      </button>
    </div>
    // </form>
  );
};

export default SignUp;
