'use client'


import {
  Github,
  Gmail,
  Linkedin,
  Medium,
  Twitter,
} from '@icons-pack/react-simple-icons'
import {
  Anchor,
  Box,
  Group,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core'
import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

import Layout from '../../components/Layout/Layout'


import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


const GitHubCalendar = dynamic(() => import('react-github-calendar'))
const NowPlaying = dynamic(
  () => import('../../components/NowPlaying/NowPlaying')
)

const About = () => {
  const { colorScheme } = useMantineColorScheme()
  const iconColor = colorScheme === 'dark' ? '#fff' : '#000'

  const socialMediaIcons: { component: ReactNode; url: string }[] = [
    {
      component: <Github color={iconColor} size={32} />,
      url: 'https://www.github.com/conanlu',
    },
    {
      component: <Linkedin color={iconColor} size={32} />,
      url: 'https://www.linkedin.com/in/conan-lu',
    },
    {
      component: <Twitter color={iconColor} size={32} />,
      url: 'https://twitter.com/conanvevo',
    },
    {
      component: <Gmail color={iconColor} size={32} />,
      url: 'mailto:conanlu@college.harvard.edu',
    },
  ]

  return (

    <Layout>
      <Box>
      <div className={inter.className}>

        <Title order={1} mb={30}>
        🧍🏻‍♂️
        </Title>
{/*         <Text mt={20}>
        i ran an astrology blog on tumblr when i was thirteen. i also grew a tiny readership answering random questions on quora. i even ran a charli xcx fan account on twitter, which i later quit to pursue middle school full-time. i’ve grown a lot since then, but i still carry the experience of having lived many, many digital lives into the work i do today. at harvard, i study computer science and philosophy, where i hope to understand how technology interfaces with societies, cultures, and values.
        </Text>
 */}
        <Text mt={20}>
        i study computer science & philosophy at harvard, where i explore how technology and society co-produce one another. on campus, i'm the tech editor of our collegiate literary magazine,&nbsp; 
        {/* <i>the harvard advocate</i>.  */}
        <Anchor
            href="https://theharvardadvocate.com" 
            rel="noopener noreferrer"
            target="_blank"
            weight={500}
            variant="gradient"
            gradient={{ from: 'red', to: 'red'}}
            // color="firebrick"
          >
            the harvard advocate
          </Anchor>
        .
        i've also managed pro bono software engineering projects for&nbsp; 
        <Anchor
            href="https://socialgood.hcs.harvard.edu" 
            rel="noopener noreferrer"
            target="_blank"
            weight={500}
            variant="gradient"
            gradient={{ from: 'teal', to: 'teal'}}
          >
            tech for social good
          </Anchor>
         &nbsp;and created data visualizations about boston's open spaces for the&nbsp;
         <Anchor
            href="https://why-we-gather.vercel.app" 
            rel="noopener noreferrer"
            target="_blank"
            weight={500}
            variant="gradient"
            gradient={{ from: 'crimson', to: 'crimson'}}
          >berkman klein center</Anchor>.
        </Text>
        
        <Text mt={20}>
        i'm currently interested in software engineering roles. last summer, i interned at infosys, where i developed interpretability metrics for document-processing ml models. i also contributed research to the surveillance technology oversight project, an advocacy and litigation group for digital privacy.
        </Text>

        <Text mt={20}>
          drop me a line about: online privacy, section 230, the new charli xcx album, standpoint epistemology, your favorite next.js ui kits, walter benjamin's "the work of art in the age of mechanical reproduction," girls on hbo, deepfake regulation, or anything from
          <Anchor variant="gradient"
            gradient={{ from: 'green', to: 'black'}} href="https://reallifemag.com">
          &nbsp;<i>real life. </i>
        </Anchor>
        </Text>

        

        {/* <Text mt={20}>
        currently reading: Immediacy: Or, the Style of Too-Late Capitalism by Anna Kornbluh
        currently listening: Lucifer, A.G. Cook
        </Text> */}

        {/* <Text mt={20}>
         i'm&nbsp;
        <Anchor
            variant="link"
            href="https://letterboxd.com/bjorksriddle/"
            target="_blank"
            weight={500}
            underline
          >
            @bjorksriddle
          </Anchor>
           &nbsp;on letterboxd and&nbsp;
           
           <Anchor
            variant="link"
            href="https://open.spotify.com/user/bmqkxmx8y83y1g9q3768y6oze?si=9c2869f33ed1447f"
            target="_blank"
            weight={500}
            underline
          >
            conanvevo
          </Anchor>
           &nbsp;on spotify. i also write (very sporadically) about digital culture on&nbsp;
           <Anchor
            variant="link"
            href="https://queercoding.substack.com"
            target="_blank"
            weight={500}
            underline
          >
          substack</Anchor>.
           
           
        </Text> */}


        
        <Text mt={20}>
          finally (and i cannot stress this enough) see my resume&nbsp;
          <Anchor
            variant="link"
            href="../../resume.pdf" 
            rel="noopener noreferrer"
            target="_blank"
            weight={500}  
            
            >
            here
          </Anchor>
        .

        </Text>

        </div>

      </Box>
      <Box>
        <Title order={2} mt={30} mb={30}>
          you can also find me on
        </Title>
        <Group>
          {socialMediaIcons.map(
            (icon: { component: ReactNode; url: string }) => (
              <Anchor key={icon.url} href={icon.url} target="_blank">
                {icon.component}
              </Anchor>
            )
          )}
        </Group>
      </Box>
      {/* <Box>
        <Title order={3} mt={50} mb={30}>
          My Github Stats
        </Title>
        <GitHubCalendar
          username="conanlu"
          year="last"
          style={{ maxWidth: '960px' }}
        />

        
      </Box>
      
      <NowPlaying /> */}

    </Layout>
  )
}

export default About
