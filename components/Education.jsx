import React from 'react'

import { Flex, Box, Heading, Text } from 'rebass'

import ItemCard from './ItemCard'

import { educations } from '../data/database'

const Education = props => {
  return (
    <>
      <Flex alignItems='center'>
        <Box mx='auto' width={[21 / 24, 21 / 24, 20 / 24 , 20 / 24]} mt={50}>
          <Heading mb={4}>Education</Heading>
        </Box>
      </Flex>
      <Flex alignItems='center'>
        <Box mx='auto' width={[23 / 24, 23 / 24, 22 / 24, 21 / 24]}>
          <Flex flexWrap='wrap'>
            {educations.map(education => (
              <Box width={[1, 1 / 2, 1 / 3, 1 / 3]} px={10} py={2}>
                <ItemCard borderRadius={4} p={20}>
                  <Text fontWeight={500}>{education.name}</Text>
                  <Text fontSize={14} color={`rgba(0, 0, 0, 0.50)`}>{education.year.start} - {education.year.end === null ? `Now` : education.year.end}</Text>
                  <Text fontSize={16} color={`rgba(0, 0, 0, 0.50)`} py={20}>{education.desc}</Text>
                </ItemCard>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </>
  )
}

export default Education
