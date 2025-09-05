import "./App.css";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/MainLayout";
//import PostList from './pages/PostList';
import PostPage from "./pages/PostPage";
import Bar from "./layout/Bar";
import FreeBoard from "./pages/FreeBoard";
import PostDetail from "./pages/PostDetail";
import FreeLayout from "./layout/FreeLayOut";
import MainLayout from "./layout/MainLayout";
import CommunityLayout from "./layout/CommunityLayOut";
import CommunityBoard from "./pages/CommunityBoard";

function App() {
  return (
    <>
      <Routes>
        {/* Layout이 필요한 페이지들 */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
        </Route>

        {/* Layout 없이 바로 나오는 페이지 */}
        <Route element={<Bar />}>
          <Route path="/signUp" element={<SignUp />} />
        </Route>
        <Route element={<Bar />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<FreeLayout />}>
          <Route path="/freeBoard" element={<FreeBoard />} />
        </Route>
        <Route element={<Bar />}>
          <Route path="/postPage" element={<PostPage />} />
        </Route>
        <Route element={<Bar />}>
          <Route path="/post/:id" element={<PostDetail />} />
        </Route>
        <Route element={<CommunityLayout />}>
          <Route path="/community" element={<CommunityBoard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
