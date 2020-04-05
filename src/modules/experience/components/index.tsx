import React from 'react'

import { Badge, Box, Flex, Heading, PseudoBox, Text } from '@chakra-ui/core'

import { Section } from '../../../core/components'

import { experiences } from '../constants'

export const Experience: React.FC = props => {
  return (
    <Section title='Experience'>
      <Flex flexWrap='wrap'>
        {experiences.map(experience => {
          const { name, role, year } = experience

          const isOngoing = year.end === null

          return (
            <Box
              key={`experience-${name}-${role}`}
              width={['100%', '100%', 1 / 2]}
              p={4}>
              <PseudoBox
                p={6}
                borderRadius={10}
                transition='box-shadow 0.2s ease-in-out'
                boxShadow='0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                _hover={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                <Badge
                  mb={2}
                  fontSize='0.8em'
                  variantColor={isOngoing ? 'green' : 'orange'}>
                  {year.start} - {isOngoing ? 'Now' : year.end}
                </Badge>
                <Heading size='md'>{name}</Heading>
                <Text color='gray.500'>{role}</Text>
              </PseudoBox>
            </Box>
          )
        })}
      </Flex>
    </Section>
  )
}
