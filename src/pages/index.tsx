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
  useMantineTheme,
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


  const { colorScheme } = useMantineColorScheme()
  const { width } = useWidth()

  
  const mobile = isMobileDevice(800);

  const theme = useMantineTheme()





  return (
    <Layout>

      <Box>
        <Group position="apart">
          <Group direction="column" spacing={2}>


            <Grid>
              <Grid.Col span={mobile ? 12 : 6}>
              <Title order={1} mb={30}>
        hi, i'm conan! {theme.colorScheme == 'light' ? '🎐' : '📀'}
              {/* 🦪💿🎠🫐🎐🍄 */}
      </Title>
              {/* {mobile ? <Title>hehe</Title> : <Title>no</Title>} */}
              <Text>i'm a rising junior at harvard college studying computer science & philosophy. find my whole spiel

                {theme.colorScheme == 'light' ? 
              <Anchor href="/about" weight={500}  variant="gradient" gradient={{ from: 'blue', to: 'darkorchid' }} > <strong>here</strong>  </Anchor> :  <Anchor href="/about"  weight={500}  variant="gradient" gradient={{ from: 'yellow', to: 'rosybrown' }} > <strong>here</strong>  </Anchor>    
                }


                
                  
              and my resume
              {theme.colorScheme == 'light' ? 
              <Anchor href="../../resume.pdf" target="_blank" rel="noopener noreferrer"  weight={500}  variant="gradient" gradient={{ from: 'darkorchid', to: 'indigo' }} > <strong>here</strong></Anchor> : <Anchor target="_blank" rel="noopener noreferrer" href="../../resume.pdf" weight={500}  variant="gradient" gradient={{ from: 'rosybrown', to: 'salmon' }} > <strong>here</strong></Anchor>
              }
              .
            </Text>




              </Grid.Col>

              <Grid.Col span={mobile ? 12 : 6}>

                <Space h={mobile ? width / 16 : 0}></Space>

              <Image
      height={mobile ? width / 2 : width  / 3}
      width={mobile ? width * 7 / 8 : width * 1.12 / 4}
      radius={mobile ? "lg" : "xl"}
      // width={auto}
      src="/meee.jpg"
    />


              </Grid.Col>
              

            </Grid>
            

      
          </Group>


          
        </Group>


          <Group direction="column" mt={40}>

      

</Group>

      </Box>
    </Layout>
  )
}

export default HomePage
