import { x } from '@xstyled/styled-components'
import React from 'react';
import Pie from './Pie'
import Category from './Pie'
import { useState } from 'react'


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
data: number[]
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


const PieAndSlider = ({ data }: PieAndSliderProps): JSX.Element => {

  const [categories, setCategories] = useState(() => {

    var initialCategories  = [{
      title: 'Temp',
      color: '#94a3b8',
    }]
    initialCategories.pop()

    data.map((item)=>(
      initialCategories.push({
        title: 'Category A',
        color: getRandomColor(),
      })
    ));

    // const initialCategories = [
    //   {
    //     title: 'Category A',
    //     color: '#94a3b8',
    //   },
    //   {
    //     title: 'Category B',
    //     color: '#fb923c',
    //   },
    //   {
    //     title: 'Category C',
    //     color: '#4ade80',
    //   },
    //   {
    //     title: 'Category D',
    //     color: '#a78bfa',
    //   },
    // ]
    const splits = splitAmount(100, initialCategories.length)

    return initialCategories.map((item, index) => ({
      ...item,
      id: index,
      value: splits[index],
    }))
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
      <Pie data={categories} handleSlider={handleCategories} />
    </x.div>
)
}

export default PieAndSlider