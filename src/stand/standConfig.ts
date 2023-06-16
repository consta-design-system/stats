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
  group: 'Специальные компоненты',
  image,
  description:
    'Библиотека для отображения чисел на графиках или в инфографике.',
  repositoryUrl: 'https://github.com/consta-design-system/stats',
  figmaUrl:
    'https://www.figma.com/file/zRmNruMvaTfq1TS4dVKVuN/Consta-Widgets-(Community)?type=design&node-id=1087-1377&t=mFXEhF54IOvJKMki-0',
});
