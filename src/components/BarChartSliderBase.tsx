import { x } from '@xstyled/styled-components'
import Slider from './Slider'
import React from 'react';
import BarChart from './BarChart.jsx'

type Category = {
  id: number
  title: string
  color: string
  value: number
}

type BarChartSliderBaseProps = {
  data: Category[],
  state:any,
  handleSlider: (id: number, value: number) => void
}

const BarChartSliderBase = ({ data,state, handleSlider }: BarChartSliderBaseProps): JSX.Element => {
  return (
    <x.div>
      <BarChart
			data={state.data}
			options={state.options}/>
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

export default BarChartSliderBase