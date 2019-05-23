import React from 'react'

import App from '../components/App'

import styled from 'styled-components'
import { Flex, Box, Heading, Text, Card } from 'rebass'
import { FaEnvelope, FaTwitter, FaFacebook } from 'react-icons/fa'

const Item = styled(Card)`
& {
  box-shadow: 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03);
  transition: all .5s ease;
}
`

const Index = props => {
  return (
    <App>
      {/* Header */}
      <Flex alignItems='center' mt={150}>
        <Box mx='auto' width={[1, 1, 20 / 24, 20 / 24]}>
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
      <Flex alignItems='center'>
        <Box mx='auto' width={20 / 24} mt={50}>
          <Heading mb={4}>Education</Heading>
        </Box>
      </Flex>
      <Flex alignItems='center'>
        <Box mx='auto' width={[23 / 24, 23 / 24, 22 / 24, 21 / 24]}>
          <Flex flexWrap='wrap'>
            <Box width={[1, 1 / 2, 1 / 3, 1 / 4]} px={10} py={2}>
              <Item borderRadius={4} p={20}>
                Mahidol University
              </Item>
            </Box>
            <Box width={[1, 1 / 2, 1 / 3, 1 / 4]} px={10} py={2}>
              <Item borderRadius={4} p={20}>
                Mahidol University
              </Item>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </App>
  )
}

export default Index
