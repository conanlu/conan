import localFont from 'next/font/local';

export const redditMono = localFont({
  src: [
    {
      path: './RedditMono-Regular.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './RedditMono-Bold.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
});