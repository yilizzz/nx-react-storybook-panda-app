import type { Meta, StoryObj } from '@storybook/react';
import { CardFlip } from './card-flip';
import { cardFlip } from '@packages/ui/styled-system/recipes';
import p1 from '@packages/ui/src/assets/p.png';
import p2 from '@packages/ui/src/assets/p-inverse.png';
import { Center } from '@packages/ui/styled-system/jsx';
const meta: Meta<typeof CardFlip> = {
  component: CardFlip,
  title: 'Data-display/CardFlip',
};
export default meta;
type Story = StoryObj<typeof CardFlip>;

export const cardFlipDefault: Story = {
  args: cardFlip.raw({}),
  render: (args) => (
    <CardFlip
      {...args}
      frontContent={<Center>front</Center>}
      backContent={<Center>back</Center>}
      frontBgImage={p1}
      backBgImage={p2}
    ></CardFlip>
  ),
};
