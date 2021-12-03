import { x } from '@xstyled/styled-components'
import { PieChart as Chart } from 'react-minimal-pie-chart'
import Slider from './Slider'
import React from 'react';

type Category = {
  id: number
  title: string
  color: string
  value: number
}

type PieProps = {
  data: Category[]
  handleSlider: (id: number, value: number) => void
}

const Pie = ({ data, handleSlider }: PieProps): JSX.Element => {
  return (
    <x.div>
      <x.div display="flex" alignItems="center" justifyContent="center" gap={4}>
        <x.div w={96} maxWidth={0.75}>
          <Chart data={data} lineWidth={60} />
        </x.div>
      </x.div>
      {data.map((item) => (
        <Slider
          key={item.id}
          id={item.id}
          value={item.value}
          title={item.title}
          color={item.color}
          handleChange={handleSlider}
        />
      ))}
    </x.div>
  )
}

export default Pie