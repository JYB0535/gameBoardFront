import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Login } from "../type";
import { Button, selectClasses, Snackbar, Stack, TextField } from "@mui/material";
import { getAuthToken, login } from "../api/userApi";
import { useAuthStore } from "../auth";

export default function Login() {
  const navigate = useNavigate();
  const {userLogin} = useAuthStore();

  const [user, setUser] = useState<Login>({
    username: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
  const handleLogin = async () => {
    try {
      const token = await getAuthToken(user);
      if (token) {
        sessionStorage.setItem("jwt", token);
        userLogin();
        navigate("/");
      } else {
        alert("로그인에 실패했습니다: 토큰을 받지 못했습니다.");
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        console.error("Login error:", error.response);
        alert(error.response.data);
      } else {
        alert("로그인 중 알 수 없는 오류가 발생했습니다.");
        console.error(error);
      }
    }
  };

  return (
    <>
      <Stack spacing={2} mt={2} alignItems="center">
        <TextField label="ID" name="username" onChange={handleChange} />
        <TextField label="PW" name="password" onChange={handleChange} />
        <Button color="primary" onClick={handleLogin}>
          로그인
        </Button>
        <button type="button" onClick={() => navigate("/signUp")}>
          회원가입
        </button>
        <Snackbar
          //  open={toastOpen}
          autoHideDuration={3000}
          // onClose={() => setToastOpen(false)}
          message="로그인 실패"
        />
      </Stack>
    </>
  );
}
