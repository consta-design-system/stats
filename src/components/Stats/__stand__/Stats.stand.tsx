import { createStand } from '##/stand/standConfig';

import image from './Stats.image.svg';

export default createStand({
  title: 'Stats',
  id: 'Stats',
  image,
  group: 'components',
  description:
    'Компонент для отображения чисел, с заголовком, единицами измерения, иконками и другими настройками.',
  version: '1.0.3',
  status: 'stable',
});
