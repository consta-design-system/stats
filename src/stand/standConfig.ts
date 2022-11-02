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
  group: 'Отдельные компоненты',
  image,
  description:
    'Библиотека для отображения чисел на графиках или в инфографике.',
  repositoryUrl: 'https://github.com/consta-design-system/stats',
});
