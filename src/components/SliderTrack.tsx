import React from 'react';
import { x } from '@xstyled/styled-components'
import { ITrackProps } from 'react-range/lib/types'

type SliderTrackProps = {
  props: ITrackProps
  children: React.ReactNode
}

const SliderTrack =
  (color: string) =>
  ({ props, children }: SliderTrackProps): JSX.Element => {
    return (
      <x.div
        {...props}
        display="flex"
        w="sm"
        maxWidth={0.8}
        h={2}
        borderRadius="full"
        bg={color}
      >
        {children}
      </x.div>
    )
  }

export default SliderTrack