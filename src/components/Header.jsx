import React from 'react'

import {Flex, Box, Heading, Text} from 'rebass'
import styled from 'styled-components'

const ItalicText = styled(Text)`
  font-style: italic;
`

const Header = () => {
  return (
    <Flex alignItems="center" mt={150}>
      <Box mx="auto" width={[23 / 24, 23 / 24, 20 / 24, 20 / 24]}>
        <Heading fontSize={42}>Phumrapee Limpianchop</Heading>
        <Box pt={3}>
          <ItalicText color={`rgba(0, 0, 0, 0.6)`}>Code + Music ≈ Life</ItalicText>
        </Box>
      </Box>
    </Flex>
  )
}

export default Header
