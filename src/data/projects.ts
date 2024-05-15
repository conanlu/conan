// projects api data

export const projects = [
  {
    id: 0,
    title: 'Why We Gather',
    description: 'Visualizing parks & gathering spaces from Boston\'s open data. Exhibit presented at the Museum of Science as part of the Berkman Klein Center Spring 2024 Research Sprint.',
    stack: ['React.js', 'Vite', 'Mantine', 'Python', 'pandas'],
    links: [
      {
        link: 'https://github.com/tzhang1hsph/BKC_group3',
        id: 1,
      },
      {
        link: 'https://why-we-gather.vercel.app',
        id: 2,
      },
    ],
  },
  {
    id: 1,
    title: 'conan.fyi',
    description: 'this personal portfolio. based on template from aycan.dev',
    stack: ['React.js', 'Next.js', 'TypeScript', 'Mantine'],
    links: [
      {
        link: 'https://github.com/conanlu/conan',
        id: 1,
      },
      {
        link: 'https://conan.fyi',
        id: 2,
      },
    ],
  },
  {
    id: 2,
    title: 'ensemble perturbations ',
    description: 'inspired by anti-surveillance fashion and clearview ai discourse, i render photos illegible to facial detection algorithms using GANs and facial landmarks.',
    stack: ['computer vision', 'python', 'opencv', 'ffmpeg'],
    links: [
      {
        link: 'https://github.com/conanlu/ensemble-perturbation',
        id: 1,
      },
    ],
  },
  {
    id: 3,
    title: 'ChordGAN',
    description:
      'Symbolic Music Style Transfer with Chroma Feature Extraction. Research presented at AIMC 2021, ISEF 2021',
    stack: ['machine learning', 'python', 'GANs', 'tensorflow', 'keras'],
    links: [
      {
        link: 'https://conanlu.github.io/chordgan',
        id: 2,
      },
    ],
  },
 
]
