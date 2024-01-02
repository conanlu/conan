'use client'

import { List, Timeline as MantineTimeline, Text, Title } from '@mantine/core'
import {
  useMantineTheme,
  Group,
  Image,
  Grid
} from '@mantine/core'
import { Circle, CircleDashed } from 'tabler-icons-react'

import Layout from '../../components/Layout/Layout'




const Experience = () => {
  

  const theme = useMantineTheme()



  return(
  
  <Layout>
    <Title order={1} mb={30}>
    🛠️
    </Title>
    <MantineTimeline active={1} color={theme.colorScheme === 'dark' ? 'yellow' : 'blue'}>

      <MantineTimeline.Item
        bullet={<Circle size={48} strokeWidth={4} color="white" />}
        title="software engineering intern @ infosys"
      >

      <Text size="md" mt={6}>
          <i>summer 2023</i>
        </Text>


      <Grid gutter="xl" grow>
        
        
          <Grid.Col span={6} xs={6}>
          <List center icon>
          <List.Item>
            <Text color="dimmed" size="sm">
            • developed explainability metrics for xtractedge, a document-processing tool 
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
            • utilized BERT explainability tools for sequence classification, token classification, and q&a
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
            • analyzed contract law cases 
            </Text>
          </List.Item>
        </List>
            
          </Grid.Col>
          <Grid.Col span={6} xs={6}>

          </Grid.Col>
      </Grid>
      </MantineTimeline.Item>


      <MantineTimeline.Item
        bullet={<Circle size={48} strokeWidth={4} color="white" />}
        title="research intern @ surveillance technology oversight project"
      >

      <Text size="md" mt={6}>
          <i>summer 2023</i>
        </Text>


      <Grid gutter="xl" grow>
        
        
          <Grid.Col span={6} xs={6}>
          <List center icon>
          <List.Item>
            <Text color="dimmed" size="sm">
            • spearheaded report on the threats posed by analog and digital surveillance on gender-affirming care access
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
            • authored op-ed on privacy implications of the kids online safety act (kosa)
            </Text>
          </List.Item>
          <List.Item>
            <Text color="dimmed" size="sm">
            • assisted with research on facial recognition use in nyc public venues & supermarkets
            </Text>
          </List.Item>
        </List>
            
          </Grid.Col>
          <Grid.Col span={6} xs={6}>

          </Grid.Col>
      </Grid>
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
     
    </MantineTimeline>
  </Layout>
)


    }

export default Experience
