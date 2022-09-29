import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

const groups = [
  {
    title: 'Компоненты',
    id: 'components',
  },
] as const;

export const { createStand } = createConfig({
  title: 'Consta Stats',
  id: 'stats',
  groups,
  group: 'Библиотеки компонентов',
  image,
  description:
    'Библиотека для отображения чисел на графиках или в инфографике.',
});
