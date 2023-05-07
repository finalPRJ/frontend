import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Loginpage";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import RegisterPage from "./pages/RegisterPage";
import WritePage from "./pages/WritePage";
import Mainpage from "./pages/Mainpage";
import CarSearchpage from "./pages/CarSearchpage";
import ReCallPage from "./pages/RecallPage"


const App = () => {
  return (
    <Routes>
      {/* <Route exact path="/" element={<Mainpage/>}/> */}
      <Route exact path="/" element={<ReCallPage/>}/>
      <Route path="/postList" element={<PostListPage/>}/>
      <Route path="/carsearch" element={<CarSearchpage/>}/>
      <Route path="/recall" element={<ReCallPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/write" element={<WritePage/>}/>
      <Route path="/@:username">
        <Route index element={<PostListPage/>}/>
        <Route path=":postId" element={<PostPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;