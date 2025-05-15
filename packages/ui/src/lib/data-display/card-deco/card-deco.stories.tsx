import type { Meta, StoryObj } from '@storybook/react';
import { CardDeco } from './card-deco';
import { cardDeco } from '@packages/ui/styled-system/recipes';
import p from '@packages/ui/src/assets/p.png';
import { Text } from '@packages/ui/src/lib/typography/text/text';
const meta: Meta<typeof CardDeco> = {
  component: CardDeco,
  title: 'Data-display/CardDeco',
};
export default meta;
type Story = StoryObj<typeof CardDeco>;

export const cardDecoDefault: Story = {
  args: cardDeco.raw({}),
  render: (args) => (
    <CardDeco {...args} deco={p}>
      Event Meet Us At Adipec On 3 {'>'} 6 Nov 2025
    </CardDeco>
  ),
};

export const cardDecoNeutral: Story = {
  args: cardDeco.raw({ variant: 'neutral' }),
  render: (args) => (
    <CardDeco {...args} deco={p}>
      Event Meet Us At Adipec On 3 {'>'} 6 Nov 2025
    </CardDeco>
  ),
};
export const cardDecoBackgroundImage: Story = {
  args: cardDeco.raw({ variant: 'backgroundImage' }),
  render: (args) => (
    <CardDeco {...args} deco={p} backgroundImage={p}>
      Event Meet Us At Adipec On 3 {'>'} 6 Nov 2025
    </CardDeco>
  ),
};
