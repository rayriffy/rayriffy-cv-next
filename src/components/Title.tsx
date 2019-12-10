import React from 'react'

import { Box, Flex, Heading } from '@chakra-ui/core'

interface IProps {
  title: string
}

const Title: React.FC<IProps> = props => {
  const { title } = props

  return (
    <Flex alignItems='center'>
      <Box mx='auto' width={[21 / 24, 21 / 24, 20 / 24, 20 / 24]} mt={50}>
        <Heading size='lg' mb={4}>
          {title}
        </Heading>
      </Box>
    </Flex>
  )
}

export default Title
