import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';

const Chart = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get('http://13.125.169.58:5000/recall/data')
      .then((response) => {
        var array = [];

        response.data.sort(function (a, b) {
          array.push(a.reasons);
        });

        const result = array.reduce((accu, curr) => {
          accu[curr] = (accu[curr] || 0) + 1;
          return accu;
        }, {});

        const sortedData2 = Object.entries(result)
          .sort(function (a, b) {
            return b[1] - a[1];
          })
          .slice(0, 5);

        let obj = {};
        let list = [];

        for (var i = 0; i < sortedData2.length; i++) {
          obj = { name: sortedData2[i][0], value: sortedData2[i][1] };
          list.push(obj);
        }

        setDatas(list);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <div>
        <div class="row d-flex justify-content-center text-center">
          <hr />
          <div className="col-md-8">
            <ResponsiveContainer
              width={900}
              height={900}
              className="text-center"
            >
              <PieChart width={400} height={400}>
                <Legend layout="vertical" verticalAlign="top" align="top" />
                <Pie
                  data={datas}
                  cx="50%"
                  cy="5000%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={180}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {datas.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
