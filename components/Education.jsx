import React from 'react'

import { Flex, Box, Text, Card } from 'rebass'

import Title from './Title'

import { educations } from '../data/database'

const Education = props => {
  return (
    <>
      <Title title='Education' />
      <Flex alignItems='center'>
        <Box mx='auto' width={[23 / 24, 23 / 24, 22 / 24, 21 / 24]}>
          <Flex flexWrap='wrap'>
            {educations.map(education => (
              <Box width={[1, 1 / 2, 1 / 3, 1 / 3]} px={10} py={2} key={`edu-${education.name}`}>
                <Card borderRadius={6} p={20} boxShadow='8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03)'>
                  <Text fontWeight={500}>{education.name}</Text>
                  <Text fontSize={14} color={`rgba(0, 0, 0, 0.50)`}>{education.year.start} - {education.year.end === null ? `Now` : education.year.end}</Text>
                  <Text fontSize={16} color={`rgba(0, 0, 0, 0.50)`} py={20}>{education.desc}</Text>
                </Card>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </>
  )
}

export default Education
