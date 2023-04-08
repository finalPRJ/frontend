import React, { useEffect } from 'react';
import axios from 'axios';

const App = () => {
    // useEffect(() => {
      axios.post("http://172.16.36.113:5000/recall/worst", null, {

    })
    .then(function(res) {
      console.log(res.data);
      // setRegion(res.data);
    })
    .catch(function(error) {
      console.log("병원 목록 가져오기 실패- ", error)
    })
        // <h1>Users</h1>
    }
    
// }

export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
