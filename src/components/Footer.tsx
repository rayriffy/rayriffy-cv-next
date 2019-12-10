import React from 'react'

import { Box, Flex, Text } from '@chakra-ui/core'
import styled from '@emotion/styled'

const Love = styled('img')`
  height: 14px;
  width: auto;
  margin: 0 0 0 0;
`

const Footer: React.FC = () => {
  return (
    <Flex
      bg='#393a3a'
      mt={12}
      py={6}
      justifyContent='center'
      alignItems='center'>
      <Text fontSize={14} color='white'>
        Built with
      </Text>
      <Box px={1}>
        <Love
          src='https://s.w.org/images/core/emoji/2.4/svg/2764.svg'
          alt='love'
        />
      </Box>
      <Text fontSize={14} color='white'>
        by rayriffy
      </Text>
    </Flex>
  )
}

export default Footer
