import './App.css'
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import PostList from './pages/PostList';
import PostPage from './pages/PostPage';
import Bar from './layout/Bar';
import FreeBoard from './pages/FreeBoard';
import PostDetail from './pages/PostDetail';

function App() {


  return (
    <>

      
        <Routes>
        {/* Layout이 필요한 페이지들 */}
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
        </Route>
         

        {/* Layout 없이 바로 나오는 페이지 */}
        <Route path="/signUp" element={<SignUp />} />

        <Route element={<Bar/>}>
          <Route path="/login" element ={<Login/>}/>
        </Route>

        <Route path="/" element={<PostList />} />
        <Route path="/postPage" element={<PostPage/>}/>


        <Route element={<Layout />}>
          <Route path="/freeBoard" element={<FreeBoard />} />
        </Route>

        <Route path="/" element={<PostList />} />
        <Route path="/post/:id" element={<PostDetail />} />


      </Routes>
      
    </>

  )
}

export default App
