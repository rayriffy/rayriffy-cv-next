import React from 'react'

import styled from '@emotion/styled'
import {Flex, Box, Text, Image, Heading} from '@chakra-ui/core'

import Title from './Title'

import {educations} from '../data/database'

const Img = styled(Image)`
  border-radius: 6px 6px 0 0;
`

const Education = () => {
  return (
    <React.Fragment>
      <Title title="Education" />
      <Flex alignItems="center">
        <Box mx="auto" width={[23 / 24, 23 / 24, 22 / 24, 21 / 24]}>
          <Flex flexWrap="wrap" alignItems="center">
            {educations.map(education => (
              <Box width={['100%', 1 / 2, 1 / 3, 1 / 3]} px={3} py={2} key={`edu-${education.name}`}>
                <Box borderRadius={6} boxShadow="8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03)">
                  <Img src={education.banner} borderRadius={6} alt={education.name} />
                  <Box p={8}>
                    <Heading size="md">{education.name}</Heading>
                    <Text fontSize={14} color="rgba(0, 0, 0, 0.6)">
                      {education.year.start} - {education.year.end === null ? `Now` : education.year.end}
                    </Text>
                    <Text fontSize={16} color="rgba(0, 0, 0, 0.75)" py={5}>
                      {education.desc}
                    </Text>
                  </Box>
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </React.Fragment>
  )
}

export default Education
