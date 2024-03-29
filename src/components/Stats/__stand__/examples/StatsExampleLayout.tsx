import React from 'react';

import { Example } from '##/stand/components/Example';

import { Stats } from '../..';
import { exampleData } from '../../__mocks__/examples.mock';

export const StatsExampleLayoutDefault = () => (
  <Example>
    <Stats {...exampleData} layout="default" />
  </Example>
);

export const StatsExampleLayoutReversed = () => (
  <Example>
    <Stats {...exampleData} layout="reversed" />
  </Example>
);
