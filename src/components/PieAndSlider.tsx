import { x } from '@xstyled/styled-components'
import React from 'react';
import Pie from './Pie'
import { useState } from 'react'

//Used during modifying to new values
const splitAmount = (amount: number, n: number): number[] => {
  const parts = []
  if (amount % n === 0) {
    const p = amount / n
    for (let i = 0; i < n; ++i) {
      parts.push(p)
    }
  } else {
    const zp = n - (amount % n)
    const pp = Math.floor(amount / n)
    for (let i = 0; i < n; ++i) {
      if (i >= zp) parts.push(pp + 1)
      else parts.push(pp)
    }
  }
  return parts
}

type PieAndSliderProps = {
data: number[],
pos:number
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


const PieAndSlider = ({ data, pos }: PieAndSliderProps): JSX.Element => {

  const [categories, setCategories] = useState(() => {

    var initialCategories : {title: string,color:string,id:number,value:number}[] = []

    data.map((item,index)=>(
      initialCategories.push({
        title: `Category ${index+1}`,
        color: getRandomColor(),
        id:index,
        value: item,
      })
    ));

    return initialCategories

  })

  const handleCategories = (id: number, value: number): void => {
    const others = splitAmount(100 - value, categories.length - 1)
    setCategories((prev) => {
      return prev.map((item) => ({
        ...item,
        value: item.id === id ? value : others.pop() || 0,
      }))
    })
  }

  
  return (
    <x.div
      w="100vw"
      h="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      mt={5}
    >
      <x.h1>{pos}. Type : Pie Chart</x.h1>
      <Pie data={categories} handleSlider={handleCategories} />
    </x.div>
)
}

export default PieAndSlider