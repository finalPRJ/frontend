import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';

export default function Chart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('url/recall-reasons') // 리콜 사유 data
      .then(response => {
        const sortedData = response.data.sort((a, b) => b.value - a.value).slice(0, 5); // 상위 5개 데이터만 불러오기
        const updatedData = calculatePercentages(sortedData);
        setData(updatedData);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // 각 항목의 백분율 계산 함수
//   const calculatePercentages = (dataArray) => {
//     const total = dataArray.reduce((accumulator, currentValue) => {
//       return accumulator + currentValue.value;
//     }, 0);
//     return dataArray.map(item => {
//       return {
//         ...item,
//         percent: parseFloat(((item.value / total) * 100).toFixed(1)) // 소숫점 첫째자리까지만 표시
//       };
//     });
//   };
const calculatePercentages = (dataArray) => { // 함수 수정
    const total = dataArray.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.value;
    }, 0);
  
    const sortedData = dataArray.sort((a, b) => b.value - a.value); // value를 기준으로 내림차순 정렬
    const slicedData = sortedData.slice(0, 5); // 상위 5개 데이터만 추출
  
    const updatedData = slicedData.map(item => {
      return {
        ...item,
        percent: parseFloat((item.value / total) * 100).toFixed(1) // 백분율을 계산하고 소숫점 첫째자리까지 반올림
      };
    });
  
    return updatedData;
  };
  

  // 업데이트된 데이터를 다시 계산해서 state에 저장
//   const updateData = () => {
//     axios.get('url/recall-reasons')
//       .then(response => {
//         const sortedData = response.data.sort((a, b) => b.value - a.value).slice(0, 5); // 상위 5개 데이터만 불러오기
//         const updatedData = calculatePercentages(sortedData);
//         setData(updatedData);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
const updateData = () => { // 함수 수정
    axios.get('url/recall-reasons')
      .then(response => {
        const updatedData = calculatePercentages(response.data);
        setData(updatedData);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    const intervalId = setInterval(updateData, 5000); // 5초마다 업데이트
    return () => clearInterval(intervalId);
  }, []);

  // 데이터 순서대로 정렬하는 함수
  const sortData = (dataArray) => {
    return dataArray.sort((a, b) => b.value - a.value).map(item => item.name);
  };

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          {/* <Pie dataKey="value" data={data} fill="#8884d8" label /> */}
          <Pie dataKey="value" data={data} nameKey="name" legendType="circle" fill="#8884d8" label={(props) => `${props.name} ${props.percent}%`} />
          <Legend />
        </PieChart>
        {/* <div> */}
          {/* <ul> */}
            {/* {sortData(data).map((item, index) => ( */}
              {/* <li key={index}>{`${index+1}. ${item}`}</li> */}
            {/* ))} */}
          {/* </ul> */}
        {/* </div> */}
      </ResponsiveContainer>
    </div>
  );
}