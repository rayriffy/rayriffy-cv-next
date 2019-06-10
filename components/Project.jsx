import React from 'react'

import styled from 'styled-components'
import {Flex, Box, Text, Card, Link} from 'rebass'

import Title from './Title'

import {projects} from '../data/database'

const LinkP = styled(Link)`
  color: hsla(0, 0%, 0%, 0.8);
  text-decoration-color: hsla(0, 0%, 0%, 0.8);
`

const Project = () => {
  return (
    <>
      <Title title="Featured Projects" />
      <Flex alignItems="center">
        <Box mx="auto" width={[23 / 24, 23 / 24, 22 / 24, 21 / 24]}>
          <Flex flexWrap="wrap">
            {projects.map(project => (
              <Box width={[1, 1 / 2, 1 / 3, 1 / 3]} px={10} py={2} key={`proj-${project.name}`}>
                <Card borderRadius={6} p={20} boxShadow="8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03)">
                  {project.slug ? (
                    <Text fontSize={12} color="red">
                      {project.slug}
                    </Text>
                  ) : null}
                  <Text fontWeight={500}>{project.name}</Text>
                  <Text fontSize={14} color="rgba(0, 0, 0, 0.6)">
                    {project.year.start}
                    {project.year.end || project.year.end === null ? ` - ${project.year.end === null ? `Now` : project.year.end}` : null}
                  </Text>
                  <Text fontSize={14} color="hsla(0,0%,0%,0.8)" mt={10}>
                    {project.links.map(link => (
                      <LinkP href={link.href} key={`proj-${project.name}-${link.name}`} mx={1}>
                        {link.name}
                      </LinkP>
                    ))}
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

export default Project
