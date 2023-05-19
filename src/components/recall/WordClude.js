import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactWordcloud from 'react-wordcloud';

const Wordcloud = () => {
  const [recall, setRecall] = useState([]);

  useEffect(() => {
    axios
      .get(
        'http://13.125.169.58:5000/recall/wordCloud?carType=비엠더블유코리아(주)',
      )
      .then((response) => {
        const sortedData = response.data
          .sort((a, b) => b.value - a.value)
          .slice(0, 100);
        setRecall(sortedData);
        console.log(sortedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function Wordcloud() {
    return (
      // word(text) 반환
      <ReactWordcloud words={recall.map((item) => ({ text: item.text }))} />
    );
  }

  const getRandomColor = () => {
    const colors = [
      '#FF9AA2',
      '#FFB7B2',
      '#FFDAC1',
      '#B4EAD7',
      '#82A3AC',
      '#A9C7C5',
      '#E2CFC9',
      '#FFC98B',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const callbacks = {
    getWordColor: () => getRandomColor(), // 단어 개체를 사용하여 단어 색상 설정
    // onWordClick: console.log, // 클릭 시 단어 및 마우스 이벤트
    // onWordMouseOver: console.log, // 마우스 아웃 시 단어 및 마우스 이벤트
    // getWordTooltip: (word) => `${word.text} (${word.value}) [${word.value > 50 ? 'good' : 'bad'}]`, // 단어 설명 설정
  };

  const options = {
    rotations: 0, // 회전
    rotationAngles: [0], // 회전 각도
    fontSizes: [20, 70],
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 'bold',
    padding: 0,
  };

  const size = recall.map((item) => item.value * 1.2); // 크기

  function RecallWordcloud() {
    return (
      <ReactWordcloud
        callbacks={callbacks}
        options={options}
        size={size}
        words={recall.map((item) => ({ text: item.text, value: item.value }))}
      />
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '300px',
        width: '500px',
      }}
    >
      <RecallWordcloud />
    </div>
  );
};

export default Wordcloud;
