import React from 'react';
import { x } from '@xstyled/styled-components'
import { IThumbProps } from 'react-range/lib/types'

type SliderThumbProps = {
  props: IThumbProps
  isDragged: boolean
}

const SliderThumb =
  (value: number) =>
  ({ props, isDragged }: SliderThumbProps): JSX.Element => {
    return (
      <x.div
        {...props}
        display="flex"
        alignItems="center"
        justifyContent="center"
        w={6}
        h={6}
        boxShadow="lg"
        borderWidth
        borderRadius
        borderColor="gray-600"
        bg="white"
      >
        <x.div
          position="absolute"
          top={-25}
          p={0.5}
          color="white"
          bg="gray-400"
          fontWeight="bold"
          borderRadius
        >
          {value}
        </x.div>
        <x.div w={2} h={4} bg={isDragged ? 'blue-200' : 'gray-200'}></x.div>
      </x.div>
    )
  }

export default SliderThumb