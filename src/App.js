import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Loginpage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import Mainpage from './pages/Mainpage';
import CarSearchpage from './pages/CarSearchpage';
import Information from './pages/Information';
import BoardViewPage from './pages/BoardViewPage';
import OAuth2RedirectHandlerPage from './components/auth/OAuth2RedirectHandler';
import UserinfoPage from './pages/UserinfoPage';
import PostListPage from './pages/PostListPage';
import ReadPage from './pages/ReadPage';
import PostPage from './pages/PostPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/postList" element={<PostListPage />} />
      <Route path="/carsearch" element={<CarSearchpage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/Information" element={<Information />} />
      <Route path="/board/view/*" element={<BoardViewPage />} />
      <Route path="/board/register" />
      <Route path="/board/read" element={<ReadPage />} />
      <Route path="/board/modify" />
      <Route path="/@:username">
        <Route index element={<PostListPage />} />
        <Route path=":postId" element={<PostPage />} />
      </Route>
    </Routes>
  );
};

export default App;
