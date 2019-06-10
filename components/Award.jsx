import React from 'react'

import {Flex, Box, Text, Card} from 'rebass'

import Title from './Title'

import {awards} from '../data/database'

const Award = () => {
  return (
    <>
      <Title title="Awards" />
      <Flex alignItems="center">
        <Box mx="auto" width={[23 / 24, 23 / 24, 22 / 24, 21 / 24]}>
          <Flex flexWrap="wrap">
            {awards.map(award => (
              <Box width={[1, 1 / 2, 1 / 2, 1 / 3]} px={10} py={2} key={`award-${award.name}`}>
                <Card borderRadius={6} p={20} boxShadow="8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03)">
                  <Text fontWeight={500}>
                    {award.name} - {award.issuer}
                  </Text>
                  <Text fontSize={14} color="rgba(0, 0, 0, 0.6)">
                    {award.award}
                  </Text>
                </Card>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </>
  )
}

export default Award
