import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MainBlock = styled.div`
  background: gray;
  margin-top: 4%;
  margin-left: 13%;
  margin-right: 13%;
  padding: 2rem;
  height: 6rem;

  .rank {
    font-size: 20px;
    padding: 3rem;
    margin-left: 10%;
    margin-right: 14%;
  }

  .content {
    background: #e3f2fd;
    width: 20%;
    height: 40;
    margin-top: 7%;
    margin-bottom: 5%;
    margin-left: 30%;
    margin-right: 30;
    padding: 0.5rem;
  }

  .ulList {
    width: 100%;
    margin-left: 10%;
  }
`;

const RecallList = () => {
  return (
    <MainBlock>
      <div>
        <text className="rank">
          <b>하위</b> Top3</text>
        <text className="rank">
          <b>상위</b> Top3</text>
      </div>
      <div className="content">
        <ul className="ulList">
          <b>제조사</b>
        </ul>
        <ul className="ulList">
          <b>모델명</b>
        </ul>
        <ul className="ulList">
          <b>제조사</b>
        </ul>
        <ul className="ulList">
          <b>모델명</b>
        </ul>
        <ul className="ulList">
          <b>제조사</b>
        </ul>
        <ul className="ulList">
          <b>모델명</b>
        </ul>
      </div>
    </MainBlock>
  );
};

export default RecallList;

// const [recallData, setRecallData] = useState([]);

// useEffect(() => {
//   axios
//     .get('http://13.125.169.58:5000/recall/data')
//     .then((response) => {
//       var recallData = [];
//       // eslint-disable-next-line
//       response.data.sort(function (a, b) {
//           recallData.push(a.reasons);
//       });

//       console.log(recallData)
// const result = recallData.reduce((accu, curr) => {
//   accu[curr] = (accu[curr] || 0) + 1;
//   return accu;
// }, {});

// const sortedData2 = Object.entries(result)
//   .sort(function (a, b) {
//     return b[1] - a[1];
//   })
//   .slice(0, 5);

// let obj = {};
// let list = [];

// for (var i = 0; i < sortedData2.length; i++) {
//   obj = { name: sortedData2[i][0], value: sortedData2[i][1] };
//   list.push(obj);
// }

// setDatas(list);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);
