import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/auth";

export default function CommunityLayout() {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore();
  const topButtonStyle = {
    color: "white",
    mx: 3,
    "&:hover": {
      backgroundColor: "#1976d2", // 호버 시 배경색
      color: "#c2c2c2ff", // 호버 시 글자색
    },
  };

  const clickLogoutBtn = () => {
    document.cookie =
      "cookieName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsAuthenticated(false);
  };
  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ mr: 2 }}>
            커뮤니티 게시판
          </Typography>
          <Box sx={{ justifyContent: "center", flexGrow: 1 }}>
            <Button component={Link} to="/" sx={topButtonStyle}>
              홈
            </Button>
            <Button component={Link} to="/freeBoard" sx={topButtonStyle}>
              자유 게시판
            </Button>
            <Button component={Link} to="/community" sx={topButtonStyle}>
              커뮤니티 게시판
            </Button>
            {/* <Button component={Link} to="/info" sx={topButtonStyle}>정보공유 게시판</Button>
                <Button component={Link} to="/fanart" sx={topButtonStyle}>팬아트 게시판</Button>
                <Button component={Link} to="/question" sx={topButtonStyle}>질문 게시판</Button>  */}
          </Box>
          {!isAuthenticated ? (
            <Button component={Link} to="/login" sx={topButtonStyle}>
              로그인
            </Button>
          ) : (
            <Button onClick={clickLogoutBtn} sx={topButtonStyle}>
              로그아웃
            </Button>
          )}
        </Toolbar>
        <img
          src="커뮤니티고양이.jpg"
          alt="화살표 배너"
          style={{ width: "100%", height: "400px" }}
        />
      </AppBar>
      {/* 여기서 자식 라우트가 바뀜 */}
      <Outlet />
    </Container>
  );
}
