import React from 'react'

import { Flex, Box, Heading } from 'rebass'

const Title = props => {
  const { title } = props

  return (
    <Flex alignItems='center'>
      <Box mx='auto' width={[21 / 24, 21 / 24, 20 / 24 , 20 / 24]} mt={50}>
        <Heading mb={4} fontSize={28}>{title}</Heading>
      </Box>
    </Flex>
  )
}

export default Title