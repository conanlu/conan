// projects api data

export const projects = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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
