import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Loginpage";
import PostListPage from "./pages/PostListPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import Mainpage from "./pages/Mainpage";
import CarSearchpage from "./pages/CarSearchpage";
import Information from "./pages/Information";
import BoardViewPage from "./pages/BoardViewPage";
import OAuth2RedirectHandlerPage from "./components/auth/OAuth2RedirectHandler";
import UserinfoPage from "./pages/UserinfoPage";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage/>}/>
      <Route path="/postList" element={<PostListPage/>}/>
      <Route path="/carsearch" element={<CarSearchpage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/write" element={<WritePage/>}/>
      <Route path="/Information" element={<Information/>}/>
      <Route path="/board/view/*" element={<BoardViewPage/>}/>
      <Route path="/oauth2/redirect" element={<OAuth2RedirectHandlerPage/>}/>
      <Route path="/userinfo" element={<UserinfoPage/>}/>
    </Routes>
  );
}

export default App;
