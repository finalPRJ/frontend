import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Main from './components/Main/Main';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/main" element={<Main/>}/>
      </Route>       
    </Routes>
  );
}

export default App;
