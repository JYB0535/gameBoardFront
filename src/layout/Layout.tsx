import { AppBar, Box, Button, Container, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {

 
    const topButtonStyle = {
        color: 'white',
        mx: 3,
        '&:hover': {
        backgroundColor: '#1976d2', // 호버 시 배경색
        color: '#c2c2c2ff',              // 호버 시 글자색
        }
    };
  return (

    
      <Container maxWidth='xl' >
        <CssBaseline />
        <AppBar position="static" >
          <Toolbar>
            <Typography variant="h6" sx={{mr: 2}} >
              게임게시판
            </Typography>
               <Box sx={{ justifyContent: 'center', flexGrow: 1 }}>
                <Button component={Link} to="/" sx={topButtonStyle}>홈</Button>
                <Button component={Link} to="/free" sx={topButtonStyle}>자유 게시판</Button>
                <Button component={Link} to="/guide" sx={topButtonStyle}>공략 게시판</Button>
                <Button component={Link} to="/info" sx={topButtonStyle}>정보공유 게시판</Button>
                <Button component={Link} to="/fanart" sx={topButtonStyle}>팬아트 게시판</Button>
                <Button component={Link} to="/question" sx={topButtonStyle}>질문 게시판</Button>
               </Box>
                <Button component={Link} to="/login" sx={topButtonStyle}>로그인</Button>

          </Toolbar>
      <img 
            src="메이플.jpg"
            alt="게임 배너"
            style={{width: "100%", height: "400px"}}
      />
      </AppBar> 
       {/* 여기서 자식 라우트가 바뀜 */}
      <Outlet />
      </Container>

     );
}