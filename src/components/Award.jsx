import React from 'react'

import {Flex, Box, Text, Heading} from '@chakra-ui/core'

import Title from './Title'

import {awards} from '../data/database'

const Award = () => {
  return (
    <React.Fragment>
      <Title title="Awards" />
      <Flex alignItems="center">
        <Box mx="auto" width={[23 / 24, 23 / 24, 22 / 24, 21 / 24]}>
          <Flex flexWrap="wrap" alignItems="center">
            {awards.map(award => (
              <Box width={['100%', 1 / 2, 1 / 2, 1 / 3]} px={5} py={2} key={`award-${award.name}`}>
                <Box borderRadius={6} p={8} boxShadow="8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03)">
                  <Heading size="md">
                    {award.name} - {award.issuer}
                  </Heading>
                  <Text color="rgba(0, 0, 0, 0.6)" fontSize={14} pt={2}>
                    {award.award}
                  </Text>
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </React.Fragment>
  )
}

export default Award
