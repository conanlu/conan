'use client'

import {
  CssThree,
  Html5,
  Javascript,
  Nextdotjs,
  ReactJs,
  Sass,
  Styledcomponents,
  Tailwindcss,
  Typescript,
} from '@icons-pack/react-simple-icons'
import {
  Anchor,
  Box,
  Group,
  Paper,
  Grid,
  Stack,
  Text,
  Title,
  Image,
  Space,
  Center,
  useMantineColorScheme,
} from '@mantine/core'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import useSWR from 'swr'

import Layout from '../components/Layout/Layout'
import Loader from '../components/Loader/Loader'
import useWidth from '../hooks/useWidth'
import { IArticleProps } from '../interfaces/Blog.interface'
import fetcher from '../lib/fetcher'

import isMobileDevice from "../lib/device"; // import the function


const Error = dynamic(() => import('../components/Error/Error'))

const HomePage = () => {
  const { data, error } = useSWR<IArticleProps>(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@aycanogut',
    fetcher
  )

  const { colorScheme } = useMantineColorScheme()
  const { width } = useWidth()

  
  const mobile = isMobileDevice(800);



  if (!data) return <Loader />
  if (error) return <Error />

  return (
    <Layout>

      <Box>
        <Group position="apart">
          <Group direction="column" spacing={2}>


            <Grid>
              <Grid.Col span={mobile ? 12 : 6}>
              <Title order={1} mb={30}>
        hi, i'm conan! 🎐
      {/* 🦪💿🎠🫐🎐🍄 */}
      </Title>
      {/* {mobile ? <Title>hehe</Title> : <Title>no</Title>} */}
              <Text>i'm a sophomore at harvard college studying computer science & philosophy. find my whole spiel&nbsp;
              <Link href="/about" passHref prefetch={false}>
                <Anchor component="span" weight={500} underline>
                  <strong>here</strong>
                </Anchor>
              </Link>
              , and my resume&nbsp;
              <Link href="https://drive.google.com/file/d/1GFE7QVwFNAvAmZSuFyxusM9nvb7h4IWW/view?usp=sharing" passHref target="_blank" rel="noopener noreferrer" prefetch={false}>
                <Anchor component="span" weight={500} underline>
                  <strong>here</strong>
                </Anchor>
              </Link>
              .
            </Text>

            {/* <Text mt={10}>that's me in seattle which is where i live</Text> */}



              </Grid.Col>

              <Grid.Col span={mobile ? 12 : 6}>

                <Space h={mobile ? width / 16 : 0}></Space>

              <Image
      height={mobile ? width / 2 : width  / 3}
      width={mobile ? width * 4 / 5 : width * 1.12 / 4}
      radius="xl"
      // width={auto}
      src="/meee.jpg"
    />


              </Grid.Col>
              

            </Grid>
            

      
          </Group>


          
        </Group>


          {/* <Center> */}


          <Group direction="column" mt={40}>

        




</Group>


{/* </Center> */}

{/*         
        <Group direction="column" mt={60}>
          <Title order={2}>Tech Stack</Title>
          <Paper py="lg" sx={{ background: 'rgba(0,0,0, 0.03)' }}>
            <Group position={width < 650 ? 'apart' : 'center'} spacing="lg">
              <Link
                href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                target="_blank"
              >
                <Html5 color="#E34F26" size={70} />
              </Link>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
              >
                <CssThree color="#1572B6" size={70} />
              </Link>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
              >
                <Javascript color="#F7DF1E" size={70} />
              </Link>
              <Link href="https://www.typescriptlang.org/" target="_blank">
                <Typescript color="#3178C6" size={70} />
              </Link>
              <Link href="https://reactjs.org/" target="_blank">
                <ReactJs color="#61DAFB" size={70} />
              </Link>
              <Link href="https://nextjs.org/" target="_blank">
                <Nextdotjs color="#000000" size={70} />
              </Link>
              <Link href="https://sass-lang.com/" target="_blank">
                <Sass color="#CC6699" size={70} />
              </Link>
              <Link href="https://styled-components.com/" target="_blank">
                <Styledcomponents color="#DB7093" size={70} />
              </Link>
              <Link href="https://tailwindcss.com/" target="_blank">
                <Tailwindcss color="#06B6D4" size={70} />
              </Link>
            </Group>
          </Paper>
        </Group>
        {data.items?.length && (
          <Group direction="column" mt={60}>
            <Title order={2}>Latest Articles</Title>
            <Stack spacing="xs">
              {data.items?.slice(0, 6).map((article: IArticleProps) => (
                <Text
                  key={article.title}
                  component="a"
                  href={article.link}
                  target="_blank"
                  color={colorScheme === 'dark' ? 'yellow' : 'dark'}
                  weight={700}
                  underline
                >
                  {article.title}
                </Text>
              ))}
            </Stack>
          </Group>
        )} */}
      </Box>
    </Layout>
  )
}

export default HomePage
