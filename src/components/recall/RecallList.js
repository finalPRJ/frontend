import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MainBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 50px;
`;

const Box = styled.div`
  background: #e3f2fd;
  width: 300px;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RecallList = () => {
  const [top3, setTop3] = useState([]);
  const [bottom3, setBottom3] = useState([]);

  useEffect(() => {
    axios
      .get('http://13.125.169.58:5000/recall/data')
      .then((response) => {
        // Assume you have data for top3 and bottom3
        const top3Data = response.data.slice(0, 3);
        const bottom3Data = response.data.slice(-3);

        setTop3(top3Data);
        setBottom3(bottom3Data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <MainBlock>
      <BoxContainer>
        <h3>상위 Top 3</h3>
        {top3.map((item, index) => (
          <Box key={index}>
            <div>제조사: {item.brand}</div>
            <div>모델명: {item.model}</div>
          </Box>
        ))}
      </BoxContainer>
      <BoxContainer>
        <h3>하위 Top 3</h3>
        {bottom3.map((item, index) => (
          <Box key={index}>
            <div>제조사: {item.brand}</div>
            <div>모델명: {item.model}</div>
          </Box>
        ))}
      </BoxContainer>
    </MainBlock>
  );
};

export default RecallList;
