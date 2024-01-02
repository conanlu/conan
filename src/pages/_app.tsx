import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'
import { TrackingHeadScript } from '@phntms/next-gtm'
import { Analytics } from '@vercel/analytics/react'
import { setCookies } from 'cookies-next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import { useState } from 'react'

import GlobalStyles from '../components/GlobalStyles/GlobalStyles'
import Seo from '../components/Seo/Seo'
import Spotlight from '../components/Spotlight/Spotlight'

import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })


const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || ''

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark')
    setColorScheme(nextColorScheme)
    setCookies('mantine-color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    })
  }

  return (
    <>
      <Head>


      <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />

  <link href="https://fonts.googleapis.com/css2?family=Fragment+Mono&display=swap" rel="stylesheet" />





        
        <title>conan&apos;s site</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <GoogleAnalytics trackPageViews />
      <TrackingHeadScript id={GA_TRACKING_ID} />
      <Seo />
      <GlobalStyles />
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme, 
            
            fontFamily: 'Fragment Mono, sans-serif',
            headings: { fontFamily: 'Fragment Mono, sans-serif' },
          
          
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider>
            <Spotlight>
              <Component {...pageProps} />
              <Analytics />
            </Spotlight>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}
