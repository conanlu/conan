import { DefaultSeoProps } from 'next-seo'

const SEO: DefaultSeoProps = {
  title: 'conan.fyi',
  description: 'personal site and portfolio of conan lu',
  openGraph: {
    url: 'https://conan.fyi',
    title: 'conan.fyi',
    description: 'personal site and portfolio of conan lu',
    type: 'website',
    locale: 'en_IE',
    images: [
      {
        url: 'https://user-images.githubusercontent.com/74212439/199986276-7c72cb14-1e54-4dc0-a355-a1f6ad7b9d18.png',
        width: 800,
        height: 600,
        alt: 'aycan.dev thumbnail image',
        type: 'image/png',
      },
    ],
    siteName: 'conan.fyi',
  },
  twitter: {
    handle: '@conanvevo',
    site: '@conanvevo',
    cardType: 'summary_large_image',
  },
}

export default SEO
