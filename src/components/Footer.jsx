import React from 'react'

import styled from '@emotion/styled'
import {Box, Flex, Text} from '@chakra-ui/core'

const Love = styled('img')`
  height: 14px;
  width: auto;
  margin: 0 0 0 0;
`

const Footer = () => {
  return (
    <Flex bg="#393a3a" mt={12} py={6} justifyContent="center" alignItems="center">
      <Text fontSize={14} color="white">
        Built with
      </Text>
      <Box px={1}>
        <Love src="https://s.w.org/images/core/emoji/2.4/svg/2764.svg" alt="love" />
      </Box>
      <Text fontSize={14} color="white">
        by rayriffy
      </Text>
    </Flex>
  )
}

export default Footer
