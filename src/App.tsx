
import './App.css'
import { AppBar, Container, CssBaseline, Toolbar, Typography } from '@mui/material'

function App() {

  return (
    <>
      <Container maxWidth='xl'>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6">
              게임 게시판 
            </Typography>
          </Toolbar>
        </AppBar> 
      
       
      </Container>
    </>

  )
}

export default App
