import { IconLightningBolt } from '@consta/icons/IconLightningBolt';
import React from 'react';

import { Example } from '##/stand/components/Example';

import { Stats } from '../..';
import { exampleData } from '../../__mocks__/examples.mock';

export const StatsExampleSize2XS = () => (
  <Example>
    <Stats {...exampleData} iconTitle={IconLightningBolt} size="2xs" />
  </Example>
);

export const StatsExampleSizeXS = () => (
  <Example>
    <Stats {...exampleData} iconTitle={IconLightningBolt} size="xs" />
  </Example>
);

export const StatsExampleSizeS = () => (
  <Example>
    <Stats {...exampleData} iconTitle={IconLightningBolt} size="s" />
  </Example>
);

export const StatsExampleSizeM = () => (
  <Example>
    <Stats {...exampleData} iconTitle={IconLightningBolt} size="m" />
  </Example>
);

export const StatsExampleSizeL = () => (
  <Example>
    <Stats {...exampleData} iconTitle={IconLightningBolt} size="l" />
  </Example>
);
