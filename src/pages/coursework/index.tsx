'use client'

import { List, Timeline as MantineTimeline, Text, Title } from '@mantine/core'
import {
  useMantineTheme
} from '@mantine/core'
import { Circle, CircleDashed } from 'tabler-icons-react'

import Layout from '../../components/Layout/Layout'




const Coursework = () => {
  

  const theme = useMantineTheme()



  return(
  
  <Layout>
    <Title order={1} mb={30}>
    🏫
    </Title>
    <MantineTimeline active={1} color={theme.colorScheme === 'dark' ? 'yellow' : 'blue'}>
    <MantineTimeline.Item
        bullet={<Circle size={48} strokeWidth={4} color="white" />}
        title="spring 2025"
      >
        <List center icon>
          <List.Item>
            <Text color="dimmed" size="sm">
              cs 1820: planning and learning methods in ai
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              german 192: artificial intelligences: body, art, and technology in modern germany
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              phil 173e: contemporary metaethics
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              gened 1001: stories at the end of the world
            </Text>
          </List.Item>
        </List>
      </MantineTimeline.Item>
    <MantineTimeline.Item
        bullet={<Circle size={48} strokeWidth={4} color="white" />}
        title="fall 2024"
      >
        <List center icon>
          <List.Item>
            <Text color="dimmed" size="sm">
              cs 61: systems programming and machine organization
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              emr 157: techno-orientalism: asia, futurity, technology
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              phil 98: normative philosophy of computing
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              phil 4: logic i
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              teaching fellow, cs 1200 (introduction to algorithms and their limitations)
            </Text>
          </List.Item>
        </List>
      </MantineTimeline.Item>
      <MantineTimeline.Item
        bullet={<Circle size={48} strokeWidth={4} color="white" />}
        title="spring 2024"
      >
        <List center icon>
          <List.Item>
            <Text color="dimmed" size="sm">
              cs 124: data structures and algorithms
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              wgss 1425: gender and technology, gender as technology
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              phil 97: low brow media
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              phil 16: sex, love, and friendship
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              teaching fellow, cs 20 (discrete math for computer science)
            </Text>
          </List.Item>
        </List>

        {/* <Text size="xs" mt={4}>
          Now
        </Text> */}
      </MantineTimeline.Item>
      {/* <MantineTimeline.Item
        bullet={<Circle size={48} strokeWidth={4} color="white" />}
        title="Learning and growing"
      >
        <List center icon>
          <List.Item>
            <Text color="dimmed" size="sm">
              - Working to enhance and refine my JavaScript skills and
              abilities.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              - Acquiring knowledge and understanding of web accessibility
              principles, to ensure inclusive design and user experience.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              - Investigating design systems and testing methodologies to
              enhance the development process and produce high-quality, robust
              software.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              - Participating in open-source projects to further develop
              expertise and contribute to the software development community.
            </Text>
          </List.Item>
        </List>
        <Text size="xs" mt={4}>
          2022
        </Text>
      </MantineTimeline.Item> */}
      <MantineTimeline.Item
        bullet={<Circle size={48} strokeWidth={4} color="white" />}
        title="fall 2023"
        // lineVariant="dashed"
      >
        <List center icon>
          <List.Item>
            <Text color="dimmed" size="sm">
              cs 120: introduction to algorithms and their limitations
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              cs 105: privacy and technology
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              stat 110: intro to probability
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              phil 166t: philosophy of technology
            </Text>
          </List.Item>
          
        </List>

      </MantineTimeline.Item>
      <MantineTimeline.Item
        bullet={<Circle size={48} strokeWidth={4} color="white" />}
        title="spring 2023"
        // lineVariant="dashed"
      >
        <List center icon>
          <List.Item>
            <Text color="dimmed" size="sm">
              cs 51: abstraction and design in computation
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              cs 20: discrete math for computer science
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              frsemr 65g: what (and who) to believe?
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              expos 20: the art of the con
            </Text>
          </List.Item>
        </List>
 
      </MantineTimeline.Item>
      <MantineTimeline.Item
        bullet={<Circle size={48} strokeWidth={4} color="white" />}
        title="fall 2022"
        // lineVariant="dashed"
      >
        <List center icon>
          <List.Item>
            <Text color="dimmed" size="sm">
              cs 50: introduction to computer science
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              math 22a: linear algebra and proofs
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              gov 1290: democracy and authoritarianism
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              gened 1166: pluralism
            </Text>
          </List.Item>
        </List>
        {/* <Text size="xs" mt={4}>
          fall 2022
        </Text> */}
      </MantineTimeline.Item>
      {/* <MantineTimeline.Item
        title="redmond high school"
        bullet={<CircleDashed size={48} strokeWidth={4} color="gray" />}
        lineVariant="dashed"
      >
        <List center icon>
          <List.Item>
            <Text color="dimmed" size="sm">
              - president, national honor society.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              - Completed numerous courses and several small-scale projects.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              - Utilized freecodecamp and The Odin Project as primary
              educational resources.
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
              - Successfully graduated from a bootcamp program.
            </Text>
          </List.Item>
        </List>
        <Text size="xs" mt={4}>
          2020
        </Text>
      </MantineTimeline.Item>
      <MantineTimeline.Item
        title="born (yay!!!)"
        bullet={<CircleDashed size={48} strokeWidth={4} color="gray" />}
      >
        <Text size="xs" mt={4}>
          2004
        </Text>
      </MantineTimeline.Item> */}
    </MantineTimeline>
  </Layout>
)


    }

export default Coursework
