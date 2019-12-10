import fetch from 'isomorphic-unfetch'
import React, { useEffect, useState } from 'react'

import { Box, Flex, Heading, Spinner } from '@chakra-ui/core'

import Link from './Link'
import Title from './Title'

interface IData {
  url: string
  title: string
  subtitle: string
  banner: string
}

const Blog: React.FC = () => {
  const [error, setError] = useState(false)
  const [raw, setRaw] = useState<IData[] | null>(null)

  useEffect(() => {
    fetch('https://blog.rayriffy.com/api/author/rayriffy/1.json')
      .then(o => o.json())
      .then(data => {
        setRaw(data.data)
      })
      .catch(() => {
        setError(true)
      })
  }, [])

  return (
    <React.Fragment>
      <Title title='Blogs' />
      <Flex alignItems='center'>
        <Box mx='auto' width={[23 / 24, 23 / 24, 22 / 24, 21 / 24]}>
          <Flex flexWrap='wrap' alignItems='center'>
            {error === true ? (
              `Failed to fetch blogs`
            ) : raw === null ? (
              <Spinner />
            ) : (
              raw.map(blog => (
                <Box
                  width={['100%', '100%', 1 / 2, 1 / 2]}
                  px={5}
                  py={2}
                  key={`blog-${blog.title}`}>
                  <Link href={blog.url}>
                    <Box
                      borderRadius={6}
                      boxShadow='8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03)'
                      backgroundImage={`url(${blog.banner})`}
                      backgroundSize='cover'>
                      <Box
                        px={4}
                        pb={4}
                        pt={'25%'}
                        color='white'
                        bg='rgba(0,0,0,0.2)'
                        borderRadius={8}>
                        <Heading size='md' textAlign='center'>
                          {blog.title}
                        </Heading>
                      </Box>
                    </Box>
                  </Link>
                </Box>
              ))
            )}
          </Flex>
        </Box>
      </Flex>
    </React.Fragment>
  )
}

export default Blog
