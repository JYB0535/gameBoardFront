import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Login } from "../type";
import { Button, Snackbar, Stack, TextField } from "@mui/material";
import { login } from "../api/userApi";
import { useAuthStore } from "../store/auth";

export default function Login() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuthStore();

  const [user, setUser] = useState<Login>({
    username: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // const handleLogin = () => {
  //     GetAuthToken(user)
  //     .then((token) => {
  //         if(token !== null) {
  //             sessionStorage.setItem("jwt", token);
  //             login();
  //             navigate("/");
  //         }

  //     })
  //     .catch((err) => {
  //         console.log(err);
  //         setToastOpen(true);
  //     });
  // };

  const handleLogin = (e) => {
    login(user)
      .then(() => {
        setIsAuthenticated(true);
        navigate("/");
      })
      .catch((error) => {
        alert(error.response.data);
      });
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
