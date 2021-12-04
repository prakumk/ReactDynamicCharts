import React from 'react';
import { useState,useEffect } from 'react'
import axios from 'axios';
import PieAndSlider from './components/PieAndSlider';

// const splitAmount = (amount: number, n: number): number[] => {
//   const parts = []
//   if (amount % n === 0) {
//     const p = amount / n
//     for (let i = 0; i < n; ++i) {
//       parts.push(p)
//     }
//   } else {
//     const zp = n - (amount % n)
//     const pp = Math.floor(amount / n)
//     for (let i = 0; i < n; ++i) {
//       if (i >= zp) parts.push(pp + 1)
//       else parts.push(pp)
//     }
//   }
//   return parts
// }

function App(): JSX.Element {


  const [chart_data,setChartData] = useState([])

  useEffect(() => {
  axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json')
  .then(response => {
      console.log(response);
      setChartData(response.data)
  })
  .catch(error => {
      console.error('There was an error!', error);
  }); 
  },[]);


  if (chart_data.length === 0)
  {
    return (
      <div 
      style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }}
      >
        <h1>No Chart Data available</h1>
      </div>
    );
  }

  return (
    <div>
    {chart_data.map((item : any) => (
      <PieAndSlider data={item.elements}/>
    ))}
    </div>
  )
}

export default App