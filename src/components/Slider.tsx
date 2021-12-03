import React from 'react';
import { useState, useEffect } from 'react'
import { x } from '@xstyled/styled-components'
import { Range } from 'react-range'
import SliderTrack from './SliderTrack'
import SliderThumb from './SliderThumb'

type SliderProps = {
  id: number
  value: number
  title: string
  color: string
  handleChange: (id: number, value: number) => void
}

const Slider = ({
  id,
  value,
  title,
  color,
  handleChange,
}: SliderProps): JSX.Element => {
  const [values, setValues] = useState<number[]>([value])
  useEffect(() => {
    setValues([value])
  }, [value])

  return (
    <x.div
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      mt={10}
      mb={4}
      ml={4}
      mr={4}
      h={10}
    >
      <Range
        values={values}
        onChange={(values) => setValues(values)}
        onFinalChange={(values) => handleChange(id, values[0])}
        renderTrack={SliderTrack(color)}
        renderThumb={SliderThumb(values[0])}
      />
      <x.p fontWeight="bold">{title}</x.p>
    </x.div>
  )
}

export default Slider