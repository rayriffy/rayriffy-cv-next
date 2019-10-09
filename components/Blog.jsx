import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {Flex, Box, Card, Text} from 'rebass'

import Link from './Link'
import Title from './Title'

const Blog = () => {
  const [error, setError] = useState(false)
  const [raw, setRaw] = useState(null)

  useEffect(() => {
    axios
      .get('https://staging.blog.rayriffy.com/api/author/rayriffy/1.json')
      .then(out => {
        console.log(out.data.data)
        setRaw(out.data.data)
      })
      .catch(err => {
        console.log(err)
        setError(true)
      })
  }, [])

  return (
    <Box>
      <Title title="Blogs" />
      <Flex alignItems="center">
        <Box mx="auto" width={[23 / 24, 23 / 24, 22 / 24, 21 / 24]}>
          <Flex flexWrap="wrap">
            {error === true ? (
              `Failed to fetch blogs`
            ) : raw === null ? (
              <Box width={1}>Loading</Box>
            ) : (
              raw.map(blog => (
                <Box width={[1, 1, 1 / 2, 1 / 2]} px={10} py={2} key={`blog-${blog.title}`}>
                  <Link href={blog.url}>
                    <Card borderRadius={6} boxShadow="8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03)" backgroundImage={`url(${blog.banner})`} backgroundSize="cover">
                      <Card px={4} pb={4} pt={'25%'} color="white" bg="rgba(0,0,0,0.2)" borderRadius={8}>
                        <Text fontWeight={500} textAlign="center">
                          {blog.title}
                        </Text>
                      </Card>
                    </Card>
                  </Link>
                </Box>
              ))
            )}
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default Blog
