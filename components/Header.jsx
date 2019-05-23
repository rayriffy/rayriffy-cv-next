import React from 'react'

import { Flex, Box, Heading, Text } from 'rebass'

const Header = props => {
  return (
    <Flex alignItems='center' mt={150}>
      <Box mx='auto' width={[23 / 24, 23 / 24, 20 / 24, 20 / 24]}>
        <Heading fontSize={42}>Phumrapee Limpianchop</Heading>
        <Text color={`rgba(0, 0, 0, 0.75)`} pt={3}>Student at Faculty of ICT, Mahidol University</Text>
      </Box>
    </Flex>
  )
}

export default Header
