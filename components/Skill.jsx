import React from 'react'

import {Flex, Box, Text, Card} from 'rebass'

import Title from './Title'

import {skills} from '../data/database'

const Skill = () => {
  return (
    <>
      <Title title="Skills" />
      <Flex alignItems="center">
        <Box mx="auto" width={[23 / 24, 23 / 24, 20 / 24, 18 / 24]}>
          <Flex flexWrap="wrap">
            {skills.map(skill => (
              <Box width={[1 / 2, 1 / 3, 1 / 4, 1 / 5]} px={10} py={2} key={`lang-${skill}`}>
                <Card borderRadius={6} p={20} boxShadow="8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03)">
                  <Text fontWeight={500}>{skill}</Text>
                </Card>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </>
  )
}

export default Skill
