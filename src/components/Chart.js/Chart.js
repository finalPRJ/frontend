import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';

export default function Chart() {
//   const [data, setData] = useState([
//     { name: 'Group A', value: 400 },
//     { name: 'Group B', value: 300 },
//     { name: 'Group C', value: 300 },
//     { name: 'Group D', value: 200 },
//   ]);

//   return (
//     <div style={{ width: '100%', height: 300 }}>
//       <ResponsiveContainer>
//         <PieChart>
//           <Pie dataKey="value" data={data} fill="#8884d8" label />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('url/recall-reasons') // 리콜 사유 data
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // 각 항목의 백분율 계산 함수
  const calculatePercentages = (dataArray) => {
    const total = dataArray.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.value;
    }, 0);
    return dataArray.map(item => {
      return {
        ...item,
        percent: ((item.value / total) * 100).toFixed(2)
      };
    });
  };

  // 업데이트된 데이터를 다시 계산해서 state에 저장
  const updateData = () => {
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

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={data} fill="#8884d8" label />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}