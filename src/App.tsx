import './App.css'
import { AppBar, Box, Button, Container, CssBaseline, Toolbar, Typography } from '@mui/material'
import Main from './pages/Main';
import { Navigate } from 'react-router-dom';
import SignupForm from './pages/SignUp';
import SignUp from './pages/SignUp';

function App() {

  const topButtonStyle = {
    color: 'white',
    mx: 3,
    '&:hover': {
       backgroundColor: '#1976d2', // 호버 시 배경색
       color: '#c2c2c2ff',              // 호버 시 글자색
     


    }
  };

  return (
    <>
   


      {/* <Container maxWidth='xl' >
        <CssBaseline />
        <AppBar position="static" >
          <Toolbar>
            <Typography variant="h6" sx={{mr: 2}} >
              게임게시판
            </Typography>
               <Box sx={{justifyContent: 'center', flexGrow: 1}}>
                <Button sx={topButtonStyle} onClick={() => Navigate('/')}>홈</Button>
                <Button sx={topButtonStyle} onClick={() => Navigate('/free')}>자유 게시판</Button>
                <Button sx={topButtonStyle} onClick={() => Navigate('/guide')}>공략 게시판</Button>
                <Button sx={topButtonStyle} onClick={() => Navigate('/question')}>질문 게시판</Button>
                <Button sx={topButtonStyle} onClick={() => Navigate('/info')}>정보공유 게시판</Button>
                <Button sx={topButtonStyle} onClick={() => Navigate('/fanart')}>팬아트 게시판</Button>
              </Box>
                <Button sx={topButtonStyle} onClick={() => Navigate('/Login')}>로그인</Button>

          </Toolbar>
      <img 
            src="메이플.jpg"
            alt="게임 배너"
            style={{width: "100%", height: "400px"}}
      />
         <Main/>
      </AppBar> 
      </Container> */}
    <SignUp />

    </>

  )
}

export default App
