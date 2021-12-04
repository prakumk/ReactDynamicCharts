import React from 'react';
import { useState,useEffect } from 'react'
import { x } from '@xstyled/styled-components'
import Pie from './components/Pie'
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


  const [chart_count,setChartCount] = useState(0)

  useEffect(() => {
  axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json')
  .then(response => {
      console.log(response);
      setChartCount(response.data.length)
  })
  .catch(error => {
      console.error('There was an error!', error);
  }); 
  },[]);


  // const [categories, setCategories] = useState(() => {
  //   const initialCategories = [
  //     {
  //       title: 'Category A',
  //       color: '#94a3b8',
  //     },
  //     {
  //       title: 'Category B',
  //       color: '#fb923c',
  //     },
  //     {
  //       title: 'Category C',
  //       color: '#4ade80',
  //     },
  //     {
  //       title: 'Category D',
  //       color: '#a78bfa',
  //     },
  //   ]
  //   const splits = splitAmount(100, initialCategories.length)

  //   return initialCategories.map((item, index) => ({
  //     ...item,
  //     id: index,
  //     value: splits[index],
  //   }))
  // })

  // const handleCategories = (id: number, value: number): void => {
  //   const others = splitAmount(100 - value, categories.length - 1)
  //   setCategories((prev) => {
  //     return prev.map((item) => ({
  //       ...item,
  //       value: item.id === id ? value : others.pop() || 0,
  //     }))
  //   })
  // }

  if (chart_count === 0)
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
    <PieAndSlider />
  )
}

export default App