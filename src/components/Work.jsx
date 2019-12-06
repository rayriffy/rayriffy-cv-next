import React from "react"

import { Flex, Box, Text, Heading } from "@chakra-ui/core"

import Link from "./Link"
import Title from "./Title"

import { works } from "../data/database"

const Work = () => {
  return (
    <React.Fragment>
      <Title title="Works" />
      <Flex alignItems="center">
        <Box mx="auto" width={[23 / 24, 23 / 24, 22 / 24, 21 / 24]}>
          <Flex flexWrap="wrap">
            {works.map(work => (
              <Box width={[1 / 2, 1 / 2, 1 / 3, 1 / 4]} px={3} py={2} key={`work-${work.name}`}>
                <Box borderRadius={6} p={8} boxShadow="8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03)">
                  <Link href={work.href}>
                    <Heading size="md" color="hsla(0,0%,0%,0.8)">
                      {work.name}
                    </Heading>
                  </Link>
                  <Text fontSize={14} color="rgba(0, 0, 0, 0.6)">
                    {work.year.start} - {work.year.end === null ? `Now` : work.year.end}
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

export default Work
