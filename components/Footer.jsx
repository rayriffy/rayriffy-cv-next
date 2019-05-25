import React from 'react'

import styled from 'styled-components'
import { Box, Text } from 'rebass'

const Love = styled.img`
  height: 14px;
  width: auto;
  margin: 0 0 0 0;
`

const Footer = props => {
  return (
    <>
      <Box bg='#393a3a' mt={50} py={20}>
        <Text textAlign='center' fontSize={14} color='white'>Built with <Love src='https://s.w.org/images/core/emoji/2.4/svg/2764.svg' alt='love' /> by rayriffy</Text>
      </Box>
    </>
  )
}

export default Footer
