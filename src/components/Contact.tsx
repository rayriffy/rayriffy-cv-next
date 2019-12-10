import React from 'react'

import { Box, Flex } from '@chakra-ui/core'
import styled from '@emotion/styled'
import { FaEnvelope, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'

const Link = styled('a')`
  color: hsla(0, 0%, 0%, 0.8);
  text-decoration: none;
`

const Contact: React.FC = () => {
  return (
    <Flex alignItems='center' mt={50}>
      <Box mx='auto' width={[22 / 24, 22 / 24, 20 / 24, 20 / 24]}>
        <Flex>
          <Box width={[1 / 6, 1 / 12, 1 / 12, 1 / 24]}>
            <Link href='mailto:contact@rayriffy.com' aria-label='Email'>
              <FaEnvelope />
            </Link>
          </Box>
          <Box width={[1 / 6, 1 / 12, 1 / 12, 1 / 24]}>
            <Link href='https://github.com/rayriffy' aria-label='GitHub'>
              <FaGithub />
            </Link>
          </Box>
          <Box width={[1 / 6, 1 / 12, 1 / 12, 1 / 24]}>
            <Link href='https://twitter.com/rayriffy' aria-label='Twitter'>
              <FaTwitter />
            </Link>
          </Box>
          <Box width={[1 / 6, 1 / 12, 1 / 12, 1 / 24]}>
            <Link href='https://facebook.com/rayriffy' aria-label='Facebook'>
              <FaFacebook />
            </Link>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Contact