import React from 'react'

import { Heading } from '@chakra-ui/core'

export interface ISectionProps {
  title: string
}

export const Section: React.FC<ISectionProps> = props => {
  const { title, children } = props

  return (
    <React.Fragment>
      <Heading size='lg' textTransform='uppercase' pt={10}>
        {title}
      </Heading>
      {children}
    </React.Fragment>
  )
}
