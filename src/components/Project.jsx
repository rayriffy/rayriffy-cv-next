import React from 'react'

import styled from '@emotion/styled'
import {Flex, Box, Text, Link, Heading, Stack} from '@chakra-ui/core'

import Title from './Title'

import {projects} from '../data/database'

const LinkP = styled(Link)`
  color: hsla(0, 0%, 0%, 0.8);
  text-decoration-color: hsla(0, 0%, 0%, 0.8);
`

const Project = () => {
  return (
    <React.Fragment>
      <Title title="Featured Projects" />
      <Flex alignItems="center">
        <Box mx="auto" width={[23 / 24, 23 / 24, 22 / 24, 21 / 24]}>
          <Flex flexWrap="wrap">
            {projects.map(project => (
              <Box width={['100%', 1 / 2, 1 / 3, 1 / 3]} px={5} py={2} key={`proj-${project.name}`}>
                <Box borderRadius={6} p={8} boxShadow="8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03)">
                  {project.slug ? (
                    <Text fontSize={12} color={`#d32f2f`}>
                      {project.slug}
                    </Text>
                  ) : null}
                  <Heading size="md">{project.name}</Heading>
                  <Text fontSize={14} color="rgba(0, 0, 0, 0.6)">
                    {project.year.start}
                    {project.year.end || project.year.end === null ? ` - ${project.year.end === null ? `Now` : project.year.end}` : null}
                  </Text>
                  <Text fontSize={14} color="hsla(0,0%,0%,0.8)" mt={4}>
                    <Stack spacing={2} isInline>
                      {project.links.map(link => (
                        <LinkP href={link.href} key={`proj-${project.name}-${link.name}`} mx={1}>
                          {link.name}
                        </LinkP>
                      ))}
                    </Stack>
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

export default Project
