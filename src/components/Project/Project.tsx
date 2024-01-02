import {
  Anchor,
  Badge,
  Box,
  Divider,
  Group,
  Paper,
  Image,
  Center,
  Text,
  useMantineTheme,
} from '@mantine/core'
import React, { FC } from 'react'
import { BrandGithub, BrandVercel, Link } from 'tabler-icons-react'

import { IProjectProps } from '../../interfaces/Project.interface'
import Transition from '../Transition/Transition'
import useStyles from './Project.styles'

const Project: FC<IProjectProps> = ({ title, description, links, stack }) => {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  return (
    <Transition whileHover={{ scale: 1.03 }}>
      <Paper
        className={classes.card}
        withBorder
        radius="lg"
        // shadow="md"
        px="md"
        py="xs"
      >
        <Group className={classes.cardLayout}>
          <Group position="apart" sx={{ width: '100%' }}>
            <Text className={classes.title} size="md" weight={700} mb="xs">
              {title}
            </Text>
            <Box>
              {links &&
                links.map((link: { link: string; id: number }) =>
                  link.id == 1 ? (
                    <Anchor
                      key={link.id}
                      component="a"
                      href={link.link}
                      target="_blank"
                      mr={8}
                      aria-label="Link to project on GitHub"
                    >
                      <BrandGithub
                        size={22}
                        strokeWidth={2}
                        color={theme.colorScheme === 'dark' ? 'white' : 'black'}
                      />
                    </Anchor>
                  ) : (
                    <Anchor
                      key={link.id}
                      component="a"
                      href={link.link}
                      target="_blank"
                    >
                      <Link
                        size={22}
                        strokeWidth={2}
                        color={theme.colorScheme === 'dark' ? 'white' : 'black'}
                        aria-label="Link to project on Vercel"
                      />
                    </Anchor>
                  )
                )}
            </Box>
            
          </Group>


          <Group direction="column" mt={5}>

          <Text mb={5} size="sm">
            {description}
          </Text>

            <Center>
              <Group direction="column">
{/* 

          <Image
      align="center"
      radius="0px"
      height={270}
      w="auto"
      src="/meee.jpg"
    /> */}
    </Group>

</Center>


            </Group>
          
          <Box sx={{ width: '100%', height: '100%' }}>
            
            <Divider my="xs" mt="auto" size="xs" />
            
            {stack &&
              stack.map((item: string) => (
                <Badge
                  key={item}
                  size="xs"
                  variant="outline"
                  color={theme.colorScheme === 'dark' ? 'yellow' : 'dark'}
                  ml={theme.breakpoints.xs ? 0 : 10}
                  mr={theme.breakpoints.xs ? 10 : 0}
                >
                  {item}
                </Badge>
              ))}
          </Box>
          
        </Group>
      </Paper>
    </Transition>
  )
}

export default Project
