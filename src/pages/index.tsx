import React from 'react'

import { Badge, Box, Flex, Heading, PseudoBox, Text } from '@chakra-ui/core'

import { works } from '../data/database/works'

const IndexPage: React.FC = props => {
  return (
    <Flex justify='center' pt={24}>
      <Box width={[23 / 24, 20 / 24, 18 / 24, 12 / 24]}>
        <Heading size='2xl'>Phumrapee Limpianchop</Heading>
        <Text fontSize='xl'>Full-stack Web Developer</Text>
        <Heading size='lg' textTransform='uppercase' pt={10}>
          Experience
        </Heading>
        <Flex flexWrap='wrap'>
          {works.map(work => (
            <Box key={`work-${work.name}-${work.role}`} width={[1 / 2]} p={4}>
              <PseudoBox
                p={6}
                borderRadius={10}
                transition='box-shadow 0.2s ease-in-out'
                boxShadow='0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                _hover={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                <Badge mb={2} fontSize='0.8em' variantColor='green'>
                  {work.year.start} -{' '}
                  {work.year.end === null ? 'Now' : work.year.end}
                </Badge>
                <Heading size='md'>{work.name}</Heading>
                <Text color='gray.500'>{work.role}</Text>
              </PseudoBox>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}

export default IndexPage
