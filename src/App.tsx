import './App.css'
import { AppBar, Box, Button, Container, CssBaseline, Toolbar, Typography } from '@mui/material'
import Main from './pages/MainPage';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Route, Router, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import PostDetail from './pages/PostPage';

function App() {


  return (
    <>

      
        <Routes>
        {/* Layout이 필요한 페이지들 */}
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
          <Route path="/post/:postId" element={<PostDetail />} />

        {/* Layout 없이 바로 나오는 페이지 */}
        <Route path="/signUp" element={<SignUp />} />

        <Route path="/login" element ={<Login/>}/>

      </Routes>
      
    </>

  )
}

export default App
