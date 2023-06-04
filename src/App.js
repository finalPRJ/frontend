import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Loginpage';
import BoardListPage from './pages/BoardListPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import Mainpage from './pages/Mainpage';
import CarSearchpage from './pages/CarSearchpage';
import Information from './pages/Information';
import BoardViewPage from './pages/BoardViewPage';
import BoardReadpage from './pages/BoardReadpage';
import PostListPage from './pages/PostListPage';
import ReadPage from './pages/ReadPage';
import PostPage from './pages/PostPage';
import UserinfoPage from './pages/UserinfoPage';
import RecoPage from './pages/RecoPage';
import OAuth2RedirectHandlerPage from './components/auth/OAuth2RedirectHandler';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/boardlist" element={<BoardListPage />} />
      <Route path="/postList" element={<PostListPage />} />
      <Route path="/carsearch" element={<CarSearchpage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/Information" element={<Information />} />
      <Route path="/board/read" element={<BoardReadpage />} />
      <Route path="/board/view/*" element={<BoardViewPage />} />
      <Route path="/oauth2/redirect" element={<OAuth2RedirectHandlerPage />} />
      <Route path="/board/register" />
      <Route path="/userinfo" element={<UserinfoPage />} />
      <Route path="/board/read" element={<ReadPage />} />
      <Route path="/reco" element={<RecoPage />} />
      <Route path="/board/modify" />
      <Route path="/@:username">
        <Route index element={<PostListPage />} />
        <Route path=":postId" element={<PostPage />} />
      </Route>
    </Routes>
  );
};

export default App;
