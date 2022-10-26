import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

export const { createStand } = createConfig({
  title: 'Consta Stats',
  id: 'stats',
  groups: [
    {
      title: 'Документы',
      id: 'docs',
      initialOpen: true,
    },
    {
      title: 'Компоненты',
      id: 'components',
      view: 'card',
      initialOpen: true,
    },
  ],
  group: 'Библиотеки компонентов',
  image,
  description:
    'Библиотека для отображения чисел на графиках или в инфографике.',
});
