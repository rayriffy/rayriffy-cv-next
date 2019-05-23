import React from 'react'

import App from '../components/App'
import Education from '../components/Education'

import { Flex, Box, Heading, Text, Card } from 'rebass'
import { FaEnvelope, FaTwitter, FaFacebook } from 'react-icons/fa'

const Index = props => {
  return (
    <App>
      {/* Header */}
      <Flex alignItems='center' mt={150}>
        <Box mx='auto' width={[23 / 24, 23 / 24, 20 / 24, 20 / 24]}>
          <Heading fontSize={5}>Phumrapee Limpianchop</Heading>
          <Text color={`rgba(0, 0, 0, 0.75)`}>Student at Faculty of ICT, Mahidol University</Text>
        </Box>
      </Flex>
      {/* Contact Info */}
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
      {/* Education */}
      <Education />
    </App>
  )
}

export default Index
