import React from 'react'

import {Flex, Box, Heading} from '@chakra-ui/core'

import Title from './Title'

import {skills} from '../data/database'

const Skill = () => {
  return (
    <React.Fragment>
      <Title title="Skills" />
      <Flex alignItems="center">
        <Box mx="auto" width={[23 / 24, 23 / 24, 20 / 24, 18 / 24]}>
          <Flex flexWrap="wrap">
            {skills.map(skill => (
              <Box width={[1 / 2, 1 / 3, 1 / 4, 1 / 5]} px={5} py={2} key={`lang-${skill}`}>
                <Box borderRadius={6} p={8} boxShadow="8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03)">
                  <Heading size="md">{skill}</Heading>
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </React.Fragment>
  )
}

export default Skill
