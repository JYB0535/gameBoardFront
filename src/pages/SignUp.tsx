import { useState } from "react";
import { signUp, checkUsernameExists, checkNicknameExists } from "../api/userApi";

type SignUpDto = {
  id: string;
  username: string;
  password: string;
  nickname: string;
  email: string;
  role: string;
};

const SignUp = () => {
  const [signUpDto, setSignUpDto] = useState<SignUpDto>({
    id: "",
    username: "",
    password: "",
    nickname: "",
    email: "",
    role: "USER",
  });

  const [usernameValid, setUsernameValid] = useState<boolean | null>(null);
  const [nicknameValid, setNicknameValid] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpDto((prev) => ({ ...prev, [name]: value }));
    if (name === "username") setUsernameValid(null);
    if (name === "nickname") setNicknameValid(null);
  };

  const handleUsernameCheck = async () => {
    const exists = await checkUsernameExists(signUpDto.username);
    setUsernameValid(!exists);
    alert(exists ? "이미 사용 중인 ID입니다." : "사용 가능한 ID입니다.");
  };

  const handleNicknameCheck = async () => {
    const exists = await checkNicknameExists(signUpDto.nickname);
    setNicknameValid(!exists);
    alert(exists ? "이미 사용 중인 닉네임입니다." : "사용 가능한 닉네임입니다.");
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { username, password, nickname, email } = signUpDto;
    if (!username || !password || !nickname || !email) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    if (usernameValid !== true || nicknameValid !== true) {
      alert("중복 확인을 먼저 해주세요.");
      return;
    }

    try {
      await signUp(signUpDto);
      alert("회원가입 완료!");
    } catch (err) {
      console.error(err);
      alert("회원가입 실패");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "300px", gap: "10px" }}>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          name="username"
          type="text"
          placeholder="ID"
          onChange={handleChange}
          value={signUpDto.username}
          style={{ padding: "8px",flex: 1, }}
        />
        <button type="button" onClick={handleUsernameCheck}>중복 확인</button>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          name="nickname"
          type="text"
          placeholder="사용자 이름"
          onChange={handleChange}
          value={signUpDto.nickname}
          style={{ padding: "8px", flex: 1, }}
        />
        <button type="button" onClick={handleNicknameCheck}>중복 확인</button>
      </div>
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={handleChange}
          value={signUpDto.password}
          style={{ padding: "8px", }}
      />
        <input
          name="email"
          type="email"
          placeholder="이메일"
          onChange={handleChange}
          value={signUpDto.email}
          style={{ padding: "8px", }}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        style={{ marginTop: "10px" }}
      >
        회원가입
      </button>
    </div>
  );
};

export default SignUp;
