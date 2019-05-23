import React from 'react'

import { Flex, Box } from 'rebass'
import { FaEnvelope, FaTwitter, FaFacebook } from 'react-icons/fa'

const Contact = props => {
  return (
    <Flex alignItems='center' mt={40}>
      <Box mx='auto' width={[22 / 24, 22 / 24, 20 / 24, 20 / 24]}>
        <Flex>
          <Box width={[1 / 6, 1 / 12, 1 / 12 ,1 / 24]}>
            <FaEnvelope />
          </Box>
          <Box width={[1 / 6, 1 / 12, 1 / 12 ,1 / 24]}>
            <FaTwitter />
          </Box>
          <Box width={[1 / 6, 1 / 12, 1 / 12 ,1 / 24]}>
            <FaFacebook />
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Contact
