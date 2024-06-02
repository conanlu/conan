import { useMantineColorScheme } from '@mantine/core'
import { SpotlightAction, SpotlightProvider } from '@mantine/spotlight'
import { useRouter } from 'next/router'
import { FC } from 'react'
import {
  AppWindow,
  Bookmarks,
  Home2,
  Moon,
  Notes,
  Pacman,
  Search,
  Sun,
  Timeline,
  School,
  Tool,
  Alien
} from 'tabler-icons-react'

import { ISpotlightProps } from '../../interfaces/Spotlight.interface'

const Spotlight: FC<ISpotlightProps> = ({ children }) => {
  const router = useRouter()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  const SpotlightContent = [
    {
      title: 'home',
      icon: <Home2 />,
      url: '/',
    },
    {
      title: 'projects',
      icon: <AppWindow />,
      url: '/projects',
    },
    // {
    //   title: 'articles',
    //   icon: <Notes />,
    //   url: '/articles',
    // },
    // {
    //   title: 'bookmarks',
    //   icon: <Bookmarks />,
    //   url: '/bookmarks',
    // },
    // {
    //   title: 'tools',
    //   icon: <Tool />,
    //   url: '/tools',
    // },
    {
      title: 'experience',
      icon: <Timeline />,
      url: '/coursework',
    },
    {
      title: 'coursework',
      icon: <School />,
      url: '/coursework',
    },

    {
      title: 'about',
      icon: <Alien />,
      url: '/about',
    },
    {
      title: 'toggle theme',
      icon: colorScheme === 'dark' ? <Sun /> : <Moon />,
    },
  ]

  const actions: SpotlightAction[] = SpotlightContent?.map(
    (item: { title: string; icon: any; url: string }) => ({
      title: item.title,
      icon: item.icon,
      onTrigger: item.url
        ? () => router.push(`${item.url}`)
        : () => toggleColorScheme(),
    })
  )

  return (
    <SpotlightProvider searchIcon={<Search />} actions={actions}>
      {children}
    </SpotlightProvider>
  )
}

export default Spotlight
