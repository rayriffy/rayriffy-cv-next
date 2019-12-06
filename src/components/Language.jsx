import React from "react"

import { Flex, Box, Text, Heading } from "@chakra-ui/core"

import Title from "./Title"

import { languages } from "../data/database"

const Language = () => {
  return (
    <React.Fragment>
      <Title title="Languages" />
      <Flex alignItems="center">
        <Box mx="auto" width={[23 / 24, 23 / 24, 22 / 24, 21 / 24]}>
          <Flex flexWrap="wrap" alignItems="center">
            {languages.map(language => (
              <Box width={[1 / 2, 1 / 2, 1 / 3, 1 / 4]} px={5} py={2} key={`lang-${language.lang}`}>
                <Box borderRadius={6} p={8} boxShadow="8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03)">
                  <Heading size="md">{language.lang}</Heading>
                  <Text fontSize={14} color="rgba(0, 0, 0, 0.6)">
                    {language.level}
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

export default Language
