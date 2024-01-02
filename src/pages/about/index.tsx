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
          meeee :)
        </Title>
        <Text weight={500} mt={20}>
        i ran an astrology blog on tumblr when i was thirteen. i also grew a tiny readership answering random questions on quora. i was even a charli xcx fan on twitter which i later quit to pursue middle school full-time.  i’ve grown a lot since then, but i still carry the experience of having lived many, many digital lives into the work i do today. at harvard, i study computer science and philosophy, where i hope to understand how technology interfaces with societies, cultures, and values.
        </Text>

        <Text weight={500} mt={20}>
        on campus, i'm the tech editor of the harvard advocate, a lovely literary magazine with an even lovelier website. i'm also involved with tech for social good and the harvard review of philosophy. 
        </Text>
        
        <Text weight={500} mt={20}>
        last summer, i interned at infosys where i developed interpretability metrics for document-processing ml models. i also researched for the surveillance technology oversight project.
        </Text>
        <Text weight={500} mt={20}>
        i've always felt that there's nothing more radical and empowering than logging and broadcasting all the media i consume online. in that vein, i'm&nbsp;
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
           
           
        </Text>


        
        <Text weight={500} mt={20}>
          finally, and i cannot stress this enough, see my resume&nbsp;
          <Anchor
            variant="link"
            href="https://drive.google.com/file/d/1GFE7QVwFNAvAmZSuFyxusM9nvb7h4IWW/view?usp=sharing" 
            rel="noopener noreferrer"
            target="_blank"
            weight={500}
            underline
          >
            here
          </Anchor>
        .

        </Text>
        {/* <Text weight={500} my={20}>
          Currently, I&apos;m working as a frontend developer at&nbsp;
          <Anchor
            href="https://90pixel.com/"
            target="_blank"
            variant="link"
            weight={500}
            underline
          >
            <strong>90Pixel</strong>
          </Anchor>
          .
        </Text>
        <Text weight={500} mt={20}>
          Along with pixel hunting, I enjoy skating, going to live music events,
          playing video games, watching TV series, and hanging out with my
          friends.
        </Text>
        <Text weight={500} mt={20}>
          Find out more about me&nbsp;
          <Anchor
            variant="link"
            href="https://read.cv/aycanogut"
            target="_blank"
            weight={500}
            underline
          >
            <strong>by visiting this page</strong>.
          </Anchor>
        </Text> */}

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
