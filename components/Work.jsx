import React from 'react'

import {Flex, Box, Text, Card} from 'rebass'

import Link from './Link'
import Title from './Title'

import {works} from '../data/database'

const Work = () => {
  return (
    <>
      <Title title="Works" />
      <Flex alignItems="center">
        <Box mx="auto" width={[23 / 24, 23 / 24, 22 / 24, 21 / 24]}>
          <Flex flexWrap="wrap">
            {works.map(work => (
              <Box width={[1 / 2, 1 / 2, 1 / 3, 1 / 4]} px={10} py={2} key={`work-${work.name}`}>
                <Card borderRadius={6} p={20} boxShadow="8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03)">
                  <Link href={work.href}>
                    <Text fontWeight={500} color="hsla(0,0%,0%,0.8)">
                      {work.name}
                    </Text>
                  </Link>
                  <Text fontSize={14} color="rgba(0, 0, 0, 0.6)">
                    {work.year.start} - {work.year.end === null ? `Now` : work.year.end}
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

export default Work
