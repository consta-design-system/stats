import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

export const { createStand } = createConfig({
  title: 'Consta Stats',
  id: 'stats',
  groups: [
    {
      title: 'Компоненты',
      id: 'components',
      view: 'card',
    },
  ],
  group: 'Библиотеки компонентов',
  image,
  description:
    'Библиотека для отображения чисел на графиках или в инфографике.',
});
