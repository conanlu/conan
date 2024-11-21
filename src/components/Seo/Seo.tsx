import { NextSeo } from 'next-seo'
import { NextRouter, useRouter } from 'next/router'
import React, { FC } from 'react'

const Seo: FC = () => {
  const router: NextRouter = useRouter()

  const canonicalUrl = `https://conan.report${
    router.asPath === '/' ? '' : router.asPath
  }`.split('?')[0]

  const pathname = router.asPath
  const title = pathname === '/' ? 'home' : pathname.substring(1)
  const lowercaseTitle = title.charAt(0).toLowerCase() + title.slice(1)

  return (
    <NextSeo
      title="conan.report"
      titleTemplate={`${lowercaseTitle} @ %s`}
      description="The portfolio website of Conan Lu."
      openGraph={{
        url: 'https://www.conan.report',
        title: 'conan.report',
        description:
          'The portfolio website of Conan Lu.',
        type: 'website',
        locale: 'en_IE',
        images: [
          // {
          //   url: 'https://user-images.githubusercontent.com/74212439/199986276-7c72cb14-1e54-4dc0-a355-a1f6ad7b9d18.png',
          //   width: 800,
          //   height: 600,
          //   alt: 'aycan.dev thumbnail image',
          //   type: 'image/png',
          // },
        ],
        siteName: 'conan.report',
      }}
      twitter={{
        handle: '@conanvevo',
        site: '@conanvevo',
        cardType: 'summary_large_image',
      }}
      canonical={canonicalUrl}
    />
  )
}

export default Seo
